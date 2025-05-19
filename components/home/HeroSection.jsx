import FlightQuerySection from "../FlightQuerySection";

export default function HeroSection() {
  return (
    <section id="hero" className="relative home">
      <div className="relative z-10 flex flex-col-reverse top-28 md:top-20 md:flex-row justify-between items-center min-h-screen px-4 md:px-12 py-8 md:py-0">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center hidden md:block md:text-left mb-8 md:mb-0 text-white md:mr-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Discover the world’s best travel deals with BestFares.
          </h1>
          <p className="mt-4 text-lg text-gray-200 font-medium">
            Your adventure, Our expertise
          </p>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2">
          <FlightQuerySection />
        </div>
      </div>
    </section>
  );
}
