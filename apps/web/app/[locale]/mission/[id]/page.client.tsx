"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import { Button } from "@components/button/Button";
import type { MissionStatus } from "@constants/mission-status";

interface PageClientProps {
  submissionStartDateTime: Date;
  endDateTime: Date;
  status: MissionStatus;
  submitted: boolean;
}

export default function PageClient({
  submissionStartDateTime,
  endDateTime,
  status,
  submitted,
}: PageClientProps) {
  const router = useRouter();
  const t = useTranslations("mission.buttons");
  const isNotReady = submissionStartDateTime > new Date();
  const isNotSubmittable = status !== "OPEN" && status !== "SUBMITTABLE";
  const isSubmitDisabled =
    submitted || isNotReady || isNotSubmittable || endDateTime < new Date();

  const getSubmitButtonText = () => {
    if (submitted) return t("submitted");
    if (isNotReady) return t("ready");
    return t("submit");
  };

  const handleBackButtonClick = () => {
    router.back();
  };

  return (
    <div className="w-400 bg-white px-8 py-[3.2rem] flex gap-[1.6rem]">
      <Button
        className="w-full bg-white border border-gray-900 text-gray-900 rounded-none"
        onClick={handleBackButtonClick}
      >
        {t("back")}
      </Button>
      <Button className="w-full rounded-none" disabled={isSubmitDisabled}>
        {getSubmitButtonText()}
      </Button>
    </div>
  );
}
