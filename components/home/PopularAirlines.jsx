"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const popularAirlines = [
    { src: '/images/etihad.png', alt: 'Etihad' },
    { src: '/images/emirates.png', alt: 'Emirates' },
    { src: '/images/kuwait.png', alt: 'Kuwait' },
    { src: '/images/qatar.png', alt: 'Qatar' },
    { src: '/images/turkish.png', alt: 'Turkish' },
    { src: '/images/flydubai.png', alt: 'Fly Dubai' },
    { src: '/images/pia.png', alt: 'PIA' },
    { src: '/images/Airsial.png', alt: 'Airsial' },
    { src: '/images/thai.png', alt: 'Thai' },
    { src: '/images/al-saudia.png', alt: 'Al Saudia' },
    { src: '/images/air-arabia.png', alt: 'Air Arabia' },
    { src: '/images/british-airways.png', alt: 'British Airways' },
    { src: '/images/china-southern.png', alt: 'China Southern' },
    { src: '/images/air-malindo.png', alt: 'Air Malindo' },
    { src: '/images/oman.png', alt: 'Oman' },
    { src: '/images/virginatlantic.png', alt: 'Virgin Atlantic' },
];

export default function PopularAirlines() {
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

        const section = document.getElementById("popular-airlines");
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <section id="popular-airlines" className="pb-20 pt-10 px-5 md:px-10 bg-gradient-to-b from-white to-gray-50">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="text-primary text-center mb-2 font-semibold tracking-wide uppercase text-sm">Our Partners</p>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 leading-tight">
                    Popular <span className="text-primary">Airlines</span>
                </h2>
                <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                    We partner with the world's leading airlines to bring you the best travel experiences
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-7xl mx-auto">
                {popularAirlines.map((airline, index) => (
                    <div
                        key={index}
                        className={`bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: `${index * 30}ms` }}
                    >
                        <div className="relative w-full h-16 flex items-center justify-center">
                            <Image
                                src={airline.src}
                                alt={airline.alt}
                                width={100}
                                height={50}
                                className="object-contain transition-transform duration-300 group-hover:scale-110 max-h-12"
                            />
                        </div>
                        <p className="text-center text-xs text-gray-600 mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {airline.alt}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}