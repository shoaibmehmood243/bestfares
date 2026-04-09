"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FeatureHighlights() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) setIsVisible(true);
        }, { threshold: 0.1 });
        const section = document.getElementById("features-highlights");
        if (section) observer.observe(section);
        return () => section && observer.disconnect();
    }, []);

    return (
        <section id="features-highlights" className="py-20 px-4 md:px-10 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
                    {/* Left: Text Content */}
                    <div className={`space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Expert Visa Consultancy Services</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We are the <span className="text-[#E91E63] font-bold italic">best visa consultant in Lahore</span>, 
                                offering professional visa consultancy services for smooth and hassle-free visa approvals.
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Customized Tour Packages for Every Traveler</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Experience unforgettable journeys with our <span className="text-[#E91E63] font-bold italic">world tour packages</span> from Pakistan and 
                                flexible <span className="text-[#E91E63] font-bold italic">Japan Visa for Pakistani</span> nationals tailored to your needs.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[2rem] font-bold text-gray-900 mb-4">Affordable and Transparent Pricing</h3>
                            <p className="text-gray-600 text-[1.1rem] leading-relaxed">
                                We offer clear and affordable tour packages from Pakistan and 
                                <span className="font-bold underline decoration-[#E91E63]/30 decoration-4 underline-offset-4"> honeymoon packages</span>, 
                                ensuring no hidden charges and full customer satisfaction.
                            </p>
                        </div>
                    </div>

                    {/* Right: Large Image */}
                    <div className={`relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <Image 
                            src="/images/visa.jpg" 
                            alt="Travel Items" 
                            fill 
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <div className="absolute bottom-12 right-12 text-white font-black text-6xl md:text-8xl opacity-30 select-none uppercase tracking-tighter">
                            Next<br/>Destination?
                        </div>
                    </div>
                </div>

                {/* Additional 2-Column Text Section (from Screenshot 3) */}
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div>
                        <h3 className="text-[2.5rem] font-bold text-[#E91E63] leading-tight mb-6">
                            Trusted Travel Agency in Lahore and Islamabad
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed italic">
                            As a leading <span className="font-bold underline decoration-gray-300 decoration-2 underline-offset-4">travel agency in Lahore</span> and 
                            <span className="font-bold underline decoration-gray-300 decoration-2 underline-offset-4"> travel agency Islamabad</span>, 
                            we have built a reputation for excellence and reliability. Our professional team offers seamless travel planning, 
                            ensuring that every aspect of your trip is managed with care and attention to detail.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-[2.5rem] font-bold text-[#E91E63] leading-tight mb-6">
                            Extensive Global Network and Partnerships
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Being among the <span className="font-black">top travel agencies in Pakistan</span>, we have strong partnerships 
                            with international airlines, hotels, and tour operators. Whether you want to book a 
                            <span className="text-primary font-bold"> Baku tour package</span> or enjoy 
                            <span className="font-bold"> holiday packages in Europe</span>, our global network ensures you always 
                            get the best deals and premium service.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
