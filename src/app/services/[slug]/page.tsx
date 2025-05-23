import Navbar from "@/components/Navbar";
import Image from "next/image";
import { ReactLenis } from "lenis/react";

const serviceDetails = {
  birthdayParty: {
    title: "Birthday Party",
    desc: "Celebrate your special day with a memorable birthday party experience.",
  },
  babyShower: {
    title: "Baby Shower",
    desc: "Welcome your little one with a beautiful and heartwarming baby shower.",
  },
  collegeFest: {
    title: "College Fest",
    desc: "Organize an exciting and vibrant college fest for students and faculty.",
  },
  corporateEvent: {
    title: "Corporate Event",
    desc: "Host professional and seamless corporate events for your business needs.",
  },
  engagement: {
    title: "Engagement",
    desc: "Celebrate your engagement with an elegant and romantic event.",
  },
  party: {
    title: "Party",
    desc: "Throw an unforgettable party for any occasion with our expert services.",
  },
  reception: {
    title: "Reception",
    desc: "Plan a grand and stylish reception to celebrate your special moments.",
  },
  wedding: {
    title: "Wedding",
    desc: "Create the wedding of your dreams with our comprehensive planning services.",
  },
  shopOpening: {
    title: "Shop Opening",
    desc: "Mark the beginning of your new venture with a grand shop opening event.",
  },
};

type ServiceKey = keyof typeof serviceDetails;

type PageProps = {
  params: Promise<{ slug: ServiceKey }>;
};

export default async function Service({ params }: PageProps) {
  // Await the params before using its properties
  const { slug } = await params;

  const title = serviceDetails[slug]?.title || "Service not found";
  const desc = serviceDetails[slug]?.desc || "Description not available.";

  // It’s usually better to use the slug in the imageUrl for consistency,
  // so consider changing `${title}.png` to `${slug}.png` if that’s intended.
  const imageUrl = `/images/services/${slug}.png`;

  return (
    <>
      <ReactLenis root options={{ lerp: 0.07 }}>
        <Navbar />
        <div className="flex flex-col items-center justify-center h-[90vh] sm:h-screen w-screen relative bg-blk shadow-2xl">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-0 opacity-75 relative mix-blend-soft-light"
            style={{ filter: "blur(10px)" }}
          />
          <div className="absolute bottom-0 left-1/2 md:left-0 z-10 min-w-fit shadow-none transform md:origin-bottom-right origin-center -translate-x-1/2 md:translate-x-0">
            <h1 className="text-2xl md:text-5xl lg:text-7xl text-center md:text-left font-bold font-montserrat uppercase p-4 bg-cream text-darkBlue rounded-t-lg md:rounded-none md:rounded-tr-lg">
              {title}
            </h1>
          </div>
          <p className="text-center text-2xl md:text-3xl z-20 font-meditative max-w-[10rem] md:max-w-md text-white">
            {desc}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center h-screen w-full bg-cream">
          {/* Additional content or sections */}
        </div>
      </ReactLenis>
    </>
  );
}

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}
