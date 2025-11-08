import dotenv from "dotenv";

dotenv.config();

export const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;
export const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
export const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(
  /\\n/g,
  "\n"
);
export const SHEET_HEADER_MAP = {
  key: "key",
  ko: "ko",
  en: "en",
  de: "de",
};
export const LOCALE_PATH = "./messages";
export const GOOGLE_SHEET_TITLE = "open-mission-messages";
export const SHEET_ID = 0;
