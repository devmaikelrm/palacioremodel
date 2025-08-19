import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logoImage from "@assets/icon_1755641987304.jpg";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10",
        isScrolled ? "bg-navy/95 backdrop-blur-md" : "bg-navy/90 backdrop-blur-md"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="logo-enhanced">
              <img 
                src={logoImage} 
                alt="Palacio Remodeling Logo" 
                className="w-10 h-10 object-contain" 
              />
            </div>
            <div>
              <h1 className="font-playfair font-bold text-lg text-white">Palacio Remodeling</h1>
              <p className="text-gray-300 text-xs font-montserrat">Transform Your Space</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("services")}
              className="hover:text-accent-orange transition-colors font-medium"
              data-testid="nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("values")}
              className="hover:text-accent-orange transition-colors font-medium"
              data-testid="nav-values"
            >
              Our Values
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="hover:text-accent-orange transition-colors font-medium"
              data-testid="nav-testimonials"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="cta-button px-6 py-2 rounded-lg text-white font-montserrat font-semibold"
              data-testid="nav-cta"
            >
              Get Quote
            </button>
          </div>
          
          <button className="md:hidden text-white" data-testid="mobile-menu-toggle">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
