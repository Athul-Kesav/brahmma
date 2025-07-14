"use client";
import { ReactLenis } from "lenis/react";
import Navbar from "@/components/Navbar";
import YearlyGallery from "@/components/YearlyGallery";
import Footer from "@/components/Footer";
import EventGallery from "@/components/EventGallery";
import { StaticImageData } from 'next/image';
import pic1 from "@/images/hero1.jpg";
import pic2 from "@/images/hero2.jpg";

export default function Gallery() {

  const imgArray: StaticImageData[] = [
    pic1,
    pic2,
    pic1,
    pic2,
    pic1,
    pic2,
    pic1,
    pic2,
    pic1,
    pic2,

  ]
  return (
    <>
      <ReactLenis root options={{ lerp: 0.1 }}>
        <Navbar />
        <div className="w-screen min-h-screen relative m-0 sm:mt-32 flex items-center justify-center flex-col z-0 bg-cream">
          <EventGallery event="Weddings" imgArray={imgArray} />
          <EventGallery event="Birthday" imgArray={imgArray} />
          <EventGallery event="Engagement" imgArray={imgArray} />
          <EventGallery event="Weddings" imgArray={imgArray} />
        </div>
          <Footer />
      </ReactLenis>
    </>
  );
}
