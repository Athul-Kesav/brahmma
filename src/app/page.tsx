import Navbar from "@/components/Navbar";
import Image from "next/image";

import hero1 from "@/images/hero1.jpg"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-screen h-fit relative top-0 flex items-center justify-start flex-col z-0">
        <div className="h-screen p-7 sm:p-0 grid grid-rows-6 w-full bg-black">
          <div className="row-span-3 my-8 sm:m-0 sm:row-span-5 flex h-full w-full relative rounded-xl md:rounded-b-3xl lg:rounded-b-[4rem] overflow-hidden">
            <Image src={hero1} layout="fill" alt="HeroImg" objectFit="cover" objectPosition="bottom" />
          </div>
        </div>
        
      </div>
    </>
  );
}
