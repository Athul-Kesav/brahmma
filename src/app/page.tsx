"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";

import { ReactLenis } from "lenis/react";
import React from "react";

import hero1 from "@/images/hero1.jpg";
import bgArt from "@/images/bgArt.svg";
import { DragCards } from "@/components/DragCard";
import ReviewBar from "@/components/ReviewBar";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

export default function Home() {
  const router = useRouter();

  function goToServices(): void {
    router.push("/services");
  }

  return (
    <>
      <ReactLenis root
      options={{ lerp:0.07 }}>
        <Navbar />
        <div className="w-screen overflow-hidden h-fit relative flex items-center justify-start flex-col z-0 bg-cream scrollbar-hide">
          {/*Home Page*/}

          <div className="h-[50vh] sm:h-screen sm:p-0 grid grid-rows-6 w-full gap-0 sm:gap-1 relative ">
            <Image
              src={bgArt}
              alt="traditional art bg"
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
              className="object-contain mix-blend-hard-light saturate-0 opacity-[15%]"
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
              }}
            />
            <div className="row-span-4 m-4 sm:m-0 sm:row-span-5 flex h-full w-auto relative rounded-xl md:rounded-t-none md:rounded-b-3xl lg:rounded-b-[4rem] overflow-hidden">
              <Image
                src={hero1}
                layout="fill"
                alt="HeroImg"
                objectFit="cover"
                objectPosition="bottom"
                className="object-contain"
              />
            </div>
            <div className="row-span-1 h-[7rem] translate-y-5 sm:translate-y-0 sm:h-full  relative w-full flex-col items-center flex justify-center">
              <div className="w-11/12 h-1 absolute top-0 shadow-lg m-2 sm:m-4 shadow-blk/75 bg-warmGray rounded-full" />
              <div className="h-1/2 w-11/12 flex items-center justify-between">
                <div className="flex flex-row items-center justify-between w-full space-x-3">
                  <div className="flex flex-col items-start -space-y-2 sm:-space-y-3">
                    <h1 className="text-4xl sm:text-6xl justify-start font-kryshna font-bold text-darkBlue tracking-wide">
                      126+
                    </h1>
                    <p className="text-[12px] sm:text-lg inline-flex font-montserrat">
                      events planned
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-center -space-y-2 sm:-space-y-3">
                    <h1 className="text-5xl sm:text-8xl font-sallim  text-darkBlue  leading-none translate-y-2 sm:translate-y-3">
                      brahmma
                    </h1>
                  </div>

                  <div className="flex flex-col items-center justify-center -space-y-2 sm:-space-y-3">
                    <h1 className="text-4xl sm:text-6xl font-kryshna font-bold text-darkBlue tracking-wide">
                      10+
                    </h1>
                    <p className="text-[12px] sm:text-lg inline-flex font-montserrat">
                      events
                    </p>
                  </div>

                </div>
              </div>
              <div className="w-11/12 h-1 absolute bottom-0 shadow-lg mb-2 sm:m-4 shadow-blk/75 bg-warmGray rounded-full" />
            </div>
          </div>

          <div className="w-screen h-[30vh] md:h-screen relative flex items-center justify-center flex-col z-0 bg-cream scrollbar-hide">
            <Image
              src={bgArt}
              alt="traditional art bg"
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
              className="object-contain mix-blend-hard-light saturate-0 opacity-[15%]"
              style={{
                maskImage:
                  " linear-gradient(to bottom right, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0),rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
                WebkitMaskImage:
                  " linear-gradient(to bottom right, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0),rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
              }}
            />

            <div className="w-full h-full grid grid-cols-3 relative">
              <div className=" col-span-3 md:col-span-2 flex sm:items-center h-full w-full relative flex-col justify-center">
                <p
                  className="font-kryshna text-left text-darkBlue font-bold p-4 sm:p-8 tracking-wide leading-tighter"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 10rem)" }}
                >
                  Bringing Your Special
                  <br />
                  Moments to Life with
                  <br />
                  Stunning Decor & Flawless
                  <br />
                  Event Management
                </p>
              </div>
              <div className="hidden md:col-span-1 md:flex flex-col items-center justify-center h-full w-full relative gap-5">
                <div className="w-[40vw] h-[30vw] md:absolute md:-right-20 md:-rotate-12 md:top-0  shadow-lg sm:shadow-xl md:shadow-2xl relative shadow-darkBlue/50 sm:shadow-darkBlue/50 md:shadow-darkBlue/75 lg:shadow-darkBlue  rounded-md sm:rounded-lg md:rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src={hero1}
                    layout="fill"
                    alt="HeroImg"
                    objectFit="cover"
                    objectPosition="bottom"
                    className="object-contain "
                  />
                </div>

                <div className="w-[40vw] h-[30vw] md:absolute md:-right-32 md:rotate-[10deg] md:top-1/4 md:transform md:origin-bottom-right shadow-lg sm:shadow-xl md:shadow-2xl relative shadow-darkBlue/50 sm:shadow-darkBlue/50 md:shadow-darkBlue/75 lg:shadow-darkBlue rounded-md sm:rounded-lg md:rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src={hero1}
                    layout="fill"
                    alt="HeroImg"
                    objectFit="cover"
                    objectPosition="bottom"
                    className="object-contain "
                  />
                </div>

                <div className="w-[40vw] h-[30vw] hidden sm:block md:absolute md:left-64 md:-rotate-[30deg] md:top-[55%] md:transform md:origin-bottom-left shadow-lg sm:shadow-xl md:shadow-2xl relative shadow-darkBlue/50 sm:shadow-darkBlue/50 md:shadow-darkBlue/75 lg:shadow-darkBlue rounded-md sm:rounded-lg md:rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src={hero1}
                    layout="fill"
                    alt="HeroImg"
                    objectFit="cover"
                    objectPosition="bottom"
                    className="object-contain "
                  />
                </div>
              </div>
            </div>
            <div className="w-11/12 h-1 absolute -bottom-3 -z-10 shadow-lg m-2 sm:m-4 shadow-blk/75 bg-warmGray rounded-full" />
          </div>

          <div className="h-[70vh] w-full flex items-center justify-center relative">
            
            <div className="h-5/6 w-11/12 bg-darkBlue rounded-3xl grid grid-cols-3 overflow-hidden">
              <div className="lg:col-span-1 lg:flex hidden flex-col items-center justify-center ">
                <p className="h-fit w-fit text-cream font-meditative text-8xl leading-[5rem]">
                  explore
                  <br />
                  our
                  <br />
                  services
                </p>
              </div>

              <div className="col-span-3 lg:col-span-2 flex flex-col items-center lg:items-end justify-center ">
                <div className="h-full w-full flex flex-col items-center justify-center">
                  <DragCards />
                </div>

                <div className="h-fit w-fit inline-block items-center justify-center cursor-pointer ">
                  <div
                    className="group m-4 p-2 rounded-xl flex bg-cream items-center justify-center sm:bg-darkBlue sm:hover:shadow-[0_0_100px_0px_theme(colors.cream/10)] transition-all active:scale-[98%] sm:hover:scale-[101%] z-20 duration-300 select-none"
                    onClick={() => goToServices()}
                  >
                    <span className="font-montserrat text-4xl sm:text-5xl  tracking-tighter text-darkBlue sm:text-cream focus:outline-none">
                      explore
                    </span>
                    <span className="w-full h-full flex items-center justify-center ">
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
                        className="lucide lucide-arrow-right stroke-darkBlue sm:stroke-cream sm:rotate-90 sm:group-hover:-rotate-45  sm:transition-all sm:duration-500  sm:opacity-0 sm:group-hover:opacity-100 sm:scale-100 scale-75"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>

                  </div>
                </div>
                
              </div>
            </div>
            <div className="w-11/12 h-1 absolute bottom-0 -z-10 shadow-lg m-2 sm:m-4 shadow-black/75 bg-warmGray rounded-full" />
          </div>

          <div className="h-full w-[100vw] flex px-6 py-7 ">
            <ReviewBar />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </ReactLenis>
    </>
  );
}
