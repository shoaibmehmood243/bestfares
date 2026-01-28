"use client";
import { useEffect, useState } from "react";

export default function CallToAction() {
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

        const section = document.getElementById("cta");
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <section id="cta" className="py-20 px-5 md:px-10 bg-gradient-to-r from-primary to-blue-600 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Ready to Start Your Next Adventure?
                </h2>
                <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                    Join thousands of happy travelers who trust BestFares for their journey. Get exclusive deals and personalized service today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#flight-booking"
                        className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
                    >
                        Book Your Flight Now
                    </a>
                    <a
                        href="tel:03111-421-111"
                        className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
                    >
                        Call Us: 03111-421-111
                    </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-8 mt-12 text-white/90">
                    <div className="text-center">
                        <p className="text-3xl font-bold">500+</p>
                        <p className="text-sm">Destinations</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold">10K+</p>
                        <p className="text-sm">Happy Travelers</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold">24/7</p>
                        <p className="text-sm">Support</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold">15+</p>
                        <p className="text-sm">Years Experience</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
