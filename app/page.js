import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import PopularDestinations from "@/components/home/PopularDestinations";
import PopularAirlines from "@/components/home/PopularAirlines";
// import TestimonialsSection from "@/components/home/TestimonialsSection";
import CallToAction from "@/components/home/CallToAction";
import ScrollToTop from "@/components/common/ScrollToTop";

export default function Home() {
  return (
    <div id="home" className="scroll-smooth">
      <HeroSection />
      <section id="services" className="mt-20 pb-10 px-5">
        <h2 className="text-primary text-3xl md:text-4xl font-bold text-center mb-8">Our Services</h2>
        <ServicesSection />
      </section>
      <AboutSection />
      <PopularDestinations />
      <PopularAirlines />
      {/* <TestimonialsSection /> */}
      <CallToAction />
      <ScrollToTop />
    </div>
  );
}
