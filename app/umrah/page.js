"use client";
import Image from "next/image";
import { useState } from "react";
import { FaKaaba, FaHandHoldingHeart, FaUserCheck, FaAward } from "react-icons/fa";

export default function UmrahPage() {
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
            service: "Umrah",
            message: `Umrah Inquiry: Travelers: ${form.travelers.value}. Preferred Month: ${form.month.value}. Budget: ${form.budget.value}. Details: ${form.message.value}`
        };
        try {
            const res = await fetch("/api/email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if (res.ok) {
                setSuccess("Success! May Allah accept your journey. Our Umrah experts will call you soon.");
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
                    src="/images/umrah.jpeg"
                    alt="Umrah Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
                        A Spiritual <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-200">Journey of a Lifetime</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto font-medium shadow-black drop-shadow-lg">
                        Comprehensive Umrah packages designed for your peace of mind and comfort.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-10 bg-slate-50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Expertly Crafted <span className="text-primary">Umrah Packages</span></h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            We understand that Umrah is more than just a trip—it's a sacred duty. Our team handles every detail from visa processing and flights to hotel booking and ground transport, allowing you to focus entirely on your worship.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5">
                                <FaAward className="text-yellow-500 text-3xl mt-1 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-gray-800 text-xl">Licensed Agency</h3>
                                    <p className="text-gray-600">Authorized by the Ministry of Hajj & Umrah for direct visa issuance.</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5">
                                <FaUserCheck className="text-green-500 text-3xl mt-1 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-gray-800 text-xl">Dedicated Support</h3>
                                    <p className="text-gray-600">On-ground assistance in Makkah and Madinah to guide you throughout your stay.</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5">
                                <FaHandHoldingHeart className="text-red-500 text-3xl mt-1 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-gray-800 text-xl">Customized Experience</h3>
                                    <p className="text-gray-600">Economy, Star, and Premium packages tailored to your specific needs and budget.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-8 bg-black rounded-3xl text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">Ramadan Umrah 2026</h3>
                                <p className="mb-6 text-gray-300 italic">"The best of Umrah is that performed in Ramadan."</p>
                                <p className="mb-6 opacity-90">Bookings now open for early-bird Ramadan packages. Limited slots available!</p>
                                <a href="https://wa.me/923111421111" className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors inline-block">
                                    Inquire Now
                                </a>
                            </div>
                            <FaKaaba className="absolute -right-8 -bottom-8 text-white/5 text-[15rem] rotate-12" />
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-200">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-800">Plan Your Umrah</h2>
                            <p className="text-gray-500">Provide your details for a personalized Umrah package.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <label className="block">
                                    <span className="text-sm font-semibold text-gray-700 ml-1">Number of Persons</span>
                                    <input name="travelers" type="text" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="e.g. 2 Adults, 1 Child" />
                                </label>
                                <label className="block">
                                    <span className="text-sm font-semibold text-gray-700 ml-1">Preferred Month</span>
                                    <select name="month" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white">
                                        <option value="">Select Month</option>
                                        <option value="Ramadan">Ramadan</option>
                                        <option value="Shaban">Shaban</option>
                                        <option value="Rajab">Rajab</option>
                                        <option value="Other">Other Months</option>
                                    </select>
                                </label>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <label className="block">
                                    <span className="text-sm font-semibold text-gray-700 ml-1">Package Class</span>
                                    <select name="budget" required className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white">
                                        <option value="Economy">Economy (Budget Friendly)</option>
                                        <option value="Standard">Standard (3/4 Star)</option>
                                        <option value="Luxury">Luxury (5 Star Front Line)</option>
                                    </select>
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
                                <span className="text-sm font-semibold text-gray-700 ml-1">Message / Special Requirements</span>
                                <textarea name="message" rows={4} className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none" placeholder="Wheelerchair assistance, stay duration, hotels nearby Haram, etc." />
                            </label>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] disabled:opacity-70"
                            >
                                {loading ? "Processing..." : "Submit Inquiry"}
                            </button>

                            {success && (
                                <div className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-xl text-center font-medium animate-bounce-short">
                                    {success}
                                </div>
                            )}
                            {error && <div className="bg-red-50 border-2 border-red-500 text-red-700 px-4 py-3 rounded-xl text-center font-medium">{error}</div>}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
