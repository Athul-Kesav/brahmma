"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import hero1 from "@/images/hero1.jpg";

const YearlyGallery = ({ year }: { year: number }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/gallery/2023");
  };
  return (
    <div className=" relative flex w-full md:w-2/3 origin-bottom overflow-hidden min-h-[10rem] max-h-[20rem]  p-5 items-center justify-center rounded-xl lg:rounded-3xl md:hover:rounded-none cursor-pointer md:hover:w-full md:hover:p-32 md:hover:rounded-none  md:shadow-lg md:hover:shadow-2xl transition-all duration-700 ease-in-out active:scale-[95%] active:duration-200">
      {/*Overlay*/}
      <div className="absolute inset-0 bg-gradient-to-r from-blk to-transparent rounded-xl lg:rounded-3xl md:hover:rounded-none transition-all duration-500 ease-in-out z-10" />
      {/*Image*/}
      <Image
        src={hero1}
        alt="Gallery"
        fill
        className="w-full h-full object-cover object-center rounded-xl lg:rounded-3xl md:hover:rounded-none transition-all duration-500 ease-in-out"
      />
      <span className="leading-none -bottom-5 z-20 md:-bottom-6 -left-5 absolute font-montserrat  font-black text-[7rem] sm:text-[8rem] lg:text-[10rem]  text-cream">
        {year}
      </span>
    </div>
  );
};

export default YearlyGallery;
