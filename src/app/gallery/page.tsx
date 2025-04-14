"use client";
import { ReactLenis } from "lenis/react";
import Navbar from "@/components/Navbar";
import YearlyGallery from "@/components/YearlyGallery";
import Footer from "@/components/Footer";

export default function Gallery() {
  return (
    <>
      <ReactLenis root options={{ lerp: 0.07 }}>
        <Navbar />
        <div className="w-screen h-fit relative top-0 flex items-center justify-center flex-col z-0 bg-grayBlue">
          {/*Services Page*/}
          <div className="w-screen sm:mt-16 bg-pink-400 lg:mt-32 p-1 md:p-5 flex flex-col items-center justify-center md:gap-7 gap-5">
            <YearlyGallery year={2025} />
            <YearlyGallery year={2024} />
            <YearlyGallery year={2023} />
            <YearlyGallery year={2022} />
            <YearlyGallery year={2021} />
            <YearlyGallery year={2019} />
            <YearlyGallery year={2019} />
            <YearlyGallery year={2019} />
            <YearlyGallery year={2019} />
          </div>
          <Footer />
        </div>
      </ReactLenis>
    </>
  );
}
