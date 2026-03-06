"use client";
import { useState } from "react";
import { Building2, Copy, Check, Info, AlertTriangle, LandPlot } from "lucide-react";
import toast from "react-hot-toast";
import Image from "next/image";

const bankDetails = [
    {
        logo: "/images/ubl.png",
        bankName: "United Bank Limited (UBL)",
        logoColor: "#0083ca",
        accentColor: "#0083ca",
        accountTitle: "BEST FARES TRAVEL & TOURS PVT LTD",
        accountNumber: "7856334326191",
        iban: "PK02UNIL0109000334326191",
        label: "Official Bank Partner"
    },
    {
        logo: "/images/meezan-bank-logo.png",
        bankName: "Meezan Bank",
        logoColor: "#5F2585",
        accentColor: "#5F2585",
        accountTitle: "BEST FARES TRAVEL & TOURS PVT LTD",
        accountNumber: "0290 0111116707",
        iban: "PK47MEZN0002900111116707",
        label: "Islamic Banking Partner"
    }
];

export default function BankInfoSection() {
    const [copiedStates, setCopiedStates] = useState({});

    const copyToClipboard = (text, key) => {
        navigator.clipboard.writeText(text);
        setCopiedStates(prev => ({ ...prev, [key]: true }));
        toast.success("Copied to clipboard!", {
            id: 'copy-toast',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });
        setTimeout(() => {
            setCopiedStates(prev => ({ ...prev, [key]: false }));
        }, 2000);
    };

    return (
        <section id="bank-info" className="py-20 px-4 md:px-10 bg-gradient-to-b from-white to-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-2">Secure Transactions</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 font-primary leading-tight">
                        Our Official <span className="text-primary">Bank Information</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        For your security and transparency, please use these official bank accounts for all online transactions. Always verify the account title before sending.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {bankDetails.map((bank, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl overflow-hidden shadow-2xl border-t-8 border-[${bank.accentColor}] bg-[${bank.accentColor}] transition-all duration-300 hover:scale-[1.02] group`}
                        >
                            {/* Glassmorphism accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl transition-all group-hover:bg-primary/10"></div>

                            <div className="p-8 md:p-10 relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="flex items-center gap-4">
                                        {/* <div className={`${bank.logoColor} p-4 rounded-2xl text-white shadow-lg`}> */}
                                        <Image src={bank.logo} alt={bank.bankName} width={64} height={64} />
                                        {/* </div> */}
                                        <div>
                                            <h3 className={`text-2xl font-black text-white`}>{bank.bankName}</h3>
                                            <span className="text-xs font-bold text-white uppercase tracking-widest">{bank.label}</span>
                                        </div>
                                    </div>
                                    <div className="bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border border-green-100">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                        Verified
                                    </div>
                                </div>

                                <div className="space-y-6 flex-grow">
                                    {/* Account Title */}
                                    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 transition-all hover:bg-gray-100/50">
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">Account Title</p>
                                        <p className="text-lg font-extrabold text-gray-800">{bank.accountTitle}</p>
                                    </div>

                                    {/* Account Number */}
                                    <div className="bg-white rounded-2xl p-5 border-2 border-dashed border-gray-200 hover:border-primary/50 transition-all group/info relative">
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">Account Number</p>
                                        <div className="flex justify-between items-center">
                                            <p className="text-2xl font-mono text-gray-800 tracking-wider break-all">{bank.accountNumber}</p>
                                            <button
                                                onClick={() => copyToClipboard(bank.accountNumber, `acc-${index}`)}
                                                className="p-3 bg-gray-50 hover:bg-primary hover:text-white rounded-xl transition-all shadow-sm active:scale-90"
                                                title="Copy Account Number"
                                            >
                                                {copiedStates[`acc-${index}`] ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* IBAN */}
                                    <div className="bg-white rounded-2xl p-5 border-2 border-dashed border-gray-200 hover:border-primary/50 transition-all group/info relative">
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">IBAN Number</p>
                                        <div className="flex justify-between items-center gap-2">
                                            <p className="text-base font-mono text-gray-600 break-all select-all">{bank.iban}</p>
                                            <button
                                                onClick={() => copyToClipboard(bank.iban, `iban-${index}`)}
                                                className="p-3 bg-gray-50 hover:bg-primary hover:text-white rounded-xl transition-all shadow-sm active:scale-90 flex-shrink-0"
                                                title="Copy IBAN"
                                            >
                                                {copiedStates[`iban-${index}`] ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100 italic text-gray-100 text-sm font-medium flex items-center justify-center gap-2">
                                    <Info size={14} />
                                    <span>Double check all details before transfer</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Important Notice Bar */}
                <div className="mt-16 bg-blue-900 text-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-90"></div>

                    <div className="relative z-10 flex items-center gap-6">
                        <div className="bg-white/10 p-5 rounded-full backdrop-blur-md animate-bounce ring-4 ring-white/10">
                            <AlertTriangle size={32} className="text-yellow-300" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black mb-1">Important Notice</h3>
                            <p className="text-blue-100 opacity-90 max-w-sm">Please only use these bank accounts for official transactions. BestFares will never ask you to transfer funds to any personal account.</p>
                        </div>
                    </div>

                    <div className="relative z-10 w-full md:w-auto flex flex-col items-center md:items-end">
                        <p className="text-blue-200 text-sm font-bold uppercase tracking-widest mb-2">Need Help?</p>
                        <a
                            href="tel:03-111-421-111"
                            className="bg-white text-primary px-8 py-4 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-3"
                        >
                            03-111-421-111
                        </a>
                    </div>

                    {/* Animated background shapes */}
                    <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mb-32 blur-3xl transition-all duration-1000 group-hover:scale-150"></div>
                </div>
            </div>
        </section>
    );
}
