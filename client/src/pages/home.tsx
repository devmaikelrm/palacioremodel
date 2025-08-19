import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ValuesSection from "@/components/values-section";
import ShowcaseSection from "@/components/showcase-section";
import PortfolioGallery from "@/components/portfolio-gallery";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-navy text-cream font-sans overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ValuesSection />
      <ShowcaseSection />
      <PortfolioGallery />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
