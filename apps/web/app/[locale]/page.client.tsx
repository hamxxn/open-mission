import { useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useVirtualizer } from "@tanstack/react-virtual";

import { ic_down, ic_up } from "@assets/index";
import { mockupMissionList } from "@/mock/index";
import { MissionCard } from "@components/index";

export default function PageClient() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const t = useTranslations("applications");
  const handlePanelClick = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: mockupMissionList.length,
    getScrollElement: () => containerRef.current,
    estimateSize: () => 200,
    overscan: 1,
    paddingStart: 16,
  });

  return (
    <div className="w-full flex flex-col bg-white ">
      <div className="flex items-center justify-between px-[2rem] py-[3.2rem]">
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
        <div ref={containerRef} className="h-[50rem] overflow-y-auto px-[2rem]">
          <div
            style={{
              position: "relative",
              height: `${virtualizer.getTotalSize()}`,
              width: "100%",
            }}
          >
            {virtualizer.getVirtualItems().map((vi) => {
              const isLoaderSlot = vi.index >= mockupMissionList.length;
              return (
                <div
                  key={vi.key}
                  data-index={vi.index}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${vi.start}px)`,
                  }}
                  ref={virtualizer.measureElement}
                >
                  {!isLoaderSlot && (
                    <MissionCard mission={mockupMissionList[vi.index]!} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
