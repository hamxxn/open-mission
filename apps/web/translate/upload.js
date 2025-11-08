import {
  SHEET_HEADER_MAP,
  loadSpreadsheet,
  LOCALE_PATH,
  GOOGLE_SHEET_TITLE,
  SHEET_ID,
} from "./index.js";
import fs from "node:fs/promises";

import dotenv from "dotenv";
dotenv.config();

const getSheetById = (doc, id) => {
  return doc.sheetsByIndex[id];
};

async function uploadMessages() {
  const doc = await loadSpreadsheet();
  if (!doc) {
    throw new Error("Failed to load spreadsheet");
  }
  const lngFiles = await fs.readdir(LOCALE_PATH);
  let keyMap = {};
  for (const file of lngFiles) {
    const jsonPath = `${LOCALE_PATH}/${file}`;
    const raw = await fs.readFile(jsonPath, "utf8");
    keyMap = getKeyMap(keyMap, JSON.parse(raw), file);
  }

  await updateTranslationsFromKeyMapToSheet(doc, keyMap);
}

const getKeyMap = (keyMap, data, lng) => {
  const lngKey = lng.split(".")[0];
  for (const [key, value] of Object.entries(data)) {
    if (!keyMap[key]) {
      keyMap[key] = {};
    }
    keyMap[key][lngKey] = value;
  }
  return keyMap;
};

const updateTranslationsFromKeyMapToSheet = async (doc, keyMap) => {
  let sheet = getSheetById(doc, SHEET_ID);
  if (!sheet) {
    sheet = await createSheet(doc, GOOGLE_SHEET_TITLE);
    console.log("Created sheet:", sheet);
  }
  const rows = await sheet.getRows();
  const existingKey = {};
  const addedRows = [];

  rows.forEach((row) => {
    const key = row.get(SHEET_HEADER_MAP.key);
    if (keyMap[key]) {
      existingKey[key] = true;
    }
  });

  for (const [key, translations] of Object.entries(keyMap)) {
    if (!existingKey[key]) {
      const row = {
        [SHEET_HEADER_MAP.key]: key,
        ...Object.keys(translations).reduce((result, lng) => {
          const header = SHEET_HEADER_MAP[lng];
          result[header] = translations[lng];

          return result;
        }, {}),
      };
      addedRows.push(row);
    }
  }
  await sheet.addRows(addedRows);
};

const createSheet = async (doc, title) => {
  const sheet = await doc.addSheet({
    title: title,
    headerValues: Object.values(SHEET_HEADER_MAP),
  });
  return sheet;
};

(async () => {
  try {
    await uploadMessages();
    console.log("✅ Uploaded messages successfully");
  } catch (error) {
    console.error("❌ Failed to upload messages:", error.message);
    process.exit(1);
  }
})();
