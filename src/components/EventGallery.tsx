import React, { useState, useEffect } from "react";
import ReactLenis from "lenis/react";
import { StaticImageData } from "next/image";

type EventGalleryProps = {
  event: string;
  imgArray: StaticImageData[];
};

const EventGallery = ({ event, imgArray }: EventGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col h-auto w-screen p-4 my-2">
      <span className="w-full flex flex-row justify-between items-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-darkBlue whitespace-nowrap mr-7 w-fit font-meditative mb-4">{event} Gallery</h2>
        <div className="h-1 md:h-2 bg-darkBlue w-full rounded-full mb-4"/>
      </span>

      <div className="flex overflow-x-auto space-x-4 py-2 scrollbar-hide">
        
          {imgArray.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-lg overflow-hidden cursor-pointer h-[250px] md:h-[450px]"
              style={{
                width: "70vw",
                maxWidth: "700px",
                minWidth: "220px",
              }}
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={`${event} image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        
      </div>

      {/* Fullscreen Image Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-darkBlue/80 backdrop-blur-lg flex items-center  justify-center z-20"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-w-4xl w-screen h-screen shadow-xl relative rounded-3xl"
            onClick={(e) => e.stopPropagation()} // prevent close on image click
          >
            <img
              src={selectedImage}
              alt="Selected Event"
              className="w-full h-full object-contain scale-110 rounded-3xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventGallery;
