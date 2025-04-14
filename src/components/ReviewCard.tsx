import Image from "next/image";
import user1 from "@/images/user1.jpg";
import React from "react";

const ReviewCard = () => {
  return (
    <div className="relative overflow-hidden shadow-xl rounded-xl sm:my-6 md:my-2 min-w-[300px] h-full">
      {/* Background Art */}
      
      {/* Foreground Content */}
      <div className="flex flex-col justify-between flex-1 p-6 bg-sandal lg:py-8 lg:px-7 relative z-10">
        <div className="flex-1">
          {/* Stars */}
          <div className="flex items-center">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-5 h-5"
              >
                <svg
                  className="w-5 h-5 text-darkBlue"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            ))}
          </div>

          {/* Review Text */}
          <blockquote className="mt-8">
            <p className="text-sm lg:text-lg leading-relaxed text-blk font-montserrat">
              “You made it so simple. My new site is so much faster and easier
              to work with than my old site. I just choose the page, make the
              change.”
            </p>
          </blockquote>
        </div>

        {/* User Info */}
        <div className="flex items-center mt-8">
          <div className="relative flex items-center justify-center w-12 h-12 overflow-hidden rounded-full bg-blk">
            <Image
              src={user1}
              alt="user profile"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="ml-4">
            <p className="text-3xl text-blk font-meditative">Ansari</p>
            <p className="mt-0.5 text-xs text-blk font-pj">
              Our Latest Customer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
