"use client";
import Image from "next/image";
import { useState } from "react";
import { FaMapMarkedAlt, FaCameraRetro, FaBus, FaCompass } from "react-icons/fa";

export default function ToursPage() {
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
            service: "Tours",
            message: `Tour Inquiry: Destination ${form.destination.value} for ${form.travelers.value} persons. Duration: ${form.duration.value}. Details: ${form.message.value}`
        };
        try {
            const res = await fetch("/api/email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if (res.ok) {
                setSuccess("Success! Our tour specialists will design your dream vacation.");
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
            <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/tours.jpg"
                    alt="Tours Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-0"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                        Adventure <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Awaits You</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-white max-w-3xl mx-auto font-medium drop-shadow-lg">
                        Explore the world's most breathtaking destinations with our hand-crafted tour packages.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-10 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Discover Your <span className="text-primary">Next Destination</span></h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            From the snowy peaks of Northern Pakistan to the tropical beaches of Thailand, we bring you the world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100 hover:shadow-xl transition-all duration-300">
                            <FaMapMarkedAlt className="text-primary text-4xl mb-4" />
                            <h3 className="font-bold text-xl mb-2 text-gray-800">Expert Planning</h3>
                            <p className="text-gray-600">Every itinerary is carefully optimized for the best experience.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-orange-50 border border-orange-100 hover:shadow-xl transition-all duration-300">
                            <FaBus className="text-orange-500 text-4xl mb-4" />
                            <h3 className="font-bold text-xl mb-2 text-gray-800">Comfortable Travel</h3>
                            <p className="text-gray-600">Premium transportation and logistics for every leg of the journey.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-green-50 border border-green-100 hover:shadow-xl transition-all duration-300">
                            <FaCameraRetro className="text-green-500 text-4xl mb-4" />
                            <h3 className="font-bold text-xl mb-2 text-gray-800">Unique Experiences</h3>
                            <p className="text-gray-600">Access to hidden gems and authentic local activities.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-purple-50 border border-purple-100 hover:shadow-xl transition-all duration-300">
                            <FaCompass className="text-purple-500 text-4xl mb-4" />
                            <h3 className="font-bold text-xl mb-2 text-gray-800">Guided Tours</h3>
                            <p className="text-gray-600">Professional local guides to share deep insights and stories.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl group">
                            <Image
                                src="/images/destination-1.jpg"
                                alt="Sample Destination"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <h3 className="text-2xl font-bold mb-2">Hunza Valley Specials</h3>
                                    <p className="opacity-80">Experience the majesty of the Karakoram range with our 7-day premium tours.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-[3rem] p-10 md:p-12 border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase tracking-wider">Plan Your Vacation</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <label className="block">
                                    <span className="text-sm font-bold text-gray-500 uppercase ml-1">Where to?</span>
                                    <input name="destination" type="text" required className="mt-1 w-full border-b-2 border-gray-300 bg-transparent px-4 py-3 focus:outline-none focus:border-primary transition-all text-lg font-medium" placeholder="Destination (e.g. Dubai, Turkey, Sri Lanka)" />
                                </label>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <label className="block">
                                        <span className="text-sm font-bold text-gray-500 uppercase ml-1">No. of Persons</span>
                                        <input name="travelers" type="number" min="1" required className="mt-1 w-full border-b-2 border-gray-300 bg-transparent px-4 py-3 focus:outline-none focus:border-primary transition-all text-lg font-medium" defaultValue="2" />
                                    </label>
                                    <label className="block">
                                        <span className="text-sm font-bold text-gray-500 uppercase ml-1">Duration (Days)</span>
                                        <input name="duration" type="number" min="1" required className="mt-1 w-full border-b-2 border-gray-300 bg-transparent px-4 py-3 focus:outline-none focus:border-primary transition-all text-lg font-medium" placeholder="7" />
                                    </label>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <label className="block">
                                        <span className="text-sm font-bold text-gray-500 uppercase ml-1">Full Name</span>
                                        <input name="name" type="text" required className="mt-1 w-full border-b-2 border-gray-300 bg-transparent px-4 py-3 focus:outline-none focus:border-primary transition-all text-lg font-medium" placeholder="Your Name" />
                                    </label>
                                    <label className="block">
                                        <span className="text-sm font-bold text-gray-500 uppercase ml-1">Phone Number</span>
                                        <input name="phone" type="tel" required className="mt-1 w-full border-b-2 border-gray-300 bg-transparent px-4 py-3 focus:outline-none focus:border-primary transition-all text-lg font-medium" placeholder="+92 ..." />
                                    </label>
                                </div>

                                <label className="block">
                                    <span className="text-sm font-bold text-gray-500 uppercase ml-1">Tell us more</span>
                                    <textarea name="message" rows={2} className="mt-1 w-full border-b-2 border-gray-300 bg-transparent px-4 py-3 focus:outline-none focus:border-primary transition-all text-lg font-medium resize-none" placeholder="Interests, budget, or preferred dates..." />
                                </label>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-black text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-xl active:scale-95 disabled:opacity-50"
                                >
                                    {loading ? "Sending..." : "Request Itinerary"}
                                </button>
                                {success && <p className="text-green-600 font-bold text-center">{success}</p>}
                                {error && <p className="text-red-500 font-bold text-center">{error}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
