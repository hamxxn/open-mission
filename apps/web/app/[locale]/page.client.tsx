import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import ic_down from "@assets/ic_down.svg";
import ic_up from "@assets/ic_up.svg";
import { mockupMissionList } from "@constants/mockup";
import MissionCard from "@components/mission-card/MissionCard";

export default function PageClient() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const t = useTranslations("applications");
  const handlePanelClick = () => {
    setIsPanelOpen(!isPanelOpen);
  };
  return (
    <div className="w-full flex flex-col   bg-white">
      <div className="flex items-center justify-between  px-[2rem] py-[3.2rem]">
        <div className="text-gray-900 ko-text-head2">
          {t("techcourse")} {t("web")} {8} {t("generation")}
        </div>
        <button
          className="text-gray-900 text-body2 cursor-pointer"
          onClick={handlePanelClick}
        >
          <Image
            src={isPanelOpen ? ic_up : ic_down}
            alt={isPanelOpen ? "pannel-open" : "pannel-close"}
          />
        </button>
      </div>
      {isPanelOpen && (
        <div className="flex flex-col gap-[1.6rem] px-[2rem] py-[3.2rem]">
          {mockupMissionList.map((item) => (
            <MissionCard key={item.week} mission={item} />
          ))}
        </div>
      )}
    </div>
  );
}
