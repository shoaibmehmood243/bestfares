import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <nav className="py-2 px-8 flex items-center justify-between z-100">
            <Link href='/' className="w-1/2">
                <Image src="/logo.png" alt="Logo" width={150} height={150} />
            </Link>
            <ul className="w-1/2 flex flex-row items-center gap-4 md:gap-8 justify-start">
                <li>
                    <Link href='/' className="font-bold text-blue-900 hover:underline underline-offset-4 transition-colors px-2 py-1">Home</Link>
                </li>
                <li>
                    <Link href='/visas' className="font-bold text-blue-900 hover:underline underline-offset-4 transition-colors px-2 py-1">Visas</Link>
                </li>
            </ul>
        </nav>
    )
}