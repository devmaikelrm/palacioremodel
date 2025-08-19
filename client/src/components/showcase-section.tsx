import ScrollReveal from "./scroll-reveal";

export default function ShowcaseSection() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Modern kitchen renovation with white cabinets and marble countertops",
      title: "Modern Kitchen Transformation",
      description: "This outdated 1980s kitchen was completely reimagined with custom cabinetry, premium marble countertops, and state-of-the-art appliances. The open concept design now seamlessly connects to the living area, creating the perfect space for family gatherings.",
      tags: ["Custom Cabinetry", "Marble Surfaces", "Open Concept"],
      side: "left"
    },
    {
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Luxury bathroom with walk-in shower and natural stone finishes",
      title: "Luxury Bathroom Retreat",
      description: "Transformed a cramped bathroom into a spa-like sanctuary featuring a walk-in shower with rainfall fixtures, heated floors, and elegant stone work. Every detail was crafted to create a daily escape.",
      tags: ["Heated Floors", "Natural Stone", "Spa Features"],
      side: "right"
    }
  ];

  return (
    <section id="showcase" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold mb-6">Transformations That Inspire</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans leading-relaxed">
              See how we turn ordinary spaces into extraordinary experiences
            </p>
          </div>
        </ScrollReveal>

        {projects.map((project, index) => (
          <div 
            key={index}
            className={`grid md:grid-cols-2 gap-12 items-center ${index > 0 ? 'mt-20' : ''}`}
          >
            <ScrollReveal delay={100}>
              <div className={project.side === "right" ? "md:order-2" : ""}>
                <img 
                  src={project.image}
                  alt={project.alt}
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className={`space-y-6 ${project.side === "right" ? "md:order-1" : ""}`}>
                <h3 className="font-playfair text-3xl font-bold">{project.title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-4 py-2 rounded-lg font-medium ${
                        tagIndex % 2 === 0 
                          ? 'bg-accent-orange/20 text-accent-orange' 
                          : 'bg-gold/20 text-gold'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  className="cta-button px-6 py-3 rounded-lg font-montserrat font-semibold"
                  data-testid={`showcase-cta-${index}`}
                >
                  {index === 0 ? "View Full Gallery" : "See More Projects"}
                </button>
              </div>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </section>
  );
}
