"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Sarah Johnson",
        location: "New York, USA",
        rating: 5,
        text: "BestFares made our dream vacation to Paris a reality! The booking process was seamless, and their customer support was exceptional. Highly recommended!",
        image: "https://i.pravatar.cc/150?img=1"
    },
    {
        name: "Ahmed Al-Rashid",
        location: "Dubai, UAE",
        rating: 5,
        text: "I've used many travel agencies, but BestFares stands out. Great prices, excellent service, and they truly care about their customers. Will definitely book again!",
        image: "https://i.pravatar.cc/150?img=12"
    },
    {
        name: "Emily Chen",
        location: "Singapore",
        rating: 5,
        text: "The team at BestFares helped us plan the perfect family vacation. Everything was organized perfectly, and we had an amazing time. Thank you!",
        image: "https://i.pravatar.cc/150?img=5"
    }
];

export default function TestimonialsSection() {
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

        const section = document.getElementById("testimonials");
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <section id="testimonials" className="pb-20 pt-10 px-5 md:px-10 bg-gradient-to-b from-gray-50 to-white">
            <div className={`mx-auto md:w-2/3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="text-primary text-center mb-2 font-semibold tracking-wide uppercase text-sm">Testimonials</p>
                <h2 className="text-3xl md:text-4xl md:w-2/3 mx-auto font-bold text-center mb-4 leading-tight">
                    What Our <span className="text-primary">Travelers Say</span>
                </h2>
                <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                    Don't just take our word for it - hear from our satisfied customers
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {testimonials.map((testimonial, idx) => (
                    <div
                        key={idx}
                        className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: `${idx * 150}ms` }}
                    >
                        {/* Rating Stars */}
                        <div className="flex gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400 text-lg" />
                            ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-gray-700 leading-relaxed mb-6 italic">
                            "{testimonial.text}"
                        </p>

                        {/* Customer Info */}
                        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                                <p className="text-sm text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
