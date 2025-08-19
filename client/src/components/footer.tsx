export default function Footer() {
  const services = [
    "Kitchen Renovation",
    "Bathroom Remodel", 
    "Home Additions",
    "Custom Construction",
    "Project Management"
  ];

  const contactInfo = [
    { icon: "fas fa-phone", text: "(555) 123-REMODEL" },
    { icon: "fas fa-envelope", text: "info@palacioremodeling.com" },
    { icon: "fas fa-map-marker-alt", text: "123 Construction Ave\nBuilding City, BC 12345" }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#", label: "Facebook" },
    { icon: "fab fa-instagram", href: "#", label: "Instagram" },
    { icon: "fab fa-linkedin-in", href: "#", label: "LinkedIn" },
    { icon: "fab fa-youtube", href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-navy border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="logo-enhanced">
                <img 
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAC0AK0DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0aiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z" 
                  alt="Palacio Remodeling" 
                  className="w-16 h-16 object-contain" 
                />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold">Palacio Remodeling</h3>
                <p className="text-gray-400 font-montserrat">Transform Your Space</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              With years of experience in premium construction and remodeling, 
              we're dedicated to transforming your vision into reality with unmatched quality and craftsmanship.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-white/10 hover:bg-accent-orange/20 p-3 rounded-full transition-colors"
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <i className={`${social.icon} text-white`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="hover:text-accent-orange transition-colors"
                    data-testid={`footer-service-${index}`}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-3 text-gray-300">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <i className={`${contact.icon} text-accent-orange ${index === 2 ? 'mt-1' : ''}`}></i>
                  <span style={{ whiteSpace: 'pre-line' }}>{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Palacio Remodeling. All rights reserved. | Licensed & Insured | ROC #123456</p>
        </div>
      </div>
    </footer>
  );
}
