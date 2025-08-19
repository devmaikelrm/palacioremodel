import ScrollReveal from "./scroll-reveal";

export default function ValuesSection() {
  const values = [
    {
      icon: "fas fa-tools",
      title: "Superior Craftsmanship",
      story: "When the Johnson family needed their 1960s kitchen transformed, we didn't just update—we crafted. Every joint, every finish, every detail reflected years of mastery."
    },
    {
      icon: "fas fa-handshake", 
      title: "Unwavering Reliability",
      story: "Through years of experience, we've learned that promises matter. When we say two weeks, we mean two weeks. When we commit to a budget, we honor it."
    },
    {
      icon: "fas fa-lightbulb",
      title: "Creative Innovation", 
      story: "A challenging basement conversion became our greatest achievement when we discovered how to blend modern living with historic character, creating something truly unique."
    },
    {
      icon: "fas fa-heart",
      title: "Customer Dedication",
      story: "Your vision becomes our mission. We listen, we understand, and we deliver beyond expectations. Years of building relationships, not just structures."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "Years", label: "Experience" },
    { number: "100%", label: "Customer Satisfaction" },
    { number: "50+", label: "Team Members" }
  ];

  return (
    <section id="values" className="py-20 bg-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)"
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans leading-relaxed">
              Built on a foundation of integrity and excellence, these values guide every project we undertake.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-accent-orange/20 to-gold/20 rounded-full p-6 w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <i className={`${value.icon} text-3xl text-white mt-2`}></i>
                </div>
                <h3 className="font-playfair text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {value.story}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div>
                <div className={`text-4xl font-bold mb-2 font-montserrat ${index % 2 === 0 ? 'text-accent-orange' : 'text-gold'}`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-sans">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
