import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import ReviewCard from "./ReviewCard";

export default function ReviewBar() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const x = useMotionValue(0);
  const moveDistance = 300; // Change this value to adjust how far each click scrolls

  // Calculate the draggable width after the component mounts.
  useEffect(() => {
    if (scrollRef.current) {
      setScrollWidth(
        scrollRef.current.scrollWidth - scrollRef.current.offsetWidth
      );
    }
  }, []);

  // When the left arrow is clicked, move further left (more negative)
  const handleLeftArrow = () => {
    const newValue = Math.max(x.get() - moveDistance, -scrollWidth);
    animate(x, newValue, { type: "spring", stiffness: 300, damping: 30 });
  };

  // When the right arrow is clicked, move right (toward 0)
  const handleRightArrow = () => {
    const newValue = Math.min(x.get() + moveDistance, 0);
    animate(x, newValue, { type: "spring", stiffness: 300, damping: 30 });
  };

  return (
    <section className="relative  shadow-inner bg-darkBlue rounded-xl lg:rounded-3xl flex flex-col items-center gap-4 p-7 w-full h-full">
      {/* Horizontal Scroll Container for Review Cards */}
      <motion.div
        ref={scrollRef}
        className="w-full overflow-hidden h-full cursor-grab "
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          style={{ x }}
          className="flex flex-row items-center md:gap-5 gap-2 h-fit"
          drag="x"
          dragConstraints={{ right: 0, left: -scrollWidth }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </motion.div>
      </motion.div>

      {/* Chevron Arrows Positioned at Bottom Right */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-20 transition-all duration-500 ease-in-out">
        <button
          onClick={handleRightArrow}
          className="p-2 bg-cream rounded-full hover:bg-sandal focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-darkBlue"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={handleLeftArrow}
          className="p-2 bg-cream rounded-full hover:bg-sandal focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-darkBlue"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* "View All Reviews" Button at the Bottom */}
      <div className="w-full flex items-center justify-center mt-4">
        <button
          className="px-4 py-2 text-lg font-semibold text-darkBlue bg-cream rounded-md hover:bg-sandal hover:text-darkBlue shadow-2xl focus:outline-none transition duration-200 ease-in-out active:scale-[98%]"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/Brahmma+Decorators/@10.9131336,79.8330545,975m/data=!3m2!1e3!4b1!4m18!1m9!3m8!1s0x3a5511360f384943:0xa8ece3a856deaa62!2sBrahmma+Decorators!8m2!3d10.9131336!4d79.8356294!9m1!1b1!16s%2Fg%2F11f0kswq9l?hl=en&entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D",
              "_blank"
            )
          }
        >
          View All Reviews
        </button>
      </div>
    </section>
  );
}
