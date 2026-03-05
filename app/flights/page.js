"use client";
import Image from "next/image";
import { useState } from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaTicketAlt, FaShieldAlt, FaClock } from "react-icons/fa";

export default function FlightsPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setSuccess("");
        setError("");
        const form = e.target;
        const data = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            service: "Flights",
            message: `Flight Inquiry: From ${form.from.value} to ${form.to.value} on ${form.date.value}. Travelers: ${form.travelers.value}. Details: ${form.message.value}`
        };
        try {
            const res = await fetch("/api/email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if (res.ok) {
                setSuccess("Inquiry sent! Our travel experts will call you shortly with the best fares.");
                form.reset();
            } else {
                setError("Something went wrong. Please try again or call us directly.");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/flight.png"
                    alt="Flights Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
                        Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Perfect Flight</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-lg">
                        Exclusive deals on domestic and international flights. Get the best prices with personalized service.
                    </p>
                </div>
            </section>

            {/* Content & Form Section */}
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

                        <div className="mt-12 p-8 bg-primary rounded-3xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Need Help Now?</h3>
                            <p className="mb-6 opacity-90">Prefer to speak with an agent directly? Call or WhatsApp us anytime for an immediate quote.</p>
                            <a href="https://wa.me/923111421111" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-block">
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Right side: Inquiry Form */}
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-800">Request a Flight Quote</h2>
                            <p className="text-gray-500">Fill in your details and we'll find the best available fares for you.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <label className="block">
                                    <span className="text-sm font-semibold text-gray-700 ml-1">From</span>
                                    <input name="from" type="text" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="City or Airport" />
                                </label>
                                <label className="block">
                                    <span className="text-sm font-semibold text-gray-700 ml-1">To</span>
                                    <input name="to" type="text" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="City or Airport" />
                                </label>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <label className="block">
                                    <span className="text-sm font-semibold text-gray-700 ml-1">Departure Date</span>
                                    <input name="date" type="date" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" />
                                </label>
                                <label className="block">
                                    <span className="text-sm font-semibold text-gray-700 ml-1">Travelers</span>
                                    <input name="travelers" type="number" min="1" defaultValue="1" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" />
                                </label>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <label className="block">
                                    <span className="text-sm font-semibold text-gray-700 ml-1">Full Name</span>
                                    <input name="name" type="text" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="John Doe" />
                                </label>
                                <label className="block">
                                    <span className="text-sm font-semibold text-gray-700 ml-1">Phone Number</span>
                                    <input name="phone" type="tel" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="+92 3XX XXXXXXX" />
                                </label>
                            </div>

                            <label className="block">
                                <span className="text-sm font-semibold text-gray-700 ml-1">Email Address (Optional)</span>
                                <input name="email" type="email" className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="john@example.com" />
                            </label>

                            <label className="block">
                                <span className="text-sm font-semibold text-gray-700 ml-1">Additional Requirements</span>
                                <textarea name="message" rows={3} className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none" placeholder="Preferred airline, class, etc." />
                            </label>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                            >
                                {loading ? "Finding Fares..." : "Get My Quote"}
                            </button>

                            {success && (
                                <div className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-xl text-center font-medium animate-in fade-in slide-in-from-top-2">
                                    {success}
                                </div>
                            )}
                            {error && (
                                <div className="bg-red-50 border-2 border-red-500 text-red-700 px-4 py-3 rounded-xl text-center font-medium animate-in fade-in slide-in-from-top-2">
                                    {error}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
