import ScrollReveal from "./scroll-reveal";
import logoImage from "@assets/icon_1755641987304.jpg";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToShowcase = () => {
    const element = document.getElementById("showcase");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center parallax-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 26, 46, 0.7), rgba(44, 44, 84, 0.8)), url('https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-charcoal/70 to-navy/90"></div>
      
      {/* Floating construction tools background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <i className="fas fa-hammer absolute top-20 left-20 text-accent-orange/20 text-6xl animate-float"></i>
        <i className="fas fa-hard-hat absolute top-40 right-32 text-gold/20 text-5xl animate-float" style={{ animationDelay: '1s' }}></i>
        <i className="fas fa-home absolute bottom-40 left-32 text-accent-orange/20 text-7xl animate-float" style={{ animationDelay: '2s' }}></i>
        <i className="fas fa-tools absolute bottom-20 right-20 text-gold/20 text-4xl animate-float" style={{ animationDelay: '0.5s' }}></i>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Enhanced Logo Display */}
        <div className="mb-8 flex justify-center">
          <div className="logo-enhanced animate-bounce-gentle">
            <img 
              src={logoImage} 
              alt="Palacio Remodeling" 
              className="w-20 h-20 object-contain" 
            />
          </div>
        </div>
        
        <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-lg">
          Transform Your
          <br />
          <span className="text-accent-orange">Dream Space</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-100 font-sans leading-relaxed drop-shadow-md">
          With years of experience in premium remodeling and construction, 
          <br className="hidden md:block" />
          we bring your vision to life with craftsmanship that lasts generations
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToContact}
            className="cta-button px-8 py-4 text-lg font-montserrat font-semibold rounded-lg text-white hover:scale-105 transition-all"
            data-testid="hero-cta-consultation"
          >
            <i className="fas fa-phone-alt mr-2"></i>
            Get Free Consultation
          </button>
          <button 
            onClick={scrollToShowcase}
            className="border-2 border-white/30 hover:border-accent-orange px-8 py-4 text-lg font-montserrat font-semibold rounded-lg text-white hover:bg-accent-orange/20 transition-all"
            data-testid="hero-cta-work"
          >
            <i className="fas fa-play mr-2"></i>
            View Our Work
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <i className="fas fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
}
