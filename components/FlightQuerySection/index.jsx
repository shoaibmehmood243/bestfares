"use client";
import { useState } from "react";
import { sendEmail } from "@/lib/utils";
import { Button } from "../ui/button";
import { toast } from 'react-hot-toast';

export default function FlightQuerySection() {
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [statusType, setStatusType] = useState("success");

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const data = {
            fullName: formData.get("fullName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            fromCity: formData.get("fromCity"),
            toCity: formData.get("toCity"),
            departing: formData.get("departing"),
            returning: formData.get("returning"),
            adults: formData.get("adults"),
            children: formData.get("children"),
        };

        setLoading(true);
        setStatusMessage("");

        sendEmail(data)
            .then((res) => {
                if (res.message) {
                    setStatusType("success");
                    toast.success("✅ Email sent successfully!");
                    form.reset();
                } else {
                    setStatusType("error");
                    toast.error("❌ Failed to send email.");
                }
            })
            .catch((err) => {
                setStatusType("error");
                toast.error("❌ Error sending email.");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <section id="flight-booking" className="z-[1] w-full">
            <div className="w-full md:w-4/5 max-w-2xl mx-auto bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl px-6 py-4 md:py-4 md:px-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-gray-800">
                    Ready to <span className="text-primary">Take Off</span>?
                </h2>
                <p className="mb-6 text-center text-gray-600 block md:hidden">
                    Your adventure, Our expertise
                </p>

                {statusMessage && (
                    <p
                        className={`text-center mb-4 font-medium ${
                            statusType === "success" ? "text-green-600" : "text-red-600"
                        }`}
                    >
                        {statusMessage}
                    </p>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input name="fullName" type="text" placeholder="Full Name" className="w-full border rounded px-4 py-2" required />
                    <div className="flex gap-4">
                        <input name="email" type="email" placeholder="Email" className="w-full border rounded px-4 py-2" required />
                        <input name="phone" type="tel" placeholder="Phone Number" className="w-full border rounded px-4 py-2" required />
                    </div>
                    <div className="flex gap-4">
                        <input name="fromCity" type="text" placeholder="From City" className="w-full border rounded px-4 py-2" required />
                        <input name="toCity" type="text" placeholder="To City" className="w-full border rounded px-4 py-2" required />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input name="departing" type="date" className="w-full border rounded px-4 py-2" required />
                        <input name="returning" type="date" className="w-full border rounded px-4 py-2" />
                    </div>
                    <div className="flex gap-4">
                        <select name="adults" className="w-full border rounded px-4 py-2" required>
                            <option value="">No. of Adults</option>
                            {[...Array(10)].map((_, i) => (
                                <option key={i} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                        <select name="children" className="w-full border rounded px-4 py-2">
                            <option value="">No. of Children</option>
                            {[...Array(10)].map((_, i) => (
                                <option key={i} value={i}>
                                    {i}
                                </option>
                            ))}
                        </select>
                    </div>
                    <Button className="w-full mt-2" type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Submit"}
                    </Button>
                </form>
            </div>
        </section>
    );
}
