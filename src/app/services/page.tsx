"use client";
import Image, { StaticImageData } from "next/image";
import { ReactLenis } from "lenis/react";
import Navbar from "@/components/Navbar";

import bP from "@/images/birthdayParty.png";
import bS from "@/images/babyShower.png";
import cF from "@/images/collegeFest.png";
import cE from "@/images/corporateEvent.png";
import eG from "@/images/engagement.png";
import party from "@/images/party.png";
import reception from "@/images/reception.png";
import wedding from "@/images/wedding.png";
import sO from "@/images/shopOpening.png";

import GridCard from "@/components/GridCard";
import Footer from "@/components/Footer";

export default function Services() {
  const imgs: StaticImageData[] = [];
  imgs.push(bP, bS, cF, cE, eG, party, reception, wedding, sO);

  const serviceNames: string[] = [
    "Birthday Party",
    "Baby Shower",
    "College Fest",
    "Corporate Event",
    "Engagement",
    "Party",
    "Reception",
    "Wedding",
    "Shop Opening",
  ];

  const serviceRoutes = {
    0: "/services/birthdayParty",
    1: "/services/babyShower",
    2: "/services/collegeFest",
    3: "/services/corporateEvent",
    4: "/services/engagement",
    5: "/services/party",
    6: "/services/reception",
    7: "/services/wedding",
    8: "/services/shopOpening",
  };

  return (
    <>
      <ReactLenis root options={{ lerp: 0.07 }}>
        <Navbar />
        <div className="w-screen h-fit lg:h-screen relative top-0 flex items-center justify-start flex-col z-0 bg-cream">
          {/*Services Page*/}

          <div className="h-full w-full p-5 flex flex-col lg:pt-32 md:pt-16 sm:pt-16 pt-8 justify-center gap-2">
            <h1 className="lg:text-5xl md:text-4xl sm:text-4xl text-3xl font-meditative">
              All Services
            </h1>

            {/*Grid*/}
            <div className="lg:flex hidden gap-2 w-full h-[100vh]">
              <div className="w-2/5 grid-rows-2 h-full grid gap-2">
                <div className="row-span-1 flex flex-row h-full w-full gap-2">
                  <div className="h-full w-1/3 relative rounded-xl overflow-hidden ">
                    <GridCard
                      serviceNames={serviceNames}
                      imgs={imgs}
                      item={0}
                    />
                  </div>

                  <div className="h-full w-2/3 relative rounded-xl overflow-hidden ">
                    <GridCard
                      serviceNames={serviceNames}
                      imgs={imgs}
                      item={6}
                    />
                  </div>
                </div>

                <div className="row-span-1 flex flex-row h-full w-full gap-2">
                  <div className="h-full w-2/3 relative rounded-xl overflow-hidden ">
                    <GridCard
                      serviceNames={serviceNames}
                      imgs={imgs}
                      item={7}
                    />
                  </div>

                  <div className="h-full w-1/3 relative rounded-xl overflow-hidden ">
                    <GridCard
                      serviceNames={serviceNames}
                      imgs={imgs}
                      item={5}
                    />
                  </div>
                </div>
              </div>

              <div className="w-1/5 relative h-full flex flex-col items-center justify-center gap-2">
                <GridCard serviceNames={serviceNames} imgs={imgs} item={2} />
              </div>

              <div className="w-2/5 h-full flex flex-col items-center justify-center gap-2">
                <div className="h-1/3 w-full flex flex-row">
                  <GridCard serviceNames={serviceNames} imgs={imgs} item={3} />
                </div>

                <div className="h-2/3 w-full flex flex-row gap-2">
                  <div className="h-full w-1/2 ">
                    <GridCard
                      serviceNames={serviceNames}
                      imgs={imgs}
                      item={4}
                    />
                  </div>
                  <div className="h-full w-1/2  gap-2 flex flex-col">
                    <div className="h-3/5 w-full ">
                      <GridCard
                        serviceNames={serviceNames}
                        imgs={imgs}
                        item={1}
                      />
                    </div>
                    <div className="h-2/5 w-full">
                      <GridCard
                        serviceNames={serviceNames}
                        imgs={imgs}
                        item={8}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Mobile*/}
            <div className="lg:hidden h-full flex flex-wrap items-center justify-center gap-2 w-full ">
              {imgs.map((img, index) => {
                return (
                  <div
                    key={index}
                    className="w-full bg-white flex flex-row flex-wrap min-h-[20vh] md:min-h-[40vh] sm:max-w-[45vw] h-full gap-2 relative rounded-xl overflow-hidden active:scale-95 transition-all duration-200 ease-in-out border-none"
                    onClick={() => {
                      window.location.href =
                        serviceRoutes[index as keyof typeof serviceRoutes];
                    }}
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-darkBlue/95 via-darkBlue/50 to-darkBlue/95 z-10" />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
                      <h1 className="font-sallim text-white/80 mix-blend-difference text-4xl p-5 z-20">
                        {serviceNames[index]}
                      </h1>
                    </div>
                    <Image
                      src={img}
                      alt="Event"
                      className="object-cover w-full h-full"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer (For Mobile Only*/}
          <div className="lg:hidden flex">
            <Footer />
          </div>
        </div>
      </ReactLenis>
    </>
  );
}
