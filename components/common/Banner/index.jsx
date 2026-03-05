import { FaWhatsappSquare } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";

export default function Banner() {
    return (
        <div className="flex py-2 px-4 md:px-8 border-b border-white/20 flex-col md:flex-row justify-start md:justify-between justify-start md:items-center gap-2 text-blue-900 overflow-hidden">
            <div className="flex items-center gap-2 text-[10px] md:text-sm font-medium animate-pulse">
                <IoWarning className="text-amber-500 text-xl md:text-2xl" />
                <p>Official Number: 03111-421-111 (Beware of calls from other numbers)</p>
            </div>

            <div className="flex md:flex-row items-center gap-4">
                <a
                    href="https://wa.me/923111421111?text=Hello%20BestFares,%20I'm%20looking%20for%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[10px] md:text-sm hover:text-primary transition-colors border-r border-blue-900/10 pr-4"
                >
                    <FaWhatsappSquare className="text-[#25D366] text-xl md:text-2xl" />
                    <span className="font-bold">03111-421-111</span>
                </a>

                <a
                    href="mailto:support@bestfaress.com"
                    className="flex items-center gap-1.5 text-[10px] md:text-sm hover:text-primary transition-colors"
                >
                    <BiLogoGmail className="text-[#C71610] text-xl md:text-2xl" />
                    <span className="font-bold inline">support@bestfaress.com</span>
                </a>
            </div>
        </div>
    );
}