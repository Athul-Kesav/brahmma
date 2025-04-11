import Image, { StaticImageData } from "next/image";
import React from "react";

type cardProps = {
  imgs: StaticImageData[];
  imgNames: string[];
  item: number;
};

const GridCard = ({ imgs, imgNames, item }: cardProps) => {
  const titleWords = imgNames[item].split(" ");

  return (
    <div className="h-full w-full relative rounded-xl overflow-hidden group cursor-pointer active:scale-[98%] transition-all duration-200 ease-in-out">
      {/* Overlay with gradient, fade, and blur */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-darkBlue/30 to-darkBlue z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm  group-hover:blur-0 group-hover:scale-100 ease-in-out" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-darkBlue/50 to-transparent z-10" />
      {/* Centered text with fade + scale + blur */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center flex-col justify-center z-20 opacity-0 scale-95 blur-sm group-hover:opacity-100 group-hover:scale-100 group-hover:blur-0 transition-all duration-500 ease-in-out pointer-events-none">
        <h1 className="font-meditative text-center text-white text-3xl tracking-wider leading-none p-2 z-20 w-full">
          {titleWords.map((word, idx) => (
            <React.Fragment key={idx}>
              {word}
              {idx !== titleWords.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>
      </div>

      {/* Background Image */}
      <Image
        src={imgs[item]}
        alt={imgNames[item]}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />

      <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 z-20">
        <span className="w-full h-full flex items-center justify-center  bg-cream rounded-full scale-0 p-2 group-hover:scale-150 group-hover:rotate-0 transition-all duration-500 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="54"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right stroke-darkBlue sm:rotate-45 sm:group-hover:-rotate-45  sm:transition-all sm:duration-500 "
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default GridCard;
