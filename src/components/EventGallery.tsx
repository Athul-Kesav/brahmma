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
      <span>
        <h2 className="text-3xl font-bold mb-4">{event} Gallery</h2>
      </span>

      <div className="flex overflow-x-auto space-x-4 py-2 scrollbar-hide">
        
          {imgArray.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-lg overflow-hidden cursor-pointer"
              style={{
                width: "70vw",
                maxWidth: "350px",
                minWidth: "220px",
                height: "200px",
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
