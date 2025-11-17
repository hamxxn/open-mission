import React from "react";
import Link from "next/link";

interface ArticleProps {
  title: string;
  category: string[];
  link: string;
  backgroundImageWebp: string;
  backgroundImage: string;
}

export default function Article({
  title,
  category,
  link,
  backgroundImageWebp,
  backgroundImage,
}: ArticleProps) {
  const bg = backgroundImageWebp || backgroundImage;

  return (
    <Link
      href={link}
      className="block group rounded-[1rem] overflow-hidden border border-gray-300"
    >
      <div
        className="relative h-[32rem] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div
          className="
          absolute inset-x-0 bottom-0
          bg-white
          transition-all duration-500
          px-[2rem] py-[1.5rem]
          flex flex-col justify-center gap-[0.5rem]
        "
        >
          <h3 className="text-gray-900 ko-text-head3">{title}</h3>
          <div className="flex gap-[0.5rem] max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
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
