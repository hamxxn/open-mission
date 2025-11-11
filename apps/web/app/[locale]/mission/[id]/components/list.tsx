import React from "react";

interface ListProps {
  item: string;
}

export default function List({ item }: ListProps) {
  return <li className="text-gray-900 ko-text-body1 mt-[0.5rem]">{item}</li>;
}
