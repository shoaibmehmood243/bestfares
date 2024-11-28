import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <nav className="py-2 px-8 flex items-center justify-between">
            <Link href='/' className="w-1/2">
                <Image src="/logo.png" alt="Logo" width={150} height={24} />
            </Link>
            {/* <ul className="w-1/2 flex items-center">
                <li>
                    <Link href='/contact'>Contact Us</Link>
                </li>
            </ul> */}
        </nav>
    )
}