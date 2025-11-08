import fs from "fs";
import dotenv from "dotenv";
import {
  loadSpreadsheet,
  GOOGLE_SHEET_ID,
  GOOGLE_PRIVATE_KEY,
  SHEET_HEADER_MAP,
} from "./index.js";

dotenv.config();

const getSheetCount = (doc) => {
  return doc.sheetCount;
};

const getSheetData = async (sheet) => {
  const rows = await sheet.getRows();
  return rows.map((row) => ({
    key: row.get(SHEET_HEADER_MAP.key),
    ko: row.get(SHEET_HEADER_MAP.ko),
    en: row.get(SHEET_HEADER_MAP.en),
    de: row.get(SHEET_HEADER_MAP.de),
  }));
};

const getLngData = async (data) => {
  const koData = {};
  const engData = {};
  const deData = {};
  data.forEach((item) => {
    koData[item.key] = item.ko;
    engData[item.key] = item.eng;
    deData[item.key] = item.de;
  });
  return { koData, engData, deData };
};

const writeJsonFile = (data, fileName) => {
  fs.writeFileSync(
    `./messages/${fileName}.json`,
    JSON.stringify(data, null, 2)
  );
};

async function downloadMessages() {
  if (!GOOGLE_SHEET_ID || !GOOGLE_PRIVATE_KEY) {
    throw new Error("GOOGLE_SHEET_ID or GOOGLE_PRIVATE_KEY is not set");
  }

  const doc = await loadSpreadsheet();
  if (!doc) {
    throw new Error("Failed to load spreadsheet");
  }

  const sheetsCount = getSheetCount(doc);

  for (let i = 0; i < sheetsCount; i++) {
    const sheet = doc.sheetsByIndex[i];
    const data = await getSheetData(sheet);
    const { koData, engData, deData } = await getLngData(data);

    writeJsonFile(koData, "ko");
    writeJsonFile(engData, "en");
    writeJsonFile(deData, "de");
  }
}

(async () => {
  try {
    await downloadMessages();
    console.log("✅ Downloaded messages successfully");
  } catch (error) {
    console.error("❌ Failed to download messages:", error.message);
    process.exit(1);
  }
})();
