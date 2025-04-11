"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbtn from "./Navbtn";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const gallery = ["2020", "2021", "2022", "2023", "2024", "2025"];
  const [showSubNavGallery, setShowSubNavGallery] = useState(false);

  return (
    <div className="h-16 lg:h-36 text-cream w-full inline-flex flex-col items-center justify-between p-0 lg:p-4 sticky sm:fixed top-0 z-50">
      <div className="m-0 lg:m-5 lg:max-h-[5rem] flex lg:bg-darkBlue/50 bg-darkBlue justify-between items-center w-full h-full relative px-8 lg:rounded-xl lg:backdrop-blur-[20px]">
        <div
          className="font-meditative text-4xl lg:text-5xl hover:brightness-150 transition-all duration-200 cursor-pointer active:brightness-90"
          onClick={() => router.push("/")}
          onMouseEnter={() => setShowSubNavGallery(false)}
        >
          Brahmma
        </div>
        <div className="inline-flex lg:space-x-12 space-x-5 items-center">
          <div className="lg:space-x-12 space-x-5 hidden md:inline-flex items-center">
            <div className="relative"
            onMouseEnter={() => setShowSubNavGallery(false)}>
              <Navbtn text="Services" cta={() => router.push("/services")} />
            </div>
            <div
              className="relative"
              onMouseEnter={() => setShowSubNavGallery(true)}
            >
              <Navbtn text="Gallery" cta={() => router.push("/gallery")} />
            </div>
            <div className="relative"
            onMouseEnter={() => setShowSubNavGallery(false)}>
              <Navbtn text="Contact" cta={() => router.push("/contacts")} />
            </div>
          </div>
          <div className="inline-flex lg:space-x-12 space-x-5 items-center"
          onMouseEnter={() => setShowSubNavGallery(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 25 25"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart active:brightness-90 hover:scale-[103%] active:scale-95 object-center cursor-pointer hover:brightness-150 transition-all duration-100"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hamburger active:brightness-90 md:hidden flex items-center cursor-pointer hover:brightness-150 transition-all duration-200"
            >
              <path
                d="M1 1H33"
                stroke="#D3C3B9"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <path
                d="M1 8H12.8517L22.5 15.5H33"
                stroke="#D3C3B9"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <path
                d="M1 22.5H33"
                stroke="#D3C3B9"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Gallery Subnav */}
      <AnimatePresence>
        {showSubNavGallery && (
          <motion.div
            className="w-full absolute top-16 lg:top-[6.7rem] font-montserrat lowercase text-xl justify-center items-center flex flex-wrap bg-darkBlue/50 border-t border-b border-cream backdrop-blur-xl h-fit lg:max-h-fit"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            onMouseLeave={() => {
              setTimeout(() => {
                setShowSubNavGallery(false);
              }, 500);
            }}
            onMouseEnter={() => setShowSubNavGallery(true)}
          >
            {gallery.map((year, index) => (
              <div
                key={index}
                className="px-4 py-2 cursor-pointer transition-all duration-200 rounded-lg flex border-transparent text-cream active:scale-95 hover:border-cream m-3 border-b-4 border-l border-r border-t"
              >
                {year.toLowerCase()}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
