import fs from "fs";
import dotenv from "dotenv";
import {
  loadSpreadsheet,
  GOOGLE_SHEET_ID,
  GOOGLE_PRIVATE_KEY,
  SHEET_HEADER_MAP,
} from "./index.js";

dotenv.config();

async function makeJsonFile() {
  if (!GOOGLE_SHEET_ID || !GOOGLE_PRIVATE_KEY) {
    throw new Error("GOOGLE_SHEET_ID or GOOGLE_PRIVATE_KEY is not set");
  }

  const doc = await loadSpreadsheet();
  if (!doc) {
    throw new Error("Failed to load spreadsheet");
  }
  const sheetsCount = doc.sheetCount;

  for (let i = 0; i < sheetsCount; i++) {
    const sheet = doc.sheetsByIndex[i];
    const rows = await sheet.getRows();

    const data = rows.map((row) => ({
      key: row.get(SHEET_HEADER_MAP.key),
      ko: row.get(SHEET_HEADER_MAP.ko),
      en: row.get(SHEET_HEADER_MAP.en),
      de: row.get(SHEET_HEADER_MAP.de),
    }));

    const koData = {};
    const engData = {};
    const deData = {};

    data.forEach((item) => {
      koData[item.key] = item.ko;
      engData[item.key] = item.eng;
      deData[item.key] = item.de;
    });

    fs.writeFileSync(`./messages/ko.json`, JSON.stringify(koData, null, 2));
    fs.writeFileSync(`./messages/en.json`, JSON.stringify(engData, null, 2));
    fs.writeFileSync(`./messages/de.json`, JSON.stringify(deData, null, 2));
  }
}

(async () => {
  try {
    await makeJsonFile();
    console.log("✅ Downloaded messages successfully");
  } catch (error) {
    console.error("❌ Failed to download messages:", error.message);
    process.exit(1);
  }
})();
