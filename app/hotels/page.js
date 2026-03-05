"use client";
import Image from "next/image";
import { useState } from "react";
import { FaHotel, FaSwimmingPool, FaWifi, FaParking } from "react-icons/fa";

export default function HotelsPage() {
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
            service: "Hotels",
            message: `Hotel Inquiry: Destination ${form.destination.value} from ${form.checkin.value} to ${form.checkout.value}. Rooms: ${form.rooms.value}. Details: ${form.message.value}`
        };
        try {
            const res = await fetch("/api/email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if (res.ok) {
                setSuccess("Success! Our experts will find the best hotels for your budget.");
                form.reset();
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/hotels.png"
                    alt="Hotels Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
                        Your Home <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Away From Home</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-lg">
                        Explore hand-picked hotels with the best amenities at guaranteed lowest rates.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-10 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">Premium <span className="text-primary">Accommodations</span></h2>
                        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                            Whether you're looking for a luxury 5-star resort, a cozy boutique hotel, or a budget-friendly stay, we have partnerships with the world's leading hotel chains to bring you exclusive discounts.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-12">
                            <div className="bg-gray-50 p-6 rounded-2xl flex flex-col items-center text-center">
                                <FaSwimmingPool className="text-primary text-3xl mb-3" />
                                <span className="font-bold text-gray-800">Luxury Resorts</span>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl flex flex-col items-center text-center">
                                <FaWifi className="text-primary text-3xl mb-3" />
                                <span className="font-bold text-gray-800">Free Amenities</span>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl flex flex-col items-center text-center">
                                <FaHotel className="text-primary text-3xl mb-3" />
                                <span className="font-bold text-gray-800">Prime Locations</span>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl flex flex-col items-center text-center">
                                <FaParking className="text-primary text-3xl mb-3" />
                                <span className="font-bold text-gray-800">Verified Stays</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100">
                            <h3 className="text-xl font-bold text-primary mb-3">Group Bookings?</h3>
                            <p className="text-gray-700 mb-4">Planning a corporate event or a family reunion? Ask about our special group rates and dedicated event coordinators.</p>
                            <a href="tel:03111421111" className="text-primary font-bold hover:underline mb-1">Call Us: 03111-421-111</a>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-800">Find Your Hotel</h2>
                            <p className="text-gray-500">Share your destination and dates for a custom quote.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <label className="block">
                                <span className="text-sm font-semibold text-gray-700 ml-1">Destination</span>
                                <input name="destination" type="text" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="City or Hotel Name" />
                            </label>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <label className="block">
                                    <span className="text-sm font-semibold text-gray-700 ml-1">Check-in</span>
                                    <input name="checkin" type="date" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" />
                                </label>
                                <label className="block">
                                    <span className="text-sm font-semibold text-gray-700 ml-1">Check-out</span>
                                    <input name="checkout" type="date" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" />
                                </label>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <label className="block">
                                    <span className="text-sm font-semibold text-gray-700 ml-1">Rooms & Guests</span>
                                    <input name="rooms" type="text" defaultValue="1 Room, 2 Adults" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" />
                                </label>
                                <label className="block">
                                    <span className="text-sm font-semibold text-gray-700 ml-1">Phone Number</span>
                                    <input name="phone" type="tel" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="+92 3XX XXXXXXX" />
                                </label>
                            </div>

                            <label className="block">
                                <span className="text-sm font-semibold text-gray-700 ml-1">Full Name</span>
                                <input name="name" type="text" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="John Doe" />
                            </label>

                            <label className="block">
                                <span className="text-sm font-semibold text-gray-700 ml-1">Special Requests</span>
                                <textarea name="message" rows={3} className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none" placeholder="Breakfast, Ocean view, etc." />
                            </label>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] disabled:opacity-70"
                            >
                                {loading ? "Searching..." : "Request Hotel Rates"}
                            </button>

                            {success && <div className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-xl text-center font-medium">{success}</div>}
                            {error && <div className="bg-red-50 border-2 border-red-500 text-red-700 px-4 py-3 rounded-xl text-center font-medium">{error}</div>}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
