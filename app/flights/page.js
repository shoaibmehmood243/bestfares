"use client";
import Image from "next/image";
import { useState } from "react";
import PopularAirlines from "@/components/home/PopularAirlines";
import PopularDestinations from "@/components/home/PopularDestinations";
import AboutSection from "@/components/home/AboutSection";
import BankInfoSection from "@/components/home/BankInfoSection";
import { FaTicketAlt, FaShieldAlt, FaClock } from "react-icons/fa";

export default function FlightsPage() {
    const [success, setSuccess] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const message = `*New Flight Inquiry from BestFares*%0A%0A*Name:* ${form.name.value}%0A*Phone:* ${form.phone.value}%0A*Email:* ${form.email.value || "N/A"}%0A*From:* ${form.from.value}%0A*To:* ${form.to.value}%0A*Date:* ${form.date.value}%0A*Travelers:* ${form.travelers.value}%0A*Details:* ${form.message.value || "None"}`;

        window.open(`https://wa.me/923111421111?text=${message}`, "_blank");
        setSuccess("Redirecting to WhatsApp...");
        form.reset();
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[40vh] md:min-h-[60vh] py-12 md:py-20 flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/flight.png"
                    alt="Flights Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
                        Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Perfect Flight</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-lg">
                        Exclusive deals on domestic and international flights. Get the best prices with personalized service.
                    </p>
                </div>
            </section>

            {/* Airline Partners Section (Using homepage component) */}
            <PopularAirlines />

            {/* Content & Form Section (Form is back where it was) */}
            <section className="py-20 px-4 md:px-10 bg-gray-50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left side: Information */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Book With <span className="text-primary">BestFares</span>?</h2>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="bg-blue-100 p-4 rounded-2xl text-primary text-2xl h-fit">
                                    <FaTicketAlt />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Unbeatable Prices</h3>
                                    <p className="text-gray-600">We leverage our huge network and bulk booking power to offer you fares you won't find anywhere else.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-green-100 p-4 rounded-2xl text-green-600 text-2xl h-fit">
                                    <FaShieldAlt />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Secure & Reliable</h3>
                                    <p className="text-gray-600">Your payments and personal data are always protected. Book with confidence through a licensed travel agency.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-orange-100 p-4 rounded-2xl text-orange-600 text-2xl h-fit">
                                    <FaClock />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Support</h3>
                                    <p className="text-gray-600">Our team of travel experts is always available to help with changes, cancellations, or special requests.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-8 bg-primary rounded-3xl text-white shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                            <h3 className="text-2xl font-bold mb-4">Need Help Now?</h3>
                            <p className="mb-6 opacity-90">Prefer to speak with an agent directly? Call or WhatsApp us anytime for an immediate quote.</p>
                            <a href="https://wa.me/923111421111" className="bg-white text-primary px-8 py-3 rounded-full font-black hover:bg-gray-100 transition-all hover:scale-105 inline-block shadow-lg">
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Right side: Inquiry Form */}
                    <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-10 border border-gray-100 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-gray-800 underline decoration-primary/30 decoration-4 underline-offset-8">Request a Flight Quote</h2>
                                <p className="text-gray-500 mt-4">Direct WhatsApp submission for instant support.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <label className="block">
                                        <span className="text-sm font-semibold text-gray-700 ml-1">From</span>
                                        <input name="from" type="text" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-gray-50/50" placeholder="City or Airport" />
                                    </label>
                                    <label className="block">
                                        <span className="text-sm font-semibold text-gray-700 ml-1">To</span>
                                        <input name="to" type="text" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-gray-50/50" placeholder="City or Airport" />
                                    </label>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <label className="block">
                                        <span className="text-sm font-semibold text-gray-700 ml-1">Departure Date</span>
                                        <input name="date" type="date" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-gray-50/50" />
                                    </label>
                                    <label className="block">
                                        <span className="text-sm font-semibold text-gray-700 ml-1">Travelers</span>
                                        <input name="travelers" type="number" min="1" defaultValue="1" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-gray-50/50" />
                                    </label>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <label className="block">
                                        <span className="text-sm font-semibold text-gray-700 ml-1">Full Name</span>
                                        <input name="name" type="text" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-gray-50/50" placeholder="John Doe" />
                                    </label>
                                    <label className="block">
                                        <span className="text-sm font-semibold text-gray-700 ml-1">Phone Number</span>
                                        <input name="phone" type="tel" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-gray-50/50" placeholder="+92 3XX XXXXXXX" />
                                    </label>
                                </div>

                                <label className="block">
                                    <span className="text-sm font-semibold text-gray-700 ml-1">Email Address (Optional)</span>
                                    <input name="email" type="email" className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-gray-50/50" placeholder="john@example.com" />
                                </label>

                                <label className="block">
                                    <span className="text-sm font-semibold text-gray-700 ml-1">Additional Requirements</span>
                                    <textarea name="message" rows={3} className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none bg-gray-50/50" placeholder="Preferred airline, class, etc." />
                                </label>

                                <button
                                    type="submit"
                                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-black py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 text-lg"
                                >
                                    Submit on WhatsApp
                                </button>

                                {success && (
                                    <div className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-xl text-center font-bold">
                                        {success}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
