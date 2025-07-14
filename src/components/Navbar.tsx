"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbtn from "./Navbtn";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  // Add scroll lock effect
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  function toggleMenu() {
    console.log("toggleMenu called");
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="h-16 lg:h-36 text-cream w-screen lg:w-full inline-flex flex-col items-center justify-between p-0 lg:p-4 sticky sm:fixed top-0 z-50">
      <div className="m-0 lg:m-5 lg:max-h-[5rem] flex lg:bg-darkBlue/50 bg-darkBlue justify-between items-center w-full h-full relative px-8 lg:rounded-xl lg:backdrop-blur-[20px]">
        <div
          className="font-meditative text-4xl lg:text-5xl hover:brightness-150 transition-all duration-200 cursor-pointer active:brightness-90"
          onClick={() => router.push("/")}
        >
          Brahmma
        </div>
        <div className="inline-flex lg:space-x-12 space-x-5 items-center">
          <div className="lg:space-x-12 space-x-5 hidden md:inline-flex items-center">
            <div className="relative">
              <Navbtn text="Services" cta={() => router.push("/services")} />
            </div>
            <div className="relative">
              <Navbtn text="Gallery" cta={() => router.push("/gallery")} />
            </div>
            <div className="relative">
              <Navbtn text="Contact" cta={() => router.push("/contacts")} />
            </div>
          </div>
          <div className="inline-flex lg:space-x-12 space-x-5 items-center">
            {/*Shopping cart */}
            {/* 
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
            </svg> */}
            {/*Hamburger*/}
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hamburger active:brightness-90 md:hidden flex items-center cursor-pointer hover:brightness-150 transition-all duration-200"
              onClick={toggleMenu}
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

      {/*Mobile Menu*/}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            className="absolute top-0 left-0 w-screen h-screen bg-darkBlue/50 backdrop-blur-[50px] z-50 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute top-5 right-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x cursor-pointer hover:brightness-150 active:brightness-90 transition-all duration-200"
                onClick={toggleMenu}
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </div>
            <div className="flex flex-col items-start justify-center gap-5 pointer-events-auto">
              <Navbtn
                text="Home"
                cta={() => {
                  router.push("/");
                  toggleMenu();
                }}
              />
              <Navbtn
                text="Services"
                cta={() => {
                  router.push("/services");
                  toggleMenu();
                }}
              />
              <Navbtn
                text="Gallery"
                cta={() => {
                  router.push("/gallery");
                  toggleMenu();
                }}
              />
              <Navbtn
                text="Contact"
                cta={() => {
                  router.push("/contacts");
                  toggleMenu();
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
