"use client";

import React, { useRef, useState, RefObject } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";
import pic6 from "../images/pic6.jpg";
import { StaticImageData } from "next/image";

export const DragCards = () => {
  return (
    <div className="relative grid h-full w-full place-content-center overflow-hidden">
      <h2 className="relative z-0 text-[15vw] font-meditative text-cream/20 lg:text-[150px]">
       Brahmma<span className="text-cream">.</span>
      </h2>
      <Cards />
    </div>
  );
};

const Cards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src= {pic1}
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src= {pic2}
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src= {pic3}
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src= {pic4}
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src={pic5}
        alt="Example image"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src={pic6}
        alt="Example image"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-24 md:w-48"
      />
    </div>
  );
};

interface CardProps {
    containerRef: RefObject<HTMLElement | null>; // Allow null
    src: StaticImageData;
    alt: string;
    top: string;
    left: string;
    rotate: string;
    className?: string;
  }

const Card = ({ containerRef, src, alt, top, left, rotate, className }:CardProps) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      const zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-32 lg:w-72 bg-warmGray p-1 cursor-grab active:cursor-grabbing rounded-md lg:rounded-lg  shadow-lg shadow-darkBlue/50",
        className
      )}
      src={src.src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //dragMomentum={false}
      dragElastic={0.65}
    />
  );
};
