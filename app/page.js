import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaHotel, FaLocationDot } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { IoIosGlobe, IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const popularAirlines = [
  { src: '/images/etihad.png', alt: 'Etihad' },
  { src: '/images/emirates.png', alt: 'Emirates' },
  { src: '/images/kuwait.png', alt: 'Kuwait' },
  { src: '/images/qatar.png', alt: 'Qatar' },
  { src: '/images/turkish.png', alt: 'Turkish' },
  { src: '/images/flydubai.png', alt: 'Fly Dubai' },
  { src: '/images/pia.png', alt: 'PIA' },
  { src: '/images/Airsial.png', alt: 'Airsial' },
  { src: '/images/thai.png', alt: 'Thai' },
  { src: '/images/al-saudia.png', alt: 'Al Saudia' },
  { src: '/images/air-arabia.png', alt: 'Air Arabia' },
  { src: '/images/british-airways.png', alt: 'British Airways' },
  { src: '/images/china-southern.png', alt: 'China Southern' },
  { src: '/images/air-malindo.png', alt: 'Air Malindo' },
  { src: '/images/oman.png', alt: 'Oman' },
  { src: '/images/virginatlantic.png', alt: 'Virgin Atlantic' },
];

export default function Home() {
  return (
    <div id="home">
      <section id="hero">
        <div className="home absolute z-[1] min-h-screen w-full flex justify-center items-center flex-col">
          <h1 className="text-3xl md:text-4xl font-semibold mx-auto md:w-1/2 text-center leading-10 mt-36 md:mt-12">Discover the world's best travel deals with BestFares.</h1>
          <p className="text-base mx-auto md:w-1/2 text-center mb-6 mt-2">Your adventure, Our expertise</p>
          <Button variant="default">Contact Us</Button>
        </div>
        <div className="bg-custom-gradient min-h-screen relative w-full"></div>
      </section>
      <section id="services" className="pt-20 pb-10 px-5 md:px-10">
        <p className="text-primary text-xl font-semibold text-center mb-8">Our Services</p>
        <div className="w-1/2 mx-auto flex justify-center items-center gap-6 md:gap-12">
          <div className="flex flex-col items-center">
            <div className="bg-white border-2 border-primary rounded-md p-3">
              <GiCommercialAirplane className="text-primary text-2xl" />
            </div>
            <p className="mt-2 text-center">FLIGHT</p>
          </div>
          <div>
            <div className="bg-white border-2 border-primary rounded-md p-3">
              <FaHotel className="text-primary text-2xl" />
            </div>
            <p className="mt-2 text-center">HOTEL</p>
          </div>
          <div>
            <div className="bg-white border-2 border-primary rounded-md p-3">
              <MdFamilyRestroom className="text-primary text-2xl" />
            </div>
            <p className="mt-2 text-center">TOURS</p>
          </div>
          <div>
            <div className="bg-white border-2 border-primary rounded-md p-3">
              <IoIosGlobe className="text-primary text-2xl" />
            </div>
            <p className="mt-2 text-center">VISA</p>
          </div>
        </div>
      </section>
      <section id="about" className="pb-20 pt-10 px-5 md:px-10">
        <div className="mx-auto md:w-1/2">
          <p className="text-primary text-center mb-2">About BestFares</p>
          <h2 className="text-3xl md:w-2/3 mx-auto font-semibold text-center mb-4 leading-10">Experience the World With Best Fares</h2>
          <p className="text-base text-center leading-7 text-gray-500">
            BestFares is a travel agency specializing in providing the best deals on flights, hotels, and activities. We strive to help our clients find the perfect trip, while also providing a peace of mind by offering transparent pricing and 24/7 customer support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-5 mt-6">
          <div className="flex flex-col justify-evenly h-full">
            <div>
              <Image src='/images/icon-about-1.png.png' alt="Icon About-1" width={30} height={30} />
              <h6 className="font-semibold text-lg mt-3">Luxury Trip</h6>
              <p className="text-gray-500">Our algorithm connects you with like-
              minded partners using your interests.</p>
            </div>
            <div>
              <Image src='/images/icon-about-2.png.png' alt="Icon About-2" width={30} height={30} />
              <h6 className="font-semibold text-lg mt-3">Affordable Budget</h6>
              <p className="text-gray-500">Your safety is a priority. We ensure strict
              security for your information.</p>
            </div>
          </div>
          <div className="col-span-2 h-full flex justify-center items-center">
            <Image 
              src='/images/about-img-3.png.png' 
              alt="About" 
              width={200}
              height={200}
              className="object-contain w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-evenly h-full">
            <div>
              <Image src='/images/icon-about-3.png.png' alt="Icon About-3" width={30} height={30} />
              <h6 className="font-semibold text-lg mt-3">Personalized approach</h6>
              <p className="text-gray-500">Effortlessly navigate and find your perfect
              match with our user-friendly interface.</p>
            </div>
            <div>
              <Image src='/images/icon-about-4.png.png' alt="Icon About-4" width={30} height={30} />
              <h6 className="font-semibold text-lg mt-3">Experienced Guide</h6>
              <p className="text-gray-500">Our team is available 24/7 to assist you
              with any queries or concern.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="popular-destinations" className="pb-20 pt-10 px-5 md:px-10">
        <div className="mx-auto md:w-1/2">
          <p className="text-primary text-center mb-2">Popular Destinations</p>
          <h2 className="text-3xl md:w-2/3 mx-auto font-semibold text-center mb-4 leading-10">Search best places in the world</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5 mt-10">
          <div className="h-full flex justify-center items-center">
            <Image 
              src='/images/destination-1.jpg' 
              alt="Paris" 
              width={200}
              height={200}
              className="object-cover w-full h-auto min-h-[250px] md:min-h-[350px] rounded-full max-h-[300px]"
            />
          </div>
          <div className="h-full flex justify-center items-center">
            <Image 
              src='/images/destination-2.jpg' 
              alt="London" 
              width={200}
              height={200}
              className="object-cover w-full h-auto min-h-[250px] md:min-h-[350px] rounded-full max-h-[300px]"
            />
          </div>
          <div className="h-full flex justify-center items-center">
            <Image 
              src='/images/destination-3.jpg' 
              alt="New York" 
              width={200}
              height={200}
              className="object-cover w-full h-auto min-h-[250px] md:min-h-[350px] rounded-full max-h-[300px]"
            />
          </div>
          <div className="h-full flex justify-center items-center">
            <Image 
              src='/images/destination-4.jpg' 
              alt="Dubai" 
              width={200}
              height={200}
              className="object-cover w-full h-auto min-h-[250px] md:min-h-[350px] rounded-full max-h-[300px]"
            />
          </div>
          <div className="h-full flex justify-center items-center">
            <Image 
              src='/images/destination-5.jpg' 
              alt="Sydney" 
              width={200}
              height={200}
              className="object-cover w-full h-auto min-h-[250px] md:min-h-[350px] rounded-full max-h-[300px]"
            />
          </div>
        </div>
      </section>
      <section id="popular-airlines" className="pb-20 pt-10 px-5 md:px-10">
        <p className="text-primary text-xl font-semibold text-center mb-10">Popular Airlines</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
          {popularAirlines.map((image, index) => (
            <div key={index} className="relative w-full h-10 overflow-hidden rounded-lg mb-5">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out relative transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
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
                <FaFacebook className="text-xl" />
              </li>
              <li className="text-white my-3 text-sm flex items-center gap-2">
                <FaInstagram className="text-xl" />
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
    </div>
  );
}
