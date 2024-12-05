import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
    return (
        <footer id="footer" className="pt-10 bg-primary">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-10 pb-5">
                <Link href='/'>
                    <Image src="/logo-dark.png" alt="Logo" width={150} height={24} />
                </Link>
                <div className="px-2">
                    <h6 className="text-white text-lg font-medium mb-3">Contact Us</h6>
                    <ul>
                    <li className="text-white my-3 text-sm flex items-center gap-2">
                        <FaPhoneAlt className="text-xl" /> 03111-421-111
                    </li>
                    <li className="text-white my-3 text-sm flex items-center gap-2">
                        <IoMdMail className="text-xl" /> support@bestfaress.com
                    </li>
                    <li className="text-white my-3 text-sm flex items-start gap-2">
                        <FaLocationDot className="text-xl" /> Office No 03, First Floor, Al Latif Centre Main Boulevard Gulberg III Lahore.
                    </li>
                    </ul>
                </div>
                <div className="px-2">
                    <h6 className="text-white text-lg font-medium mb-3">Social Links</h6>
                    <ul className="flex gap-3 items-center">
                    <li className="text-white my-3 text-sm flex items-center gap-2">
                        <a href="https://www.facebook.com/profile.php?id=61568623533722" target="_blank">
                        <FaFacebook className="text-xl" />
                        </a>
                    </li>
                    <li className="text-white my-3 text-sm flex items-center gap-2">
                        <a href="https://www.instagram.com/bestfares786/" target="_blank">
                        <FaInstagram className="text-xl" />
                        </a>
                    </li>
                    <li className="text-white my-3 text-sm flex items-center gap-2">
                        <FaTwitter className="text-xl" />
                    </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-300 py-5">
                <p className="text-gray-300 text-center">© 2024 Best Fares. All rights reserved</p>
            </div>
        </footer>
    )
}