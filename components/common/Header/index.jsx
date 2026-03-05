"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/flights", label: "Flights" },
        { href: "/hotels", label: "Hotels" },
        { href: "/umrah", label: "Umrah" },
        { href: "/tours", label: "Tours" },
        { href: "/visas", label: "Visas" },
    ];

    // Close menu when clicking outside or on a link
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="relative z-[100] transition-all duration-300">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between py-2">
                    {/* Logo Section - Enhanced Visibility */}
                    <Link href='/' className="relative z-[110] group flex items-center">
                        <div className="rounded-xl transition-all duration-300 group-hover:scale-105">
                            <Image
                                src="/logo.png"
                                alt="Best Fares Travel Logo"
                                width={120}
                                height={60}
                                className="w-auto h-8 md:h-14 object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center gap-2 xl:gap-6">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="font-bold text-blue-900 hover:text-primary transition-all px-3 py-2 text-sm xl:text-base relative group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden relative z-[110] p-2 text-blue-900 bg-white/50 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-colors border border-white/20 shadow-sm"
                        onClick={toggleMenu}
                        aria-label="Toggle Navigation"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={`lg:hidden fixed inset-0 z-[105] bg-blue-950/95 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center gap-6 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-x-full'}`}>
                {navLinks.map((link, idx) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`text-2xl font-bold text-white transition-all hover:text-cyan-400 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{ transitionDelay: `${idx * 100}ms` }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link.label}
                    </Link>
                ))}

                <div className="mt-4 flex flex-col items-center gap-4 px-4 w-full">
                    <a
                        href="https://wa.me/923111421111"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full max-w-[280px] bg-[#25D366] text-white py-4 rounded-2xl font-bold flex justify-center items-center gap-3 shadow-lg transform active:scale-95 transition-all"
                    >
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </nav>
    );
}