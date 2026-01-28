"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const destinations = [
    { src: '/images/destination-1.jpg', alt: 'Paris', country: 'France' },
    { src: '/images/destination-2.jpg', alt: 'London', country: 'United Kingdom' },
    { src: '/images/destination-3.jpg', alt: 'New York', country: 'United States' },
    { src: '/images/destination-4.jpg', alt: 'Dubai', country: 'UAE' },
    { src: '/images/destination-5.jpg', alt: 'Sydney', country: 'Australia' },
];

export default function PopularDestinations() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById("popular-destinations");
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <section id="popular-destinations" className="pb-20 pt-10 px-5 md:px-10 bg-white">
            <div className={`mx-auto md:w-2/3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="text-primary text-center mb-2 font-semibold tracking-wide uppercase text-sm">Popular Destinations</p>
                <h2 className="text-3xl md:text-4xl md:w-2/3 mx-auto font-bold text-center mb-4 leading-tight">
                    Search Best Places in the <span className="text-primary">World</span>
                </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mt-10 max-w-7xl mx-auto">
                {destinations.map(({ src, alt, country }, idx) => (
                    <div
                        key={alt}
                        className={`relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                        <div className="relative h-[250px] md:h-[350px]">
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                            {/* Destination Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold mb-1">{alt}</h3>
                                <p className="text-sm text-gray-200 mb-3">{country}</p>

                                {/* View Details Button - appears on hover */}
                                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary/90">
                                    Explore Now →
                                </button>
                            </div>

                            {/* Top Badge */}
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Popular
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}