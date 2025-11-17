"use client";

import React from "react";
import {
  getScrollContainerInfo,
  getChildCenterInContainer,
} from "@/[locale]/message/[id]/utils/scroll-utils";

// 특정 인덱스로 스크롤하는 훅
export function useScrollToIndex(containerRef: React.RefObject<HTMLElement>) {
  const scrollToIndex = (index: number) => {
    const containerElement = containerRef.current;
    if (!containerElement) return;

    const info = getScrollContainerInfo(containerElement);
    if (!info) return;

    const { containerRect, containerCenter, children } = info;
    const target = children[index];
    if (!target) return;

    const targetCenter = getChildCenterInContainer(target, containerRect);

    const scrollLeft =
      containerElement.scrollLeft + (targetCenter - containerCenter);

    containerElement.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  };

  return { scrollToIndex };
}
