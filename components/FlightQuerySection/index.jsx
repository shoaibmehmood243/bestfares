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
            .catch(() => {
                setStatusType("error");
                toast.error("❌ Error sending email.");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const floatingInput = (name, type, label, required = false) => (
        <div className="relative w-full">
            <input
                name={name}
                type={type}
                id={name}
                placeholder=" "
                required={required}
                className="peer w-full border rounded px-4 pt-6 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <label
                htmlFor={name}
                className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary"
            >
                {label}
            </label>
        </div>
    );

    const floatingSelect = (name, label, options, required = false) => (
        <div className="relative w-full">
            <select
                name={name}
                id={name}
                required={required}
                className="peer w-full border rounded px-4 pt-6 pb-2 text-sm text-gray-900 bg-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
                <option value="" disabled hidden></option>
                {options.map((opt, idx) => (
                    <option key={idx} value={opt.value}>{opt.label}</option>
                ))}
            </select>
            <label
                htmlFor={name}
                className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary"
            >
                {label}
            </label>
        </div>
    );

    return (
        <section id="flight-booking" className="z-[1] w-full">
            <div className="w-full md:w-4/5 max-w-2xl mx-auto bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl px-6 py-6 md:py-6 md:px-8 hover:shadow-3xl transition-shadow duration-300">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-gray-800">
                    Ready to <span className="text-primary">Take Off</span>?
                </h2>
                <p className="mb-6 text-center text-gray-600 block md:hidden">
                    Your adventure, Our expertise
                </p>

                {statusMessage && (
                    <p className={`text-center mb-4 font-medium ${statusType === "success" ? "text-green-600" : "text-red-600"}`}>
                        {statusMessage}
                    </p>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {floatingInput("fullName", "text", "Full Name", true)}
                    <div className="flex gap-4">
                        {floatingInput("email", "email", "Email", true)}
                        {floatingInput("phone", "tel", "Phone Number", true)}
                    </div>
                    <div className="flex gap-4">
                        {floatingInput("fromCity", "text", "From City", true)}
                        {floatingInput("toCity", "text", "To City", true)}
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        {floatingInput("departing", "date", "Departing", true)}
                        {floatingInput("returning", "date", "Returning")}
                    </div>
                    <div className="flex gap-4">
                        {floatingSelect("adults", "No. of Adults", Array.from({ length: 10 }, (_, i) => ({ value: i + 1, label: `${i + 1}` })), true)}
                        {floatingSelect("children", "No. of Children", Array.from({ length: 10 }, (_, i) => ({ value: i, label: `${i}` })))}
                    </div>
                    <Button className="w-full mt-2" type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Submit"}
                    </Button>
                </form>
            </div>
        </section>
    );
}
