import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import PopularDestinations from "@/components/home/PopularDestinations";
import PopularAirlines from "@/components/home/PopularAirlines";

export default function Home() {
  return (
    <div id="home">
      <HeroSection />
      <section id="services" className="mt-20 pb-10 px-5 md:px-10">
        <h2 className="text-primary text-3xl font-semibold text-center mb-8">Our Services</h2>
        <ServicesSection />
      </section>
      <AboutSection />
      <PopularDestinations />
      <PopularAirlines />
    </div>
  );
}
