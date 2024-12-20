import { Poppins } from 'next/font/google';
import "./globals.css";
import Header from "@/components/common/Header";
import Banner from "@/components/common/Banner";
import { FaPhoneAlt } from "react-icons/fa";
import Script from 'next/script';
import Footer from '@/components/common/Footer';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Best Fares",
  description: "Best Travel Agency in Lahore, offering the best fares for flights, tours, and travel packages.",
  keywords: ["Best Fares", "Travel Agency", "Flights", "Tours", "Lahore"],
  openGraph: {
    title: "Best Fares",
    description: "Best Travel Agency in Lahore, offering the best fares for flights, tours, and travel packages.",
    url: "https://bestfaress.com",
    siteName: "Best Fares",
    images: [
      {
        url: "https://www.bestfaress.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Best Fares Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fares",
    description: "Best Travel Agency in Lahore, offering the best fares for flights, tours, and travel packages.",
    images: ["https://www.bestfaress.com/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-EC8RKSRLDQ`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EC8RKSRLDQ');
        `}
      </Script>
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
        <Footer />
      </body>
    </html>
  );
}
