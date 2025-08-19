import { useState } from "react";
import ScrollReveal from "./scroll-reveal";

interface ProjectImage {
  before: string;
  after: string;
  alt: string;
}

interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  description: string;
  images: ProjectImage;
  duration: string;
  budget: string;
  tags: string[];
}

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const projects: PortfolioProject[] = [
    {
      id: 1,
      title: "Modern Kitchen Transformation",
      category: "kitchen",
      description: "Complete kitchen renovation featuring custom cabinetry, quartz countertops, and premium appliances. Transformed a cramped 1980s kitchen into an open, functional space perfect for entertaining.",
      images: {
        before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Kitchen renovation before and after comparison"
      },
      duration: "4 weeks",
      budget: "$45,000 - $60,000",
      tags: ["Custom Cabinetry", "Quartz Countertops", "Open Concept"]
    },
    {
      id: 2,
      title: "Luxury Master Bathroom",
      category: "bathroom",
      description: "Spa-like bathroom retreat with walk-in shower, heated floors, and natural stone finishes. Created a relaxing sanctuary from a standard builder-grade bathroom.",
      images: {
        before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Bathroom renovation before and after comparison"
      },
      duration: "3 weeks",
      budget: "$25,000 - $35,000",
      tags: ["Walk-in Shower", "Heated Floors", "Natural Stone"]
    },
    {
      id: 3,
      title: "Home Addition & Extension",
      category: "addition",
      description: "Two-story addition adding 800 sq ft of living space including a family room, home office, and guest bedroom. Seamlessly integrated with existing architecture.",
      images: {
        before: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        after: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Home addition before and after comparison"
      },
      duration: "8 weeks",
      budget: "$80,000 - $100,000",
      tags: ["800 sq ft Addition", "Two-Story", "Seamless Integration"]
    },
    {
      id: 4,
      title: "Basement Finishing",
      category: "basement",
      description: "Transformed unfinished basement into a multi-functional space with entertainment area, home gym, and wine storage. Added egress windows and full bathroom.",
      images: {
        before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        after: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Basement finishing before and after comparison"
      },
      duration: "6 weeks",
      budget: "$35,000 - $50,000",
      tags: ["Entertainment Area", "Home Gym", "Full Bathroom"]
    },
    {
      id: 5,
      title: "Outdoor Living Space",
      category: "outdoor",
      description: "Created an stunning outdoor entertainment area with covered patio, outdoor kitchen, fire pit, and landscaping. Perfect for year-round entertaining.",
      images: {
        before: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Outdoor living space before and after comparison"
      },
      duration: "5 weeks",
      budget: "$40,000 - $55,000",
      tags: ["Outdoor Kitchen", "Fire Pit", "Covered Patio"]
    },
    {
      id: 6,
      title: "Whole House Renovation",
      category: "whole-house",
      description: "Complete home transformation including new flooring, paint, fixtures, and layout modifications. Modernized a 1970s home while preserving its character.",
      images: {
        before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        after: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Whole house renovation before and after comparison"
      },
      duration: "12 weeks",
      budget: "$120,000 - $150,000",
      tags: ["Complete Transformation", "Layout Changes", "Period Preservation"]
    }
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "kitchen", name: "Kitchens", count: projects.filter(p => p.category === "kitchen").length },
    { id: "bathroom", name: "Bathrooms", count: projects.filter(p => p.category === "bathroom").length },
    { id: "addition", name: "Additions", count: projects.filter(p => p.category === "addition").length },
    { id: "basement", name: "Basements", count: projects.filter(p => p.category === "basement").length },
    { id: "outdoor", name: "Outdoor", count: projects.filter(p => p.category === "outdoor").length },
    { id: "whole-house", name: "Whole House", count: projects.filter(p => p.category === "whole-house").length }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const BeforeAfterComparison = ({ images, alt }: { images: ProjectImage; alt: string }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    return (
      <div 
        className="relative w-full h-80 overflow-hidden rounded-lg cursor-ew-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        data-testid="before-after-comparison"
      >
        {/* After image (background) */}
        <img 
          src={images.after} 
          alt={`${alt} - after`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        
        {/* Before image (foreground with clip) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={images.before} 
            alt={`${alt} - before`}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Slider handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <i className="fas fa-arrows-alt-h text-navy text-sm"></i>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
          After
        </div>
      </div>
    );
  };

  const ProjectModal = ({ project, onClose }: { project: PortfolioProject; onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-navy border border-white/20 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-white mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-accent-orange/20 text-accent-orange px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              data-testid="close-modal"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>

          <BeforeAfterComparison images={project.images} alt={project.title} />

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-3">Project Details</h4>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Project Info</h4>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400 text-sm">Duration:</span>
                  <div className="text-white font-medium">{project.duration}</div>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Investment Range:</span>
                  <div className="text-white font-medium">{project.budget}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold mb-6">Project Portfolio</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans leading-relaxed">
              See the dramatic transformations we've created for our clients. 
              Each project tells a story of vision, craftsmanship, and attention to detail.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-accent-orange text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
                data-testid={`category-${category.id}`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <div 
                className="service-card bg-charcoal/80 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
                data-testid={`project-card-${project.id}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.images.after}
                    alt={project.images.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="font-playfair text-lg font-bold text-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm">{project.duration}</p>
                      </div>
                      <div className="bg-accent-orange text-white px-3 py-1 rounded text-sm font-medium">
                        View Details
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-gold/20 text-gold px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="text-gray-400 text-xs px-2 py-1">
                        +{project.tags.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollReveal>
          <div className="text-center mt-16">
            <h3 className="font-playfair text-2xl font-bold mb-4">Ready to Start Your Transformation?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Every great project starts with a conversation. Let's discuss your vision 
              and create something amazing together.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="cta-button px-8 py-4 text-lg font-montserrat font-semibold rounded-lg text-white"
              data-testid="portfolio-cta"
            >
              <i className="fas fa-comments mr-2"></i>
              Start Your Project
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}