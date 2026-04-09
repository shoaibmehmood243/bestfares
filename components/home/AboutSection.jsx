"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGlobeAmericas, FaPaperPlane, FaSmile } from "react-icons/fa";

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

    return (
        <section id="about" className="py-20 px-4 md:px-10 bg-white overflow-hidden scroll-mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left: Image Collage - Styled like the screenshot */}
                <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <div className="relative w-full aspect-square max-w-[550px] mx-auto">

                        {/* Top oval image */}
                        <div className="absolute top-[5%] left-0 w-[60%] h-[40%] rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] overflow-hidden shadow-xl rotate-[-5deg] z-0">
                            <Image
                                src="/images/destination-1.jpg"
                                alt="Tour Experience"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Bottom oval image */}
                        <div className="absolute bottom-[5%] left-[5%] w-[55%] h-[45%] rounded-[40%_40%_40%_40%_/_50%_50%_50%_50%] overflow-hidden shadow-xl z-10">
                            <Image
                                src="/images/destination-2.jpg"
                                alt="Adventure"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Right larger oval image - Main focus */}
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[65%] h-[85%] rounded-[45%_45%_45%_45%_/_55%_55%_45%_45%] overflow-hidden shadow-2xl z-20 border-[12px] border-white">
                            <Image
                                src="/images/destination-3.jpg"
                                alt="Traveler"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Decorative circles/elements if any */}
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-500/10 rounded-full blur-2xl -z-10"></div>
                    </div>
                </div>

                {/* Right: Content Area */}
                <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <h2 className="text-[#E91E63] text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.1] mb-8 font-quicksand">
                        Discover Unforgettable Tour Packages
                    </h2>

                    <p className="text-gray-600 text-[1.05rem] leading-[1.8] mb-10">
                        As a leading <span className="text-[#E91E63] font-bold">visa consultant in Lahore</span>, Bestfares Travel & Tours Pvt Ltd, we curate exceptional trips with our specially designed <span className="text-[#E91E63] font-bold">world tour package</span> deals. From exotic beaches to vibrant cities, we open the doors to new experiences. Recognized as the <span className="text-[#E91E63] font-bold font-black">best travel agency in Pakistan</span>, we are committed to offering top notch service, ensuring your travels are exciting, memorable, and completely hassle free.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                        <div className="flex flex-col gap-1 group">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#1A5CE5] p-3 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform">
                                    <FaGlobeAmericas className="text-xl md:text-2xl" />
                                </div>
                                <span className="text-2xl md:text-3xl font-black text-gray-800">2,000+</span>
                            </div>
                            <p className="text-gray-500 font-semibold text-sm ml-[3.25rem]">File Completed</p>
                        </div>

                        <div className="flex flex-col gap-1 group">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#1A5CE5] p-3 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform">
                                    <FaPaperPlane className="text-xl md:text-2xl" />
                                </div>
                                <span className="text-2xl md:text-3xl font-black text-gray-800">5,000+</span>
                            </div>
                            <p className="text-gray-500 font-semibold text-sm ml-[3.25rem]">Trips Completed</p>
                        </div>

                        <div className="flex flex-col gap-1 group">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#1A5CE5] p-3 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform">
                                    <FaSmile className="text-xl md:text-2xl" />
                                </div>
                                <span className="text-2xl md:text-3xl font-black text-gray-800">7,000+</span>
                            </div>
                            <p className="text-gray-500 font-semibold text-sm ml-[3.25rem]">Happy Travelers</p>
                        </div>
                    </div>

                    {/* Actions & CEO */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                        <Link
                            href="/about"
                            className="bg-[#E91E63] text-white px-8 py-4 rounded-xl font-black text-sm tracking-wider hover:bg-[#C2185B] transition-all hover:scale-105 shadow-xl hover:shadow-[#E91E63]/30 uppercase"
                        >
                            MORE ABOUT US
                        </Link>

                        <div className="flex items-center gap-4 bg-[#FFF5F7] p-3 pr-8 rounded-full border border-pink-100 group">
                            {/* <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md bg-gray-200">
                                <Image 
                                    src="/images/destination-5.jpg" 
                                    alt="CEO" 
                                    fill 
                                    className="object-cover"
                                />
                            </div> */}
                            <div>
                                <h4 className="font-bold text-gray-900 text-[1.1rem]">Tallat Mahmood</h4>
                                <div className="flex items-center gap-4">
                                    <p className="text-[#E91E63] font-black text-xs uppercase tracking-widest">CEO</p>
                                    {/* <div className="hidden sm:block opacity-40 italic font-serif text-xl select-none">
                                        Signature
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}