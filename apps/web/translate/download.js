import fs from "fs";
import { loadSpreadsheet, getSheetById } from "./util/google-sheet.js";
import {
  GOOGLE_SHEET_ID,
  GOOGLE_PRIVATE_KEY,
  SHEET_HEADER_MAP,
  SHEET_ID,
} from "./constants/translate.js";
import { ERROR_MESSAGES } from "./constants/errors.js";

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
  const enData = {};
  const deData = {};
  data.forEach((item) => {
    koData[item.key] = item.ko;
    enData[item.key] = item.en;
    deData[item.key] = item.de;
  });
  return { koData, enData, deData };
};

const writeJsonFile = (data, fileName) => {
  fs.writeFileSync(
    `./messages/${fileName}.json`,
    JSON.stringify(data, null, 2)
  );
};

async function downloadMessages() {
  if (!GOOGLE_SHEET_ID) {
    throw new Error(ERROR_MESSAGES.GOOGLE_SHEET_ID_NOT_SET);
  }
  if (!GOOGLE_PRIVATE_KEY) {
    throw new Error(ERROR_MESSAGES.GOOGLE_PRIVATE_KEY_NOT_SET);
  }
  const doc = await loadSpreadsheet();

  if (!doc) {
    throw new Error(ERROR_MESSAGES.FAILED_TO_LOAD_SPREADSHEET);
  }

  const sheet = getSheetById(doc, SHEET_ID);
  if (!sheet) {
    throw new Error(ERROR_MESSAGES.SHEET_NOT_FOUND);
  }
  const data = await getSheetData(sheet);
  const { koData, enData, deData } = await getLngData(data);

  writeJsonFile(koData, "ko");
  writeJsonFile(enData, "en");
  writeJsonFile(deData, "de");
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
