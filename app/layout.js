import { Poppins } from 'next/font/google';
import "./globals.css";
import Header from "@/components/common/Header";
import Banner from "@/components/common/Banner";
import { FaPhoneAlt } from "react-icons/fa";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Best Fares",
  description: "Best Travel Agency in Lahore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.className + ` antialiased`}
      >
        <div className='fixed bottom-4 right-4 z-10'>
          <a href='tel:+923111421111' className='flex justify-center items-center rounded-full bg-primary w-14 h-14 shadow-lg hover:scale-110 transition-transform duration-2000 animate-pulse hover:animate-bounce'>
            <FaPhoneAlt className='text-white text-2xl' />
          </a>
        </div>
        <div className="z-10 w-full fixed backdrop-blur-sm bg-[hsla(0,0%,100%,.25)]">
          <Banner />
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
