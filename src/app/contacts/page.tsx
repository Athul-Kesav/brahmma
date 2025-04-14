"use client";
import Image from "next/image";
import { ReactLenis } from "lenis/react";

import Navbar from "@/components/Navbar";
import hero2 from "@/images/hero2.jpg";

import bgArt from "@/images/bgArt.svg";

export default function Services() {
  return (
    <>
      <ReactLenis root options={{ lerp: 0.07 }}>
        <Navbar />
        <div className="w-screen h-fit relative top-0 flex items-center justify-start flex-col z-0 bg-cream overflow-hidden">
          {/*Services Page*/}

          <div className="w-full h-screen relative flex items-center justify-center flex-col z-0">
            <Image
              src={hero2}
              layout="fill"
              alt="HeroImg"
              objectFit="cover"
              objectPosition="bottom"
              className="object-contain"
            />
            <div className="overlay h-full w-full bg-gradient-to-br from-black/25 via-black/10 to-transparent inset-0 z-0"></div>
            <h1 className="absolute top-1/2 left-1/2 text-5xl lg:text-7xl font-meditative text-cream transform -translate-x-1/2 -translate-y-1/2">
              Get in touch
            </h1>
          </div>

          <div className="w-full h-fit flex">
            <Image
              src={bgArt}
              alt="traditional art bg"
              fill
              className="object-cover object-bottom mix-blend-hard-light saturate-0 opacity-[15%]"
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
              }}
            />
            <div className="w-3/5 h-full md:flex hidden flex-col items-start justify-end mx-auto">
              <span className="font-sallim md:text-6xl lg:text-7xl text-darkBlue mt-10 p-7 leading-[7rem]">
                Get things done <br />
                <span className="font-meditative md:text-[10rem] lg:text-[15rem] text-darkBlue leading-[7rem]">
                  bold
                </span>{" "}
                and{" "}
                <span className="font-meditative md:text-[10rem] lg:text-[15rem] text-darkBlue leading-[7rem]">
                  beautiful
                </span>
              </span>
            </div>
            <div className="md:w-2/5 w-full h-full flex flex-col items-center justify-center md:p-16 p-7 gap-2 z-10">
              <div className="w-full h-1/2  flex flex-col items-center justify-start gap-2 md:p-10 p-5 rounded-xl bg-gradient-to-br from-darkBlue/50 via-darkBlue/25 to-darkBlue/50 backdrop-blur-[5px] shadow-2xl">
                <span className="font-montserrat text-4xl md:text-3xl text-center lg:text-4xl text-darkBlue leading-[7rem]">
                  Reach us Here
                </span>
                <div className=" w-full h-full flex flex-col items-start justify-center gap-12">
                  <div className="flex flex-col items-start justify-center">
                    <span className="font-montserrat text-xl tracking-tight">
                      Email{" "}
                    </span>
                    <span className="font-jupiteroid text-xl md:text-2xl lg:text-4xl">
                      brahmmaevents@gmail.com
                    </span>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <span className="font-montserrat text-xl tracking-tight">
                      Phone{" "}
                    </span>
                    <span className="font-jupiteroid text-xl md:text-2xl lg:text-4xl">
                      +91 7373730935
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit bg-darkBlue relative">
            <div className="w-full z-10 h-[50vh] sm:h-[90vh] flex flex-col items-center justify-center bg-darkBlue p-10">
              
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23324.99885578058!2d79.8290828211083!3d10.912939645602426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5511360f384943%3A0xa8ece3a856deaa62!2sBrahmma%20Decorators!5e1!3m2!1sen!2sin!4v1744390995122!5m2!1sen!2sin"
                  width="full"
                  height="full"
                  style={{ border: "0" }}
                  allowFullScreen={true}
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-3xl shadow-lg"
                />
              
            </div>

            {/*Footer*/}
            <div className="h-[10vh] w-full flex flex-col items-center justify-center relative bg-cream rounded-t-[1rem] md:rounded-t-[3rem] z-10">
              <h1 className="font-meditative text-darkBlue text-xl sm:text-3xl">
                Brahmma
              </h1>
              <p className="text-darkBlue text-xs font-montserrat">
                Decorations and Event Management
              </p>
            </div>
          </div>
        </div>
      </ReactLenis>
    </>
  );
}
