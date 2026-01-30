import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
    return (
        <footer id="footer" className="pt-10 bg-primary">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-10 pb-5">
                <div>
                    <Link href='/'>
                        <Image src="/logo-dark.png" alt="Logo" width={150} height={24} />
                    </Link>
                    <p className="text-white text-sm">BestFares is a travel agency offering great deals on flights, hotels, visas and tours. We make trip planning easy with transparent pricing and 24/7 customer support.</p>
                </div>
                <div className="px-2">
                    <h6 className="text-white text-lg font-bold mb-3">Contact Us</h6>
                    <ul>
                        <li className="text-white my-3 text-sm flex items-center gap-2">
                            <FaPhoneAlt className="text-xl" /> 03111-421-111
                        </li>
                        <li className="text-white my-3 text-sm flex items-center gap-2">
                            <IoMdMail className="text-xl" /> support@bestfares.com.pk
                        </li>
                        <li className="text-white my-3 text-sm flex items-start gap-2">
                            <FaLocationDot className="text-xl" /> Office No 03, First Floor, Al Latif Centre Main Boulevard Gulberg III Lahore.
                        </li>
                    </ul>
                </div>
                <div className="px-2">
                    <h6 className="text-white text-lg font-bold mb-3">Social Links</h6>
                    <ul className="flex gap-3 items-center">
                        <li className="text-white my-3 text-sm flex items-center gap-2">
                            <a href="https://www.facebook.com/profile.php?id=61568623533722" target="_blank" className="bg-white/10 hover:bg-primary p-3 rounded-full transition-all duration-300 hover:scale-110">
                                <FaFacebook className="text-xl" />
                            </a>
                        </li>
                        <li className="text-white my-3 text-sm flex items-center gap-2">
                            <a href="https://www.instagram.com/bestfares786/" target="_blank" className="bg-white/10 hover:bg-primary p-3 rounded-full transition-all duration-300 hover:scale-110">
                                <FaInstagram className="text-xl" />
                            </a>
                        </li>
                        <li className="text-white my-3 text-sm flex items-center gap-2">
                            <a href="https://twitter.com/bestfares786" target="_blank" className="bg-white/10 hover:bg-primary p-3 rounded-full transition-all duration-300 hover:scale-110">
                                <FaTwitter className="text-xl" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="px-2">
                    <h6 className="text-white text-lg font-bold mb-3">Direction</h6>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.275615488584!2d74.34214957509434!3d31.51658924732983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e10cde5bf32e143%3A0xb99cc7e77ec439f2!2sBest%20Fares%20Travel%20and%20Tours!5e0!3m2!1sen!2s!4v1747655026369!5m2!1sen!2s" width="250" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="border-t border-gray-300 py-5">
                <p className="text-gray-300 text-center">© 2024 Best Fares. All rights reserved</p>
            </div>
        </footer>
    )
}