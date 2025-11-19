"use client";

import Article from "@components/article/Article";
import { articleMockup } from "@/mock/index";
import { cn } from "@utils/cn";
import {
  useScrollCenterIndex,
  useScrollToIndex,
} from "@/[locale]/message/[id]/hooks/index";

export default function ArticleSliderClient() {
  const { centerIndex, containerRef, isScrolling } =
    useScrollCenterIndex<HTMLDivElement>();
  const { scrollToIndex } = useScrollToIndex(containerRef);
  const DURATION = 400;

  return (
    <div className="relative w-full py-[5rem]">
      {/* 슬라이더 영역 */}
      <div
        ref={containerRef}
        className="
          relative mx-auto max-w-[100rem]
          flex overflow-x-auto
          snap-x snap-mandatory
          scrollbar-hide
        "
      >
        {articleMockup.map((article, index) => {
          const isCenter = index === centerIndex;

          return (
            <div
              key={index}
              className={cn(
                `
                snap-center flex-shrink-0 px-[1rem]
                transition-transform duration-[${DURATION}ms] ease-out
                scrollbar-hide
                `,
                isCenter
                  ? "scale-100 opacity-100 h-[35rem] w-[55rem]"
                  : "scale-95 opacity-70 h-[30rem] w-[50rem]"
              )}
            >
              <Article {...article} isCenter={isCenter && !isScrolling} />
            </div>
          );
        })}
      </div>

      {/* dot 영역 */}
      <div className="mt-[2rem] flex items-center justify-center gap-[1rem]">
        {articleMockup.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex?.(i)}
            className={cn(
              `rounded-[1rem] transition-all duration-[${DURATION}ms] cursor-pointer`,
              centerIndex === i
                ? "w-[2.3rem] h-[1.5rem] bg-gray-900"
                : "w-[1.5rem] h-[1.5rem] bg-gray-400 hover:bg-gray-500"
            )}
          />
        ))}
      </div>
    </div>
  );
}
