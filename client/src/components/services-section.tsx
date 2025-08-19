import ScrollReveal from "./scroll-reveal";

export default function ServicesSection() {
  const services = [
    {
      icon: "fas fa-home",
      title: "Complete Renovations",
      description: "Transform your entire home with our comprehensive renovation services. From kitchen makeovers to full home remodels, we handle every detail.",
      tags: ["Kitchens", "Bathrooms", "Living Spaces"],
      color: "gold"
    },
    {
      icon: "fas fa-hammer",
      title: "Custom Construction",
      description: "Build your dream home from the ground up with our custom construction expertise. We specialize in unique designs that reflect your personal style.",
      tags: ["New Builds", "Additions", "Extensions"],
      color: "gold"
    },
    {
      icon: "fas fa-clipboard-list",
      title: "Project Management",
      description: "Seamless project coordination from start to finish. We manage timelines, budgets, and quality to ensure your project runs smoothly.",
      tags: ["Planning", "Scheduling", "Quality Control"],
      color: "accent-orange"
    }
  ];

  return (
    <section id="services" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold mb-6">Our Expert Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans leading-relaxed">
              From concept to completion, we deliver exceptional results with every project. 
              Our comprehensive services ensure your vision becomes reality.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="service-card bg-navy/80 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center hover:border-accent-orange/30">
                <div className="service-icon mb-6">
                  <i className={`${service.icon} text-6xl text-${service.color} mb-4`}></i>
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {service.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`bg-${service.color}/20 text-${service.color} px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  className="text-accent-orange hover:text-gold font-semibold font-montserrat transition-colors"
                  data-testid={`service-learn-more-${index}`}
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
