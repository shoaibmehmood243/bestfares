"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutSection() {
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

        const section = document.getElementById("about");
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const features = [
        {
            icon: '/images/icon-about-1.png.png',
            title: 'Luxury Trip',
            description: 'Experience world-class travel with premium accommodations and exclusive destinations.'
        },
        {
            icon: '/images/icon-about-2.png.png',
            title: 'Affordable Budget',
            description: 'Get the best value for your money with our competitive pricing and special deals.'
        },
        {
            icon: '/images/icon-about-3.png.png',
            title: 'Personalized Approach',
            description: 'Tailored travel experiences designed specifically for your preferences and needs.'
        },
        {
            icon: '/images/icon-about-4.png.png',
            title: 'Experienced Guide',
            description: 'Our expert team is available 24/7 to assist you with any queries or concerns.'
        }
    ];

    return (
        <section id="about" className="pb-20 pt-10 px-5 md:px-10 bg-gradient-to-b from-gray-50 to-white">
            <div className={`mx-auto md:w-2/3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="text-primary text-center mb-2 font-semibold tracking-wide uppercase text-sm">About BestFares</p>
                <h2 className="text-3xl md:text-4xl md:w-2/3 mx-auto font-bold text-center mb-4 leading-tight">
                    Experience the World With <span className="text-primary">Best Fares</span>
                </h2>
                <p className="text-base md:text-lg text-center leading-7 text-gray-600 max-w-3xl mx-auto">
                    BestFares is a travel agency specializing in providing the best deals on flights, hotels, and activities. We strive to help our clients find the perfect trip, while also providing peace of mind by offering transparent pricing and 24/7 customer support.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 items-start gap-6 mt-12 max-w-7xl mx-auto">
                <div className="flex flex-col gap-6">
                    {features.slice(0, 2).map((feature, idx) => (
                        <div
                            key={idx}
                            className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                <Image src={feature.icon} alt={feature.title} width={30} height={30} />
                            </div>
                            <h6 className="font-bold text-lg mb-2 text-gray-800">{feature.title}</h6>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className={`col-span-2 h-full flex justify-center items-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                        <Image
                            src='/images/about-img-3.png.png'
                            alt="About"
                            width={400}
                            height={400}
                            className="object-contain w-full h-auto relative z-10 drop-shadow-2xl"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    {features.slice(2, 4).map((feature, idx) => (
                        <div
                            key={idx}
                            className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${(idx + 2) * 100}ms` }}
                        >
                            <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                <Image src={feature.icon} alt={feature.title} width={30} height={30} />
                            </div>
                            <h6 className="font-bold text-lg mb-2 text-gray-800">{feature.title}</h6>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}