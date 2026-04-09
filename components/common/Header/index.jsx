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
        { href: "/blog", label: "Blog" },
    ];

    // Close menu when clicking outside or on a link
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="relative z-[100] transition-all duration-300 bg-[#2F3192]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between py-2">
                    {/* Logo Section - Enhanced Visibility */}
                    <Link href='/' className="relative z-[110] group flex items-center">
                        <div className="rounded-xl">
                            <Image
                                src="/logo-dark.png"
                                alt="Best Fares Travel Logo"
                                width={120}
                                height={60}
                                className="w-44 h-12 md:h-16 object-contain"
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
                                    className="font-bold text-white hover:text-blue-300 transition-all px-3 py-2 text-sm xl:text-base relative group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden relative z-[110] p-2 text-white bg-white/50 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-colors border border-white/20 shadow-sm"
                        onClick={toggleMenu}
                        aria-label="Toggle Navigation"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay - Enhanced Layout */}
            <div className={`lg:hidden fixed inset-0 z-[105] bg-blue-950/98 backdrop-blur-2xl transition-all duration-500 overflow-hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center min-h-[100dvh] pt-24 pb-12 gap-8 px-6">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-3xl font-bold text-white transition-all hover:text-cyan-400 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                            style={{
                                transitionDelay: `${idx * 75}ms`,
                                transitionProperty: 'all',
                                transitionDuration: '400ms'
                            }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div className="mt-8 flex flex-col items-center gap-6 w-full max-w-sm">
                        <div className="h-px w-24 bg-white/20"></div>
                        <a
                            href="https://wa.me/923111421111"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#25D366] text-white py-5 rounded-3xl font-bold flex justify-center items-center gap-3 shadow-xl transform active:scale-95 transition-all text-lg"
                        >
                            Chat on WhatsApp
                        </a>

                        <div className="text-white/60 text-sm flex flex-col items-center gap-1 mt-4">
                            <p>Need immediate help?</p>
                            <a href="tel:03111421111" className="text-white font-bold text-lg">03111-421-111</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}