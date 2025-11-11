import React from "react";
import { useTranslations } from "next-intl";

export default function TestInfoModal() {
  const t = useTranslations("card.testResult.modal");

  return (
    <div className="absolute bottom-full right-0 mb-[0.8rem] w-[30rem] rounded-2xl bg-gray-200 p-[1.6rem] shadow-lg z-50">
      <ul className="list-disc pl-[1.6rem] text-gray-900 text-start ko-text-caption1">
        <li>{t("info1")}</li>
        <li>{t("info2")}</li>
        <li>{t("info3")}</li>
        <li>{t("info4")}</li>
      </ul>
    </div>
  );
}
