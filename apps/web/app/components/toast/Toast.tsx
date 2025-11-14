"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface ToastProps {
  messageId: number;
  sender: string;
}

export default function Toast({ messageId, sender }: ToastProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/message/${messageId}`);
  };
  return (
    <div className="fixed right-[5rem] bottom-[30%] z-[999] ">
      <div
        className="animate-toast-glow flex flex-col items-start justify-center gap-[0.8rem] cursor-pointer hover:bg-red transition-all duration-300 bg-red-800 rounded-[2rem] px-[2rem] py-[1.8rem] rounded-br-none"
        onClick={handleClick}
      >
        <span className="text-head3 text-white">
          {sender}님이 메시지를 보냈어요!
        </span>
        <span className="text-body2 text-white hover:underline">
          확인하러 가기 →
        </span>
      </div>
    </div>
  );
}
