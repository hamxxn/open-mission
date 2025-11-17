"use client";

import { useEffect, useRef, useState } from "react";

// 가운데 카드 인덱스를 반환하는 훅
export function useScrollCenterIndex<T extends HTMLElement>() {
  const containerRef = useRef<T | null>(null);
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const containerElement = containerRef.current;
    if (!containerElement) return;
    const children = Array.from(containerElement.children) as HTMLElement[];
    if (!children.length) return;

    const handleScroll = () => {
      const containerRect = containerElement.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let smallestDistance = Infinity;

      children.forEach((child, i) => {
        const rect = child.getBoundingClientRect();
        const childCenter = rect.left + rect.width / 2;
        const distance = Math.abs(childCenter - containerCenter);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = i;
        }
      });

      setCenterIndex(closestIndex);
    };

    handleScroll();
    containerElement.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => containerElement.removeEventListener("scroll", handleScroll);
  }, []);

  return { containerRef, centerIndex, setCenterIndex };
}
