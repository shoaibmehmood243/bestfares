import React from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaHotel } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import { FaKaaba } from "react-icons/fa";
import Image from "next/image";

const services = [
  {
    label: "Flights",
    description: "Search Flights & Places Hire to our most popular destinations",
    buttonLabel: "Show Flights",
    image: "/images/flight.png", // Replace with your actual image path
    icon: <GiCommercialAirplane />,
  },
  {
    label: "Hotels",
    description: "Search Hotels & Places Hire to our most popular destinations",
    buttonLabel: "Show Hotels",
    image: "/images/hotels.png", // Replace with your actual image path
    icon: <FaHotel />,
  },
  {
    label: "Umrah",
    description: "Plan your spiritual journey with our tailored Umrah packages",
    buttonLabel: "Umrah Packages",
    image: "/images/umrah.jpeg", // Replace with your actual image path
    icon: <FaKaaba />,
  },
  {
    label: "Tours",
    description: "Explore tailored tours for unforgettable experiences",
    buttonLabel: "Show Tours",
    image: "/images/tours.jpg",
    icon: <MdFamilyRestroom />,
  },
  {
    label: "Visa",
    description: "Hassle-free visa services for your next journey",
    buttonLabel: "Visa Info",
    image: "/images/visa-world.jpg",
    icon: <IoIosGlobe />,
  },
];

export default function ServicesSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 px-0 md:px-2 py-10">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="relative rounded-xl overflow-hidden shadow-lg group hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          <Image
            src={service.image}
            alt={service.label}
            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-5 text-white group-hover:from-black/80 transition-all duration-300">
            <h3 className="text-xl font-semibold">{service.label}</h3>
            <p className="text-sm mb-3">{service.description}</p>
            <button className="bg-primary text-white text-sm justify-center px-4 py-2 rounded flex items-center gap-2 hover:bg-primary/90 transition-all transform group-hover:scale-105">
              <span className="text-lg">{service.icon}</span>
              {service.buttonLabel}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
