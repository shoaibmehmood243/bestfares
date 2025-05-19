import Image from "next/image";

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

export default function PopularAirlines() {
    return (
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
    )
}