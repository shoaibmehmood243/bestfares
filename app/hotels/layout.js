export const metadata = {
    title: "Hotel Booking & Luxury Accommodations - Best Fares",
    description: "Find the best deals on hotels and luxury resorts worldwide. Hand-picked accommodations at the lowest rates for your next family vacation or business trip.",
    keywords: ["hotel booking", "luxury resorts", "cheap hotels", "hotel deals", "accommodation"],
    openGraph: {
        title: "Book Hotels at Lowest Rates - Best Fares",
        description: "Compare and book the best hotels with exclusive discounts and amenities.",
        images: ["/images/hotels.png"],
    },
};

export default function HotelsLayout({ children }) {
    return <>{children}</>;
}
