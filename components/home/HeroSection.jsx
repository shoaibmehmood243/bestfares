"use client";
import FlightQuerySection from "../FlightQuerySection";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative home overflow-hidden">
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent z-0"></div>

      <div className={`relative z-10 flex flex-col md:flex-row justify-center md:justify-between items-center min-h-screen px-4 md:px-12 py-24 md:py-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 text-white md:mr-20">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
              Discover the world's best travel deals with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                BestFares
              </span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-100 font-medium drop-shadow-md">
              Your adventure, Our expertise
            </p>
            <div className="flex flex-wrap gap-8 justify-center md:justify-start mt-8 text-white">
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold text-cyan-300">500+</p>
                <p className="text-sm text-gray-200">Destinations</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold text-cyan-300">10K+</p>
                <p className="text-sm text-gray-200">Happy Travelers</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold text-cyan-300">24/7</p>
                <p className="text-sm text-gray-200">Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2">
          <FlightQuerySection />
        </div>
      </div>
    </section>
  );
}
