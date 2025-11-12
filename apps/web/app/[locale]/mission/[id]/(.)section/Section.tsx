import React from "react";

import { ListHeader } from "@/[locale]/mission/[id]/components/index";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <div className="w-full mt-[2.4rem] flex flex-col gap-[1em]">
      <ListHeader title={title} />
      <ul className="list-disc list-inside pl-8">{children}</ul>
    </div>
  );
}
