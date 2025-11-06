"use client";

import React from "react";
import { usePathname, useRouter } from "@i18n/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
  };
  return (
    <div className="flex flex-row gap-2">
      <button
        className="text-blue-gray-500 text-en-head1"
        onClick={() => handleLocaleChange("ko")}
      >
        ko
      </button>
      <button
        className="text-blue-gray-500 text-en-head1"
        onClick={() => handleLocaleChange("en")}
      >
        en
      </button>
    </div>
  );
}
