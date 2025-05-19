import Image from "next/image";

const destinations = [
    { src: '/images/destination-1.jpg', alt: 'Paris' },
    { src: '/images/destination-2.jpg', alt: 'London' },
    { src: '/images/destination-3.jpg', alt: 'New York' },
    { src: '/images/destination-4.jpg', alt: 'Dubai' },
    { src: '/images/destination-5.jpg', alt: 'Sydney' },
]

export default function PopularDestinations() {
    return (
        <section id="popular-destinations" className="pb-20 pt-10 px-5 md:px-10">
            <div className="mx-auto md:w-1/2">
                <p className="text-primary text-center mb-2">Popular Destinations</p>
                <h2 className="text-3xl md:w-2/3 mx-auto font-semibold text-center mb-4 leading-10">Search best places in the world</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5 mt-10">
                {destinations.map(({ src, alt }) => (
                    <div key={alt} className="h-full flex justify-center items-center">
                        <Image
                            src={src}
                            alt={alt}
                            width={200}
                            height={200}
                            className="object-cover w-full h-auto min-h-[250px] md:min-h-[350px] rounded-full max-h-[300px]"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}