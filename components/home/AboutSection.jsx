import Image from "next/image";

export default function AboutSection() {
    return (
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
    )
}