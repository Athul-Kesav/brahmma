import Navbar from "@/components/Navbar";
import Image from "next/image";
import { ReactLenis } from "lenis/react";
import Footer from "@/components/Footer";
import BookNowBtn from "@/components/BookNowBtn";
import bP from "@/images/birthdayParty.png";
import bS from "@/images/babyShower.png";
import cF from "@/images/collegeFest.png";
import cE from "@/images/corporateEvent.png";
import eG from "@/images/engagement.png";
import party from "@/images/party.png";
import reception from "@/images/reception.png";
import wedding from "@/images/wedding.png";
import sO from "@/images/shopOpening.png";

const serviceDetails = {
  birthdayParty: {
    title: "Birthday Party",
    desc: "Celebrate your special day with a memorable birthday party experience.",
    details:
      "Our birthday party planning includes everything from unique themes, colorful decorations, fun activities, and customized cakes to interactive entertainment for all age groups. We handle venue selection, catering, and party favors to ensure a seamless experience. Whether it's a kid’s bash or an adult soirée, we tailor it to match your style. Our team ensures a vibrant, fun-filled celebration. Let us take care of the details while you enjoy your big day.",
  },
  babyShower: {
    title: "Baby Shower",
    desc: "Welcome your little one with a beautiful and heartwarming baby shower.",
    details:
      "We design baby showers with warmth, elegance, and personal touches to celebrate the arrival of your little one. From gender-reveal themes to charming games, décor, and return gifts, everything is carefully curated. Our planners manage everything—venue setup, floral arrangements, and catering. We ensure the day is filled with love, laughter, and cherished memories. You focus on enjoying the joy of parenthood while we make the celebration special.",
  },
  collegeFest: {
    title: "College Fest",
    desc: "Organize an exciting and vibrant college fest for students and faculty.",
    details:
      "Our college fest management includes event planning, artist bookings, technical setup, and crowd management. We help organize cultural, technical, and sports activities with full coordination. From stage and sound to branding and safety measures, everything is streamlined. Our team ensures maximum participation, entertainment, and student engagement. We create an unforgettable campus event that energizes your institution.",
  },
  corporateEvent: {
    title: "Corporate Event",
    desc: "Host professional and seamless corporate events for your business needs.",
    details:
      "We offer end-to-end planning for conferences, product launches, annual meets, and team outings. Our services cover venue booking, audio-visual setup, branding, guest management, and catering. We ensure professionalism, punctuality, and attention to detail. With smooth execution and elegant presentation, your corporate identity shines. Focus on networking and results while we handle the rest.",
  },
  engagement: {
    title: "Engagement",
    desc: "Celebrate your engagement with an elegant and romantic event.",
    details:
      "Our engagement event planning includes romantic themes, floral arrangements, elegant décor, and lighting that set the mood. We offer personalized invitations, entertainment, and a well-curated menu. Every moment is designed to reflect your love story. We coordinate with vendors, photographers, and decorators to ensure perfection. Let us craft a magical beginning to your lifelong journey.",
  },
  party: {
    title: "Party",
    desc: "Throw an unforgettable party for any occasion with our expert services.",
    details:
      "We plan parties for any occasion—be it anniversaries, promotions, or themed get-togethers. From DJ setups and dance floors to live entertainment and mixology bars, we make it lively. Our services include personalized décor, lighting, catering, and guest activities. We handle logistics, timing, and atmosphere creation. Relax and party hard—we’ve got you covered from start to finish.",
  },
  reception: {
    title: "Reception",
    desc: "Plan a grand and stylish reception to celebrate your special moments.",
    details:
      "We design grand receptions with luxurious décor, beautiful floral stages, and a sophisticated ambiance. Our packages include venue styling, catering, guest seating, and entertainment coordination. Every detail is aligned to reflect your taste and traditions. Whether intimate or large-scale, we manage everything smoothly. Celebrate your new beginning in a truly unforgettable way.",
  },
  wedding: {
    title: "Wedding",
    desc: "Create the wedding of your dreams with our comprehensive planning services.",
    details:
      "We offer full-service wedding planning including venue selection, theme design, decoration, catering, photography, and guest hospitality. From Mehendi to the main event, we cover all ceremonies. Our planners ensure that traditions, aesthetics, and logistics blend seamlessly. Custom touches like personalized décor, music, and rituals make it truly yours. You enjoy the happiest day of your life—we handle the rest.",
  },
  shopOpening: {
    title: "Shop Opening",
    desc: "Mark the beginning of your new venture with a grand shop opening event.",
    details:
      "We organize shop openings with crowd-pulling ideas, ribbon-cutting ceremonies, décor, and traditional rituals. Our services include branding banners, invitation designs, and sound/light setups. We manage guest reception, refreshments, and local promotions. Whether it's a boutique or showroom, we help you make a strong first impression. Let your business start with success and celebration.",
  },
};

type ServiceKey = keyof typeof serviceDetails;

//  details: "We provide creative ideas and logistics support to ensure a successful launch event that attracts customers and builds excitement for your new business."

type PageProps = {
  params: Promise<{ slug: ServiceKey }>;
};

export default async function Service({ params }: PageProps) {
  // Await the params before using its properties
  const { slug } = await params;

  const title = serviceDetails[slug]?.title || "Service not found";
  const desc = serviceDetails[slug]?.desc || "Description not available.";
  const details = serviceDetails[slug]?.details || "Details not available.";

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
        <div className="flex flex-col relative md:flex-row items-center justify-center w-full h-[90vh] bg-cream px-6 py-12 gap-8">
          {/* Image Section */}
          <div className="w-full relative md:w-2/3 h-full py-24 ">
            <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-0  relative rounded-3xl"
          />
          </div>
          {/* Text Section */}
          <div className="w-full md:w-1/3 items-start pt-24 flex justify-between flex-col text-center md:text-left m-6 h-full">
            <p className="text-2xl font-montserrat font-base text-darkBlue  mb-36">
              {details}
            </p>
            <BookNowBtn />
          </div>
        </div>
        <Footer />
      </ReactLenis>
    </>
  );
}

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}
