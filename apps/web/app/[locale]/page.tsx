"use client";

import { useTranslations } from "next-intl";
import PageClient from "@/[locale]/page.client";

export default function Home() {
  const t = useTranslations("applications");

  return (
    <div className="w-full flex-1 py-[7rem] flex flex-col items-center  bg-gray-200">
      <div className="flex flex-col items-center w-[100rem]">
        <h2 className="w-full text-center bg-white text-gray-900 ko-text-head1 px-[2rem] py-[3.2rem] mb-[1.75rem]">
          {t("title")}
        </h2>
        <PageClient />
      </div>
    </div>
  );
}
