"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";

import img1 from "@/images/birthdayParty.png";

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="w-screen h-fit lg:h-screen relative top-0 flex items-center justify-start flex-col z-0 bg-cream">
        {/*Services Page*/}

        <div className="h-full w-full p-5 flex flex-col lg:pt-32 md:pt-16 sm:pt-16 pt-8 justify-center gap-2">
          <h1 className="lg:text-5xl md:text-4xl sm:text-4xl text-2xl font-meditative">
            All Services
          </h1>

          {/*Grid*/}
          <div className="lg:flex hidden gap-2 w-full h-[100vh] md:h-full bg-red-500">
            <div className="w-2/5 grid-rows-2 bg-white h-full grid gap-2">
              <div className="row-span-1 flex flex-row bg-gray-500 h-full w-full gap-2">
                <div className="h-full w-1/3 bg-green-200"></div>
                <div className="h-full w-2/3 bg-green-200"></div>
              </div>

              <div className="row-span-1 flex flex-row bg-gray-500 h-full w-full gap-2">
                <div className="h-full w-2/3 bg-green-200"></div>
                <div className="h-full w-1/3 bg-green-200"></div>
              </div>
            </div>

            <div className="w-1/5 bg-yellow-50 h-full flex flex-col items-center justify-center gap-2"></div>

            <div className="w-2/5 bg-blue-50 h-full flex flex-col items-center justify-center gap-2">
              <div className="h-1/3 w-full bg-gray-500 flex flex-row"></div>

              <div className="h-2/3 w-full bg-pink-200 flex flex-row gap-2">
                <div className="h-full w-1/2 bg-green-200"></div>
                <div className="h-full w-1/2 bg-green-200 gap-2 flex flex-col">
                  <div className="h-3/5 w-full bg-green-500"></div>
                  <div className="h-2/5 w-full bg-green-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/*Mobile*/}
          <div className="lg:hidden h-fit flex flex-col gap-2 w-full bg-red-500">
            <div className="w-full h-1/2 bg-white flex flex-col">
              <Image
                src={img1}
                alt="1"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
