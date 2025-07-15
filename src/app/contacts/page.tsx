"use client";
import Image from "next/image";
import { ReactLenis } from "lenis/react";
import emailjs from "@emailjs/browser";

import Navbar from "@/components/Navbar";
import hero2 from "@/images/hero2.jpg";

import bgArt from "@/images/bgArt.svg";
import { useEffect, useState } from "react";
import FloatingLabelInput from "@/components/InputBox";
import SubmitBtn from "@/components/SubmitBtn";

export default function Services() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState("");
  const [phone, setPhone] = useState("");
  const [statusMessage, setStatusMessageState] = useState<{
    text: string;
    isError: boolean;
  }>({ text: "null", isError: false });

  const setStatusMessage = (text: string, isError = false) => {
    setStatusMessageState({ text, isError });
  };

  const details = {
    name,
    email,
    eventType,
    phone,
  };

  const resetFuncs = () => {
    setName("");
    setEmail("");
    setEventType("");
    setPhone("");
    setTimeout(() => {
      setStatusMessage("null");
    }, 1250);
  };

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
            <h1 className="absolute leading-none top-1/2 left-1/2 text-5xl lg:text-7xl font-meditative text-cream transform -translate-x-1/2 -translate-y-1/2">
              Get in touch
            </h1>
          </div>

          <div className="w-full h-full flex flex-col">
            <Image
              src={bgArt}
              alt="traditional art bg"
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
              className="object-contain mix-blend-hard-light saturate-0 opacity-[10%]"
              style={{
                maskImage:
                  " linear-gradient(to bottom right, rgba(0, 0, 0,0.8),rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0)",
                WebkitMaskImage:
                  " linear-gradient(to bottom right, rgba(0, 0, 0,0.8),rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0)",
              }}
            />

            <div className="w-full h-full sm:flex hidden flex-col items-start justify-end mx-auto">
              <span className="font-sallim text-4xl md:text-6xl lg:text-7xl text-darkBlue mt-10 p-7 leading-[7rem]">
                Get things done <br />
                <span className="font-meditative sm:text-[7rem] md:text-[10rem] lg:text-[15rem] text-darkBlue sm:leading-[1rem] md:leading-[7rem]">
                  bold
                </span>{" "}
                and{" "}
                <span className="font-meditative sm:text-[7rem] md:text-[10rem] lg:text-[15rem] text-darkBlue sm:leading-[1rem] md:leading-[7rem]">
                  beautiful
                </span>
              </span>
            </div>

            {/*Contact Form*/}
            <div className="w-full h-full flex  flex-col space-y-7 sm:flex-row items-center justify-center p-10">
              <div className="flex flex-col items-center justify-center w-full h-full p-10  relative z-20 ">
                <h1 className="font-meditative text-darkBlue text-4xl sm:text-6xl lg:text-7xl mb-5">
                  Reach Us
                </h1>
                <form className="w-full flex flex-col items-center justify-center  pointer-events-auto">
                  <FloatingLabelInput
                    label="Full Name"
                    type="text"
                    required
                    autoComplete="full name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  <FloatingLabelInput
                    label="Email Address"
                    type="email"
                    required
                    autoComplete="username"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />

                  <FloatingLabelInput
                    label="Phone Number"
                    type="tel"
                    required
                    autoComplete="tel"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />

                  <FloatingLabelInput
                    label="Event Type"
                    type="text"
                    required
                    onChange={(e) => setEventType(e.target.value)}
                    value={eventType}
                  />
                </form>
                {statusMessage.text && (
                  <p
                    className={`text-sm font-montserrat mb-4 ${
                      statusMessage.isError ? "text-darkblue" : "text-grayBlue"
                    } ${
                      statusMessage.text === "null" ? "invisible" : "visible"
                    }`}
                  >
                    {statusMessage.text}
                  </p>
                )}

                <SubmitBtn
                  details={details}
                  resetFuncs={resetFuncs}
                  setStatusMessage={setStatusMessage}
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full   space-y-5">
                <h1 className="font-meditative text-darkBlue text-4xl sm:text-6xl lg:text-7xl mb-5">
                  Or Call Us
                </h1>
                <p className="text-darkBlue text-lg sm:text-xl lg:text-2xl font-montserrat">
                  +91 12345 67890
                </p>
                <p className="text-darkBlue text-lg sm:text-xl lg:text-2xl font-montserrat">
                  +91 98765 43210
                </p>
                <div className="flex flex-col items-center justify-center w-full h-full p-10 font-sallim text-5xl lg:text-8xl relative z-20">
                  <span className="font-meditative z-10 text-darkBlue">
                    Brahmma{" "}
                  </span>{" "}
                  <span className="font-sallim text-sandal text-[7rem] font-thin  -rotate-[10deg] ">
                    {" "}
                    Decors
                  </span>
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
