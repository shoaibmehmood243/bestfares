"use client";
import Image from "next/image";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { RxCross2 } from "react-icons/rx";
import React, { useState } from "react";

const countryVisas = [
    {
        flag: '/images/country-flags/thailand.png',
        name: 'Thailand',
        visaType: 'E-Visa',
        badgeColor: 'bg-red-500',
        requirements: [
            'Passport first page proper scan and having minimum 7 month of validity from date of travel',
            'Photograph taken within the last six months in HD with white background in dark color shirt',
            'Travel Ticket confirmation (Issued)',
            'Proof of accommodation in Thailand (Hotel Booking)',
            'ID card proper scan front side and back side',
            'Business name, Company name if employee',
            'If you have ever applied for a Thai visa or traveled to Thailand before, please let me know',
            'Three Month Personal Bank Statement with Account Maintenance Letter and Closing Balance 3 to 4 lac for One Person'
        ],
        info: {
            Capital: 'Bangkok (BKK)',
            Language: 'Thai',
            Currency: 'Thai Baht (THB)',
            Area: '513,120 km²',
            Population: '~ 72 Million',
            'Time Zone': 'UTC+7',
            'Driving Side': 'Left',
            Religions: '90% Buddhism'
        },
        validity: '3 MONTHS',
        stay: '30 DAYS',
    },
    {
        flag: '/images/country-flags/indonesia.png',
        name: 'Indonesia',
        visaType: 'Sticker Visa',
        badgeColor: 'bg-blue-500',
        requirements: [
            'Original passport having minimum 7 months of validity from the date of travel',
            'All previous original passports (if any)',
            'Copy of previous Indonesian visa (if any)',
            'Copy of NTN',
            'Copy of CNIC (front & back)',
            'Two passport size photographs with white background',
            'Confirmed return travel itinerary (travel date should not be within 14 days of visa submission)',
            'Confirmed hotel reservation',
            'Latest and original bank statement of last 6 months. Minimum balance should be PKR 500,000',
            'Original bank account maintenance letter',
            'Request on original letterhead of company of the applicant indicating the purpose of visit (with sign stamp)',
            'Original salary slip of last 3 months (signed & stamped)',
            'COVID-19 complete vaccination certificate/booster',
            'FRC/MRC required for all applicants',
            'Police character certificate for fresh passports and first time travelers'
        ],
        info: {
            Capital: 'Jakarta (JKT)',
            Language: 'Indonesian',
            Currency: 'Indonesian Rupiah (IDR)',
            Area: '1,904,569 km²',
            Population: '~ 274 Million',
            'Time Zone': 'UTC+7 to UTC+9',
            'Driving Side': 'Left',
            Religions: '87% Islam, 11% Christianity'
        },
        validity: '3 MONTHS',
        stay: '30 DAYS',
    },
    {
        flag: '/images/country-flags/saudia-arabia.png',
        name: 'Umrah Visa - KSA',
        visaType: 'E-Visa',
        badgeColor: 'bg-yellow-400',
        requirements: [
            'Passport first and second page',
            'CNIC (front & back)',
            'Passport size photograph with white background',
            'Family relation certificate (FRC) in case of family',
            'Form-B of each child in case of traveling with children'
        ],
        info: {
            Capital: 'Riyadh (RUH)',
            Language: 'Arabic',
            Currency: 'Saudi Riyal (SAR)',
            Area: '2,149,690 km²',
            Population: '~ 36.2 Million',
            'Time Zone': 'UTC+3',
            'Driving Side': 'Right',
            Religions: '93% Islam'
        },
        validity: '',
        stay: '',
    },
    {
        flag: '/images/country-flags/azerbaijan.png',
        name: 'Azerbaijan',
        visaType: 'E-Visa',
        badgeColor: 'bg-yellow-400',
        scanRequired: true,
        requirements: [
            {
                section: '',
                items: [
                    'Passport first page'
                ]
            }
        ],
        info: {
            Capital: 'Baku (BAK)',
            Language: 'Azerbaijani',
            Currency: 'Manat (AZN)',
            Area: '86,600 km²',
            Population: '~ 10.6 Million',
            'Time Zone': 'UTC+4',
            'Driving Side': 'Right',
            Religions: '96% Islam, 3% Christian'
        },
        validity: '3 MONTHS',
        stay: '30 DAYS',
    },
    {
        flag: '/images/country-flags/kenya.png',
        name: 'Kenya',
        visaType: 'E-Visa',
        badgeColor: 'bg-yellow-400',
        scanRequired: true,
        requirements: [
            {
                section: '',
                items: [
                    'Passport first and second page',
                    'CNIC (front & back)',
                    'Passport size photograph with white background',
                    'Return air ticket',
                    'Confirmed hotel reservation',
                    'An itinerary of places to visit in Kenya'
                ]
            }
        ],
        info: {
            Capital: 'Nairobi (NBO)',
            Language: 'Swahili, English',
            Currency: 'Kenyan Shilling (KES)',
            Area: '580,367 km²',
            Population: '~ 53.2 Million',
            'Time Zone': 'UTC+3',
            'Driving Side': 'Left',
            Religions: '85% Christian, 11% Islam'
        },
        validity: '3 MONTHS',
        stay: '30 DAYS',
    },
    {
        flag: '/images/country-flags/malaysia.png',
        name: 'Malaysia',
        visaType: 'Visit Visa',
        badgeColor: 'bg-blue-500',
        scanRequired: true,
        requirements: [
            {
                section: 'Required Documents for E-Visa',
                items: [
                    'Passport having minimum 7 months of validity from the date of travel',
                    'Copy of CNIC (front & back)',
                    'Bank statement of last 6 months with minimum balance PKR 400,000',
                    'One photo in white background with dark color shirt, scanned in high definition (HD)'
                ]
            },
            {
                section: 'Required Documents for Sticker Visa',
                items: [
                    'Original passport having minimum 7 months of validity from the date of travel',
                    'Copy of CNIC (front & back)',
                    'Bank statement of last 6 months',
                    'Two photographs in white background with dark color shirt'
                ]
            }
        ],
        info: {
            Capital: 'Kuala Lumpur (KUL)',
            Language: 'Malay',
            Currency: 'Malaysian Ringgit (MYR)',
            Area: '330,803 km²',
            Population: '~ 36 Million',
            'Time Zone': 'UTC+8',
            'Driving Side': 'Left',
            Religions: '64% Muslim, 19% Buddhism'
        },
        validity: '6 MONTHS',
        stay: '30 DAYS',
    },
    {
        flag: '/images/country-flags/qatar.png',
        name: 'Qatar',
        visaType: 'Visa on Arrival',
        badgeColor: 'bg-gray-700',
        requirements: [
            {
                section: 'Pakistani Nationals are eligible for visa-on-arrival facility if they fulfill following requirements',
                items: [
                    'Passport must be valid minimum 3 months from the date of arrival',
                    'Traveling on a confirmed return ticket',
                    'Polio vaccination card',
                    'A credit or debit card per family',
                    'Sufficient funds (foreign currency) to cover their stay',
                    'A paid hotel reservation for entire stay that must be booked ONLY at https://www.discoverqatar.qa',
                    'Maximum allowed stay is 30 days'
                ]
            }
        ],
        info: {
            Capital: 'Doha (DOH)',
            Language: 'Arabic',
            Currency: 'Qatari Riyal (QAR)',
            Area: '11,581 km²',
            Population: '~ 2.8 Million',
            'Time Zone': 'UTC+3',
            'Driving Side': 'Right',
            Religions: '62% Muslim, 14% Christians'
        },
        validity: '',
        stay: '30 DAYS',
    },
    {
        flag: '/images/country-flags/singapore.png',
        name: 'Singapore',
        visaType: 'E-Visa',
        badgeColor: 'bg-yellow-400',
        scanRequired: true,
        requirements: [
            {
                section: 'Required Documents',
                items: [
                    'Passport first and second page',
                    'Passport validity must be minimum 7 months from the date of travel',
                    'CNIC Copy (front & back)',
                    'NTN Copy',
                    '6 Months bank statement with minimum balance 400,000 (stamped from bank)',
                    'Visa request on letterhead',
                    'Visiting card (if any)',
                    'Passport size photograph white background dark shirt without glasses',
                    'Actual phone number and email of passenger'
                ]
            }
        ],
        info: {
            Capital: 'Singapore (SIN)',
            Language: 'Malay, English',
            Currency: 'Singapore Dollar (SGD)',
            Area: '734.3 km²',
            Population: '~ 6.1 Million',
            'Time Zone': 'UTC+8',
            'Driving Side': 'Left',
            Religions: '31% Buddhism, 19% Christian'
        },
        validity: '2 MONTHS',
        stay: '30 DAYS',
    },
    {
        flag: '/images/country-flags/sri-lanka.png',
        name: 'Sri Lanka',
        visaType: 'E-Visa',
        badgeColor: 'bg-yellow-400',
        scanRequired: true,
        requirements: [
            {
                section: 'Required Documents',
                items: [
                    'Passport first and second page',
                    'Photograph with white background and dark shirt (no eye-glasses)'
                ]
            }
        ],
        info: {
            Capital: 'Colombo (CMB)',
            Language: 'Sinhala, Tamil, English',
            Currency: 'Sri Lankan Rupee (LKR)',
            Area: '65,610 km²',
            Population: '~ 22.7 Million',
            'Time Zone': 'UTC+5:30',
            'Driving Side': 'Left',
            Religions: '71% Buddhism, 13% Hinduism'
        },
        validity: '',
        stay: '30 DAYS',
    },
    {
        flag: '/images/country-flags/united-arab-emirates.png',
        name: 'United Arab Emirates',
        visaType: 'E-Visa',
        badgeColor: 'bg-yellow-400',
        scanRequired: true,
        requirements: [
            {
                section: 'Required Documents',
                items: [
                    'Passport first and second page',
                    'CNIC (front & back)',
                    'Passport size photograph with white background'
                ]
            }
        ],
        info: {
            Capital: 'Abu Dhabi (AUH)',
            Language: 'Arabic',
            Currency: 'UAE Dirham (AED)',
            Area: '83,600 km²',
            Population: '~ 9.7 Million',
            'Time Zone': 'UTC+4',
            'Driving Side': 'Right',
            Religions: '76% Islam, 9% Christian'
        },
        validity: '',
        stay: '',
    },
    {
        flag: '/images/country-flags/vietnam.png',
        name: 'Vietnam',
        visaType: 'E-Visa',
        badgeColor: 'bg-yellow-400',
        scanRequired: true,
        requirements: [
            {
                section: 'Required Documents',
                items: [
                    'Passport first and second page',
                    'CNIC (front & back)',
                    'Passport size photograph with white background',
                    'Letter head If Employe Company Employment Letter'
                ]
            }
        ],
        info: {
            Capital: 'Hanoi (HAN)',
            Language: 'Vietnamese',
            Currency: 'Vietnamese Dong (VND)',
            Area: '331,212 km²',
            Population: '~ 100.7 Million',
            'Time Zone': 'UTC+7',
            'Driving Side': 'Right',
            Religions: '74% No-religion, 15% Buddhism'
        },
        validity: '',
        stay: '',
    },
    {
        flag: '/images/country-flags/cambodia.png',
        name: 'Cambodia',
        visaType: 'E-Visa',
        badgeColor: 'bg-yellow-400',
        scanRequired: true,
        requirements: [
            {
                section: 'Required Documents',
                items: [
                    'Passport first and second page. Must be valid minimum 7 months',
                    'CNIC (front & back)',
                    'Passport size photograph with white background',
                    'Three month bank statement with closing balance 3 to 4 lacs'
                ]
            }
        ],
        info: {
            Capital: 'Phnom Penh (PNH)',
            Language: 'Khmer (Cambodian)',
            Currency: 'Cambodian Riel (KHR)',
            Area: '181,035 km²',
            Population: '~ 17.2 Million',
            'Time Zone': 'UTC+7',
            'Driving Side': 'Right',
            Religions: '97% Buddhism'
        },
        validity: '3 MONTHS',
        stay: '30 DAYS',
    },
]

