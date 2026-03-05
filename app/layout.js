import { Quicksand } from 'next/font/google';
import "./globals.css";
import Header from "@/components/common/Header";
import Banner from "@/components/common/Banner";
import { FaWhatsapp } from "react-icons/fa";
import Script from 'next/script';
import Footer from '@/components/common/Footer/index';
import { Toaster } from 'react-hot-toast';
import Image from 'next/image';

const quicksand = Quicksand({
  variable: '--font-quicksand',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL("https://bestfaress.com"),
  title: {
    default: "Best Fares - Premier Travel Agency in Lahore",
    template: "%s | Best Fares"
  },
  description: "Best Fares is your trusted travel partner in Lahore, offering unbeatable prices for flights, hotels, Umrah packages, and tour planning. Your adventure, our expertise.",
  keywords: ["Best Fares", "Travel Agency Lahore", "Cheap Flights Pakistan", "Umrah Packages 2026", "Tours from Pakistan", "Airlines Tickets", "Hotel Booking"],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Best Fares - Best Travel Agency in Lahore",
    description: "Book cheap flights, hotels, and Umrah packages with Best Fares. Transparent pricing and 24/7 support for all your travel needs.",
    url: "https://bestfaress.com",
    siteName: "Best Fares",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Best Fares Travel Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fares - Your Adventure, Our Expertise",
    description: "Discover the world with the best travel deals on flights and tours with Best Fares.",
    images: ["/logo.png"],
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
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '505626962530709');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <Image
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=505626962530709&ev=PageView&noscript=1"
          alt="Facebook Pixel"
        />
      </noscript>
      <body
        className={`${quicksand.variable} font-quicksand antialiased`}
      >
        <div className='fixed bottom-4 right-4 z-10'>
          <a
            href="https://wa.me/923111421111?text=Hello%20BestFares,%20I'm%20looking%20for%20"
            target="_blank"
            rel="noopener noreferrer"
            className='flex justify-center items-center rounded-full bg-[#25D366] w-14 h-14 shadow-lg hover:scale-110 transition-transform duration-2000 animate-pulse hover:animate-bounce'
          >
            <FaWhatsapp className='text-white text-3xl' />
          </a>
        </div>
        <div className="z-[100] w-full fixed top-0 backdrop-blur-md bg-white/60 border-b border-white/20 shadow-sm">
          <Banner />
          <Header />
        </div>
        <Toaster position="top-center" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
