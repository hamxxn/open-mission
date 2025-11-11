"use client";

import React from "react";
import { usePathname, useRouter } from "@i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

import logo from "@public/assets/logo.png";

export default function Header() {
  const t = useTranslations("header");
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
  };
  return (
    <div className="mb-[7.2rem]">
      <header className="fixed bg-white top-0 left-0 right-0 z-10 flex h-[7.2rem] justify-between items-center px-8 border-b border-gray-300">
        <h1 className="flex items-center gap-4">
          <Image src={logo} alt="logo" width={20} height={20} />
          <span className="text-gray-900 ko-text-head3 text-nowrap">
            {t("title")}
          </span>
        </h1>
        <div className="flex items-center gap-5">
          <button
            className="text-black ko-text-body2 cursor-pointer"
            onClick={() => handleLocaleChange("ko")}
          >
            🇰🇷 KO
          </button>
          <button
            className="text-black ko-text-body2 cursor-pointer"
            onClick={() => handleLocaleChange("en")}
          >
            🇺🇸 EN
          </button>
          <button
            className="text-black  ko-text-body2 cursor-pointer"
            onClick={() => handleLocaleChange("de")}
          >
            🇩🇪 DE
          </button>
        </div>
      </header>
    </div>
  );
}
