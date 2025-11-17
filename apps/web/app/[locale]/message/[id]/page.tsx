import { messageMockup } from "@/mock/index";
import ArticleSliderClient from "./page.client";

export default function page() {
  return (
    <div className="w-full flex-1 py-28 flex flex-col items-center bg-gray-200">
      <div className="flex flex-col gap-[1.6rem] items-center w-[100rem] bg-white px-[2rem] py-[3.2rem]">
        <p className="w-full animate-text-zoom text-red-800 message-text text-center flex justify-center gap-[0.1rem]">
          {messageMockup.message.split("").map((char, i) => {
            if (char === " ") {
              return <span key={i} className="w-[2.5rem]" />;
            }

            return (
              <span
                key={i}
                className="drop-char inline-block"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {char}
              </span>
            );
          })}
        </p>
        <ArticleSliderClient />
      </div>
    </div>
  );
}
