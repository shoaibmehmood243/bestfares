import { FaWhatsappSquare } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";

export default function Banner() {
    return (
        <div className="py-2 px-2 md:px-8 flex justify-normal items-start md:items-center gap-2 md:gap-0 border-b border-gray-300 flex-col md:flex-row">
            <p className="flex gap-1 items-center text-xs md:text-base md:w-1/2"><IoWarning className="text-yellow-300 text-2xl" /> We only call from one number: 03111-421-111</p>
            <div className="flex items-center gap-3 md:w-1/2">
                <p className="flex gap-1 items-center text-xs md:text-base border-0 md:border-l border-gray-300 md:pl-2"><FaWhatsappSquare className="text-[#25D366] text-2xl" /> 03111-421-111</p>
                <p className="flex gap-1 items-center text-xs md:text-base border-l border-gray-300 pl-2"><BiLogoGmail className="text-[#C71610] text-2xl" /> support@bestfaress.com</p>
            </div>
        </div>
    )
}