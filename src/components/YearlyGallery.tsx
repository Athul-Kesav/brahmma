"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import hero1 from "@/images/hero1.jpg";


const YearlyGallery = ({ year }: { year: number }) => {

    const router = useRouter();
    const handleClick = () => {
        router.push("/gallery/2023");
    }
  return (
    <div className="relative flex w-full transform origin-bottom md:hover:w-full overflow-hidden  min-h-[10rem] max-h-[20rem] md:hover:p-32 p-5 items-center justify-center md:hover:rounded-none rounded-xl lg:rounded-3xl shadow-lg md:hover:shadow-2xl cursor-pointer active:scale-[85%] sm:active:scale-[90%] transition-all duration-200 md:duration-700 ease-in-out">
      {/*Overlay*/}
      <div className="absolute inset-0 bg-gradient-to-r from-blk via-transparent to-blk rounded-xl lg:rounded-3xl md:hover:rounded-none transition-all duration-500 ease-in-out z-10"/>
      {/*Image*/}
      <Image
        src={hero1}
        alt="Gallery"
        fill
        className="w-full h-full object-cover object-center rounded-xl lg:rounded-3xl md:hover:rounded-none transition-all duration-500 ease-in-out"
      />
      <span className="leading-none -bottom-2 left-1/2 -translate-x-1/2 absolute font-meditative font-black text-[7rem] sm:text-[8rem] lg:text-[10rem]  text-darkBlue">
        {year}
      </span>
    </div>
  );
};

export default YearlyGallery;
