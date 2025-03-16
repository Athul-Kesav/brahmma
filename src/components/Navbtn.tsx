"use client";

import React from "react";

type NavBtnProps = {
  text: string;
  cta: () => void;
};

export default function Navbtn({ text, cta }: NavBtnProps) {
  return (
    <div>
      <div
        className="text-cream group cursor-pointer inline-flex font-montserrat text-lg lg:text-xl hover:brightness-150 active:brightness-90 transition-all duration-200"
        onClick={cta}
      >
        <span className="pointer-events-none select-none">
        {text}
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-down stroke-transparent md:group-hover:stroke-warmGray transition-all duration-500 md:group-hover:-rotate-90"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </span>
      </div>
    </div>
  );
}
