import React from "react";
import Link from "next/link";
import { cn } from "@utils/cn";

interface ArticleProps {
  title: string;
  category: string[];
  link: string;
  backgroundImageWebp: string;
  backgroundImage: string;
  isCenter?: boolean;
}

export default function Article({
  title,
  category,
  link,
  backgroundImageWebp,
  backgroundImage,
  isCenter = false,
}: ArticleProps) {
  const bg = backgroundImageWebp || backgroundImage;
  const duration = 800;

  return (
    <Link
      href={isCenter ? link : "#"}
      className={cn(
        "block group rounded-[1rem] overflow-hidden border border-gray-300 h-full w-full",
        !isCenter && "cursor-not-allowed"
      )}
    >
      <div
        className={cn(
          `relative h-full w-full bg-cover bg-center transition-transform duration-${duration}`,
          isCenter && "group-hover:scale-[1.03]"
        )}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div
          className={`absolute inset-x-0 bottom-0 bg-white transition-all duration-${duration} px-[2rem] py-[1.5rem] flex flex-col justify-center gap-[0.5rem]`}
        >
          <h3 className="text-gray-900 ko-text-head3">{title}</h3>
          <div
            className={cn(
              `flex gap-[0.5rem] max-h-0 overflow-hidden transition-all duration-${duration}`,
              isCenter && "group-hover:max-h-20"
            )}
          >
            {category.map((item) => (
              <p
                key={item}
                className="text-blue ko-text-body2 border border-blue rounded-[2rem] px-[1rem] py-[0.4rem]"
              >
                # {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
