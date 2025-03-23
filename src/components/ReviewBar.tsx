import ReviewCard from "./ReviewCard"


export default function ReviewBar() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 overflow-y-scroll scrollbar-hide w-full">
      <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {/* Card */}
              <ReviewCard/>
              <ReviewCard/>
              <ReviewCard/>
            </div>
    </section>
  );
}
