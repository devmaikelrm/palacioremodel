import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "./scroll-reveal";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your project")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll contact you within 24 hours.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold mb-6">Start Your Transformation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans leading-relaxed">
              Ready to turn your vision into reality? Contact us today for a free consultation 
              and let's discuss how we can transform your space.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <ScrollReveal>
            <div className="bg-navy/80 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-white">Get Your Free Quote</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300 font-medium">First Name *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field}
                              placeholder="John"
                              className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-accent-orange"
                              data-testid="input-firstName"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300 font-medium">Last Name *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field}
                              placeholder="Doe"
                              className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-accent-orange"
                              data-testid="input-lastName"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-medium">Email Address *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            type="email"
                            placeholder="john@example.com"
                            className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-accent-orange"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-medium">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            type="tel"
                            placeholder="(555) 123-4567"
                            className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-accent-orange"
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-medium">Project Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger 
                              className="bg-white/10 border-white/20 text-white focus:border-accent-orange"
                              data-testid="select-projectType"
                            >
                              <SelectValue placeholder="Select a project type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="kitchen">Kitchen Renovation</SelectItem>
                            <SelectItem value="bathroom">Bathroom Remodel</SelectItem>
                            <SelectItem value="addition">Home Addition</SelectItem>
                            <SelectItem value="custom">Custom Construction</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-medium">Project Details</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field}
                            rows={4}
                            placeholder="Tell us about your project vision, timeline, and any specific requirements..."
                            className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-accent-orange"
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full cta-button py-4 text-lg font-montserrat font-semibold rounded-lg text-white"
                    data-testid="button-submit"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>
                        Send My Request
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </ScrollReveal>

          {/* Contact Information */}
          <ScrollReveal delay={200}>
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="bg-navy/60 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="font-playfair text-xl font-bold mb-6 text-white">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent-orange/20 rounded-full p-3">
                      <i className="fas fa-phone text-accent-orange"></i>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Call Us</div>
                      <div className="text-gray-300">(555) 123-REMODEL</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gold/20 rounded-full p-3">
                      <i className="fas fa-envelope text-gold"></i>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email Us</div>
                      <div className="text-gray-300">info@palacioremodeling.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent-orange/20 rounded-full p-3">
                      <i className="fas fa-map-marker-alt text-accent-orange"></i>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Visit Our Office</div>
                      <div className="text-gray-300">123 Construction Ave<br />Building City, BC 12345</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-navy/60 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="font-playfair text-xl font-bold mb-4 text-white">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white font-medium">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white font-medium">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gold font-medium">By Appointment</span>
                  </div>
                  <div className="mt-4 p-3 bg-accent-orange/10 rounded-lg">
                    <p className="text-accent-orange text-sm font-medium">
                      <i className="fas fa-clock mr-2"></i>
                      Emergency services available 24/7
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-gradient-to-r from-accent-orange/20 to-gold/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <h3 className="font-playfair text-xl font-bold mb-3 text-white">Ready to Start?</h3>
                <p className="text-gray-300 mb-4">Schedule your free consultation today!</p>
                <Button 
                  onClick={scrollToTop}
                  className="cta-button px-6 py-3 rounded-lg font-montserrat font-semibold"
                  data-testid="button-consultation"
                >
                  <i className="fas fa-calendar-alt mr-2"></i>
                  Book Consultation
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
