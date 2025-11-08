import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import dotenv from "dotenv";
import {
  GOOGLE_SHEET_ID,
  GOOGLE_CLIENT_EMAIL,
  GOOGLE_PRIVATE_KEY,
  SORT_ORDER,
} from "../constants/translate.js";

dotenv.config();

export function serviceAccountAuth() {
  return new JWT({
    email: GOOGLE_CLIENT_EMAIL,
    key: GOOGLE_PRIVATE_KEY,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function loadSpreadsheet() {
  const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth());
  await doc.loadInfo();

  return doc;
}

export function getSheetById(doc, id) {
  return doc.sheetsByIndex[id];
}

export async function sortSheet(doc, sheet) {
  const request = {
    sortRange: {
      range: {
        sheetId: sheet.sheetId,
        startRowIndex: 1,
        endRowIndex: sheet.rowCount,
        startColumnIndex: 0,
        endColumnIndex: sheet.columnCount,
      },
      sortSpecs: [
        {
          dimensionIndex: 0,
          sortOrder: SORT_ORDER,
        },
      ],
    },
  };

  try {
    await doc.sheetsApi.post(`:batchUpdate`, {
      json: { requests: [request] },
    });
    console.log("✅ Sheet sorted successfully");
  } catch (error) {
    console.error("❌ Error sorting sheet:", error);
  }
}
