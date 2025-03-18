import Navbar from "@/components/Navbar";
import Image from "next/image";

import hero1 from "@/images/hero1.jpg"

export default function Home() {


  return (
    <>
      <Navbar />
      <div className="w-screen h-fit relative top-0 flex items-center justify-start flex-col z-0 bg-cream">
        {/*Home Page*/}
        <div className="h-[50vh] sm:h-screen sm:p-0 grid grid-rows-6 w-full gap-0 sm:gap-1 relative bg-black">
          <div className="row-span-4 m-4 sm:m-0 sm:row-span-5 flex h-full w-auto relative rounded-xl md:rounded-t-none md:rounded-b-3xl lg:rounded-b-[4rem] overflow-hidden">
            <Image src={hero1} layout="fill" alt="HeroImg" objectFit="cover" objectPosition="bottom" className="object-contain"/>
          </div>
          <div className="row-span-1 h-[7rem] translate-y-5 sm:translate-y-0 sm:h-full  relative w-full flex-col items-center flex justify-center"> 
            <div className="w-11/12 h-1 absolute top-0 shadow-lg m-2 sm:m-4 shadow-black/75 bg-warmGray"/>
            <div className="h-1/2 w-11/12 flex items-center justify-between">
              <div className="flex flex-row items-center justify-between w-full space-x-3">

                <div className="flex flex-col items-start -space-y-2 sm:-space-y-3">
                  <h1 className="text-4xl sm:text-6xl justify-start font-kryshna font-bold text-darkBlue tracking-wide">126+</h1>
                  <p className="text-[12px] sm:text-lg inline-flex font-montserrat">events planned</p>
                </div>

                <div className="flex flex-col items-center justify-center -space-y-2 sm:-space-y-3">
                  <h1 className="text-5xl sm:text-8xl font-sallim  text-darkBlue  leading-none translate-y-2 sm:translate-y-3">brahmma</h1>
                </div>

                <div className="flex flex-col items-center justify-center -space-y-2 sm:-space-y-3">
                  <h1 className="text-4xl sm:text-6xl font-kryshna font-bold text-darkBlue tracking-wide">10+</h1>
                  <p className="text-[12px] sm:text-lg inline-flex font-montserrat">events</p>
                </div>
                

              </div>
            </div>
            <div className="w-11/12 h-1 absolute bottom-0 shadow-lg m-2 sm:m-4 shadow-black/75 bg-warmGray"/>
            
          </div>
        </div>
        <div className="w-screen h-[50vh] sm:h-screen relative top-0 flex items-center justify-start flex-col z-0 bg-cream">
          <div className="w-full h-full grid grid-cols-3  relative">
            <div className="bg-red-500 col-span-2 flex sm:items-center  h-full w-full relative">
              <p className="font-kryshna text-2xl sm:text-4xl lg:text-8xl text-left text-darkBlue font-bold p-4 sm:p-8 tracking-wide leading-tighter">
              Bringing Your Special
              <br/>
              Moments to Life with
              <br/>
              Stunning Decor & Flawless
              <br/>
              Event Management
              </p>
            </div>
            <div className="bg-black col-span-1 flex h-full w-full relative">
              <Image src="" alt="" className=""/>
              <Image src="" alt="" className=""/>
              <Image src="" alt="" className=""/>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
