"use client";

import { useEffect, useRef, useState } from "react";

// 가운데 카드 인덱스를 반환하는 훅
export function useScrollCenterIndex<T extends HTMLElement>() {
  const containerRef = useRef<T | null>(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const containerElement = containerRef.current;
    if (!containerElement) return;

    let scrollTimer: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      setIsScrolling(true);

      const children = Array.from(containerElement.children) as HTMLElement[];
      if (!children.length) return;

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

      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    handleScroll();
    containerElement.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      containerElement.removeEventListener("scroll", handleScroll);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, []);

  return { containerRef, centerIndex, isScrolling };
}
