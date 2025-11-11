"use client";

import React from "react";
import { cn } from "@utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

const getButtonClassName = (disabled: boolean, className?: string) => {
  return cn(
    "text-white ko-text-body2 rounded-[0.8rem]  px-[2rem] py-[0.8rem]",
    disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue cursor-pointer",
    className
  );
};

export const Button = ({
  children,
  className,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={getButtonClassName(disabled, className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
