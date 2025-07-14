"use client"

import React from "react";
import { useRouter } from "next/navigation";

const BookNowBtn = () => {

    const router = useRouter();

  return (
    <button className="flex items-center justify-center bg-darkBlue w-fit text-white py-2 px-4 rounded-md shadow-lg transition-all duration-300  ease-in-out hover:bg-darkBlue/75 border-darkBlue border-2 active:bg-darkBlue/80  hover:rounded-xl transform "
    onClick={()=> {
        router.push("/contacts")
    }}>
        <span className="text-2xl font-montserrat text-white">Book Now</span>
    </button>
  );
};

export default BookNowBtn;
