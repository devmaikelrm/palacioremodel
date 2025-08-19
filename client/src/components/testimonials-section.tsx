import { useState, useEffect } from "react";
import ScrollReveal from "./scroll-reveal";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "David Mitchell",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Happy homeowner smiling in renovated space",
      testimonial: "David and his team were incredibly helpful throughout our entire kitchen renovation. The attention to detail was outstanding, and they completed everything on time and within budget. Highly recommend them!",
      project: "Kitchen Renovation Project",
      rating: 5,
      location: "Austin, TX"
    },
    {
      name: "Sarah Johnson", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Satisfied client in their beautifully remodeled space",
      testimonial: "Palacio Remodeling transformed our master bathroom into a luxury spa retreat. Their craftsmanship is impeccable, and they made the entire process stress-free. We couldn't be happier with the results!",
      project: "Bathroom Remodel",
      rating: 5,
      location: "Dallas, TX"
    },
    {
      name: "Michael Rodriguez",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150", 
      alt: "Pleased homeowner standing in front of renovated home exterior",
      testimonial: "From the initial consultation to the final walk-through, Palacio Remodeling exceeded our expectations. Their team's professionalism and expertise made our home addition project seamless. Outstanding quality and service!",
      project: "Home Addition",
      rating: 5,
      location: "Houston, TX"
    },
    {
      name: "Emily Chen",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Homeowner in modern renovated kitchen",
      testimonial: "The whole house renovation was a dream come true! They preserved the character of our 1960s home while adding modern functionality. The project management was flawless and communication was excellent throughout.",
      project: "Whole House Renovation",
      rating: 5,
      location: "San Antonio, TX"
    },
    {
      name: "James Wilson",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Happy client in finished basement",
      testimonial: "Our basement transformation exceeded all expectations. What was once wasted space is now our favorite family gathering area. The quality of work and attention to detail is remarkable.",
      project: "Basement Finishing",
      rating: 5,
      location: "Fort Worth, TX"
    },
    {
      name: "Lisa Thompson",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Client enjoying outdoor living space",
      testimonial: "The outdoor living space they created is absolutely stunning! We now entertain year-round thanks to their incredible design and craftsmanship. Worth every penny and more!",
      project: "Outdoor Living Space",
      rating: 5,
      location: "Plano, TX"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Get testimonials to display (current + 2 next for desktop view)
  const getDisplayedTestimonials = () => {
    const displayed = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      displayed.push({ ...testimonials[index], displayIndex: i });
    }
    return displayed;
  };

  return (
    <section id="testimonials" className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans leading-relaxed">
              The true measure of our success lies in the satisfaction of our clients
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-testid="testimonial-carousel"
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-navy/80 hover:bg-navy text-white p-3 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
            data-testid="prev-testimonial"
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-navy/80 hover:bg-navy text-white p-3 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
            data-testid="next-testimonial"
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Testimonials Display */}
          <div className="grid md:grid-cols-3 gap-8">
            {getDisplayedTestimonials().map((testimonial, index) => (
              <ScrollReveal key={`${currentSlide}-${index}`} delay={index * 100}>
                <div 
                  className={`testimonial-card rounded-xl p-8 transition-all duration-500 ${
                    index === 0 ? 'ring-2 ring-accent-orange/50' : ''
                  }`}
                >
                  {/* Customer Header */}
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.alt}
                      className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-white/20"
                    />
                    <div>
                      <h4 className="font-montserrat font-semibold text-white text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">{testimonial.location}</p>
                      <div className="flex text-gold mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="fas fa-star text-sm"></i>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mb-6">
                    <i className="fas fa-quote-left text-accent-orange text-2xl mb-4 opacity-60"></i>
                    <p className="text-gray-300 leading-relaxed text-lg italic">
                      {testimonial.testimonial}
                    </p>
                    <i className="fas fa-quote-right text-accent-orange text-2xl mt-4 opacity-60 float-right"></i>
                  </div>

                  {/* Project Info */}
                  <div className="border-t border-white/10 pt-4">
                    <div className={`font-medium text-sm ${index % 2 === 0 ? 'text-accent-orange' : 'text-gold'}`}>
                      <i className="fas fa-hammer mr-2"></i>
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex flex-col items-center mt-12 space-y-6">
          {/* Dot Indicators */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-accent-orange scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                data-testid={`testimonial-dot-${index}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                isAutoPlaying 
                  ? 'bg-accent-orange/20 text-accent-orange' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
              data-testid="autoplay-toggle"
            >
              <i className={`fas ${isAutoPlaying ? 'fa-pause' : 'fa-play'}`}></i>
              <span className="text-sm font-medium">
                {isAutoPlaying ? 'Pause' : 'Play'} Auto-scroll
              </span>
            </button>
            
            <div className="text-gray-400 text-sm">
              {currentSlide + 1} of {testimonials.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