export default function Visas() {
    return (
        <div id="visa">
            <section id="hero">
                <div className="visa absolute z-[1] min-h-screen w-full flex justify-center items-center flex-col">
                <h1 className="text-3xl md:text-4xl font-semibold mx-auto md:w-1/2 text-center leading-10 mt-36 md:mt-12">Get Your Visa</h1>
                <p className="text-base mx-auto md:w-1/2 text-center mb-6 mt-2">Avail The Opportunity to Make Your Travel History</p>
                </div>
                <div className="bg-custom-gradient min-h-screen relative w-full"></div>
            </section>
            <section id="visas" className="pt-20 pb-10 px-2 md:px-10 bg-[#f4f8fb]">
                <p className="text-primary text-2xl font-bold text-center mb-10 tracking-wide">VISAS</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-8 w-full max-w-5xl mx-auto">
                    {countryVisas.map((country, index) => (
                        <AlertDialog key={index}>
                            <AlertDialogTrigger asChild>
                                <div
                                    className={
                                        `p-5 bg-white border border-blue-200 rounded-2xl shadow-md flex flex-col items-center gap-3 transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer opacity-0 animate-fadeIn`}
                                    style={{ animationDelay: `${index * 60}ms`, animationFillMode: 'forwards' }}
                                >
                                    <Image
                                        src={country.flag}
                                        alt={country.name}
                                        width={60}
                                        height={60}
                                        className="rounded-full border border-blue-100 shadow-sm"
                                    />
                                    <p className="text-lg font-semibold text-blue-900 text-center mt-2">{country.name}</p>
                                </div>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="rounded-2xl shadow-2xl p-0 max-w-3xl w-full">
                                <div className="flex flex-col md:flex-row max-h-[80vh] overflow-y-auto">
                                    {/* Left: Requirements */}
                                    <div className="flex-1 p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`text-white px-3 py-1 rounded font-bold text-xs ${country.badgeColor}`}>{country.visaType}</span>
                                            <span className="text-2xl font-bold text-blue-900">{country.name}</span>
                                        </div>
                                        <h3 className="text-red-500 font-semibold text-lg mb-3">Required Documents</h3>
                                        <ol className="list-decimal pl-5 text-gray-800 text-base leading-relaxed">
                                            {Array.isArray(country.requirements) && country.requirements.length > 0 && typeof country.requirements[0] === 'string'
                                                ? country.requirements.map((req, i) => (
                                                    <li key={i} className="mb-2">{req}</li>
                                                ))
                                                : country.requirements.map((sectionObj, i) => (
                                                    <React.Fragment key={i}>
                                                        {sectionObj.section && (
                                                            <p className="mb-1 font-semibold text-black list-none">{sectionObj.section}</p>
                                                        )}
                                                        {sectionObj.items.map((item, j) => (
                                                            <li key={j} className="mb-2">{item}</li>
                                                        ))}
                                                    </React.Fragment>
                                                ))
                                            }
                                        </ol>
                                    </div>
                                    {/* Right: Info box */}
                                    <div className="flex-1 bg-gray-50 border-l border-gray-200 p-6 flex flex-col items-center justify-between min-w-[260px]">
                                        <div className="w-full">
                                            <div className="flex justify-center mb-4">
                                                <Image src={country.flag} alt={country.name} width={80} height={60} className="rounded shadow" />
                                            </div>
                                            {country.info && (
                                                <table className="w-full text-sm mb-4">
                                                    <tbody>
                                                        {Object.entries(country.info).map(([key, value]) => (
                                                            <tr key={key}>
                                                                <td className="font-semibold pr-2 py-1 text-gray-700">{key}</td>
                                                                <td className="text-gray-600 py-1">{value}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            )}
                                        </div>
                                        {(country.validity || country.stay) && (
                                            <div className="flex gap-2 mt-4 w-full justify-center">
                                                {country.validity && <span className="bg-green-200 text-green-900 font-bold px-3 py-1 rounded text-xs">VALIDITY {country.validity}</span>}
                                                {country.stay && <span className="bg-yellow-200 text-yellow-900 font-bold px-3 py-1 rounded text-xs">STAY {country.stay}</span>}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <AlertDialogCancel className="absolute top-3 right-3 rounded-full p-2 hover:bg-gray-100 transition-colors">
                                    <RxCross2 className="text-2xl text-gray-500" />
                                </AlertDialogCancel>
                            </AlertDialogContent>
                        </AlertDialog>
                    ))}
                </div>
                {/* Visa Consultation Form */}
                <VisaConsultationForm countryVisas={countryVisas} />
                <style jsx global>{`
                    @keyframes fadeIn {
                        to { opacity: 1; transform: none; }
                        from { opacity: 0; transform: translateY(30px); }
                    }
                    .animate-fadeIn {
                        animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1) forwards;
                    }
                `}</style>
            </section>
        </div>
    )
}

function VisaConsultationForm({ countryVisas }) {
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
            visa: form.visa.value,
            message: form.message.value
        };
        try {
            const res = await fetch("/api/email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            if (res.ok) {
                setSuccess("Thank you for your query! We will contact you soon.");
                form.reset();
            } else {
                setError(result.error || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div
            className="max-w-lg mx-auto mt-12 rounded-2xl shadow-md p-0 border border-blue-200 relative overflow-hidden"
            style={{
                backgroundImage: 'url(/images/Rectangle.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '480px'
            }}
        >
            <div className="inset-0 bg-white bg-opacity-50 z-0"></div>
            <div className="relative z-10 p-8">
                <h2 className="text-xl font-bold text-blue-900 mb-4 text-center">Visa Consultation Form</h2>
                <form id="visa-consult-form" className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <label className="font-semibold text-gray-700">Name<span className="text-red-500">*</span>
                        <input name="name" type="text" required className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
                    </label>
                    <label className="font-semibold text-gray-700">Email<span className="text-red-500">*</span>
                        <input name="email" type="email" required className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
                    </label>
                    <label className="font-semibold text-gray-700">Phone<span className="text-red-500">*</span>
                        <input name="phone" type="tel" required className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
                    </label>
                    <label className="font-semibold text-gray-700">Visa Type<span className="text-red-500">*</span>
                        <select name="visa" required className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200">
                            <option value="" disabled>Select a visa</option>
                            {countryVisas.map((visa, idx) => (
                                <option key={idx} value={visa.name}>{visa.name}</option>
                            ))}
                        </select>
                    </label>
                    <label className="font-semibold text-gray-700">Message
                        <textarea name="message" rows={3} className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Your query (optional)" />
                    </label>
                    <button type="submit" className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors disabled:opacity-60" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                    {success && <p className="text-green-600 text-center mt-2">{success}</p>}
                    {error && <p className="text-red-600 text-center mt-2">{error}</p>}
                </form>
            </div>
        </div>
    );
}