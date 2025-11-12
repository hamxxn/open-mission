"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

import type { Judgment } from "@type/index";
import { Button } from "@components/index";
import { ic_info } from "@assets/index";

const TestInfoModal = dynamic(
  () =>
    import("@components/mission-card/@modal/(.)test-info-modal/TestInfoModal"),
  {
    ssr: false,
  }
);

interface MissionTestResultProps {
  testable: boolean;
  judgment: Judgment;
}

export default function MissionTestResult({
  testable,
  judgment,
}: MissionTestResultProps) {
  const t = useTranslations("card.testResult");

  const [isTestInfoModalOpen, setIsTestInfoModalOpen] = useState(false);
  const handleTestInfoModalOpen = () => {
    setIsTestInfoModalOpen(true);
  };
  const handleTestInfoModalClose = () => {
    setIsTestInfoModalOpen(false);
  };

  const isTestable =
    testable && (judgment.status === "PENDING" || judgment.status === "FAILED");

  return (
    <div className="flex flex-col border-t border-gray-300 pt-[1rem] gap-[0.4rem]">
      <div className="flex justify-between">
        <p className="flex items-center ko-text-head3 gap-[0.5rem]">
          <span className="text-gray-900">{t("title")}</span>
          <span className="text-gray-900">:</span>
          <span className="text-green">
            {judgment.passCount}/{judgment.totalCount}
          </span>
        </p>
        <Button disabled={!isTestable}>{t("test")}</Button>
      </div>
      <div className="flex items-center gap-[0.4em] ko-text-body2">
        <span className="text-gray-900 k">{t("commit")}</span>
        <span className="text-gray-900">:</span>
        <Link href={judgment.commitUrl} className="text-blue underline">
          @{judgment.commitHash.slice(0, 6)}
        </Link>
      </div>
      <div className="flex justify-end items-center gap-[0.4em] ">
        <p className="text-gray-600 ko-text-caption1">{t("description")}</p>
        <button
          className="cursor-pointer relative"
          onMouseEnter={handleTestInfoModalOpen}
          onMouseLeave={handleTestInfoModalClose}
        >
          <Image src={ic_info} alt="info" width={16} height={16} />
          {isTestInfoModalOpen && <TestInfoModal />}
        </button>
      </div>
    </div>
  );
}
