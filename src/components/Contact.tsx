import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Globe, MapPin, Loader2 } from 'lucide-react';
import { toast } from "sonner"; // Assuming you use Sonner for expert-style notifications

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

// src/components/Contact.tsx

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData(e.currentTarget);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    projectType: formData.get('projectType'),
    message: formData.get('message'),
  };

  try {
    // Use the environment variable here
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/contact`;
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      toast.success("Project brief received! Our Riyadh team will contact you shortly.");
      (e.target as HTMLFormElement).reset();
    } else {
      toast.error(result.message || "Submission failed.");
    }
  } catch (error) {
    toast.error("Network error. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Contact Us</span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-7xl font-display font-bold text-foreground leading-[1.1]">
              Let's build your
              <br />
              <span className="text-metallic">global legacy.</span>
            </h2>
            <p className="mt-8 text-lg text-muted-foreground max-w-md leading-relaxed">
              Based in Riyadh and operating globally. Our team is ready to engineer 
              your next high-performance digital ecosystem.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Globe size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Riyadh, Saudi Arabia</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Global HQ</p>
                  <p className="text-foreground font-medium">DeveloperStudios Intelligence Lab</p>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-12">
              <div>
                <span className="text-3xl font-display font-bold text-foreground">99.9%</span>
                <p className="text-sm text-muted-foreground">Uptime Guaranteed</p>
              </div>
              <div>
                <span className="text-3xl font-display font-bold text-foreground">24/7</span>
                <p className="text-sm text-muted-foreground">Expert Support</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Professional Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border border-border p-8 md:p-12 rounded-[2rem] shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground ml-1">Full Name</label>
                  <input name="name" type="text" required placeholder="John Doe" className="w-full bg-background border border-border rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground ml-1">Email Address</label>
                  <input name="email" type="email" required placeholder="john@company.com" className="w-full bg-background border border-border rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground ml-1">Phone Number</label>
                  <input name="phone" type="tel" required placeholder="+966 5XX XXX XXX" className="w-full bg-background border border-border rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground ml-1">Project Type</label>
                  <select name="projectType" className="w-full bg-background border border-border rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Demand Generation">Demand Generation</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground ml-1">Project Brief</label>
                <textarea name="message" required rows={4} placeholder="Tell us about your goals..." className="w-full bg-background border border-border rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group bg-foreground text-background font-bold py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-primary transition-all duration-500 shadow-xl disabled:opacity-70"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  <>
                    Start Your Project
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;