import ScrollReveal from "./scroll-reveal";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "David Mitchell",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Happy homeowner smiling in renovated space",
      testimonial: "David and his team were incredibly helpful throughout our entire kitchen renovation. The attention to detail was outstanding, and they completed everything on time and within budget. Highly recommend them!",
      project: "Kitchen Renovation Project"
    },
    {
      name: "Sarah Johnson", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Satisfied client in their beautifully remodeled space",
      testimonial: "Palacio Remodeling transformed our master bathroom into a luxury spa retreat. Their craftsmanship is impeccable, and they made the entire process stress-free. We couldn't be happier with the results!",
      project: "Bathroom Remodel"
    },
    {
      name: "Michael Rodriguez",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150", 
      alt: "Pleased homeowner standing in front of renovated home exterior",
      testimonial: "From the initial consultation to the final walk-through, Palacio Remodeling exceeded our expectations. Their team's professionalism and expertise made our home addition project seamless. Outstanding quality and service!",
      project: "Home Addition"
    }
  ];

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

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="testimonial-card rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-montserrat font-semibold text-white">{testimonial.name}</h4>
                    <div className="flex text-gold">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4 italic">
                  "{testimonial.testimonial}"
                </p>
                <div className={`font-medium text-sm ${index % 2 === 0 ? 'text-accent-orange' : 'text-gold'}`}>
                  {testimonial.project}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonial slider indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          <div className="w-3 h-3 rounded-full bg-accent-orange"></div>
          <div className="w-3 h-3 rounded-full bg-white/30"></div>
          <div className="w-3 h-3 rounded-full bg-white/30"></div>
        </div>
      </div>
    </section>
  );
}
