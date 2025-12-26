// src/pages/Index.tsx
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChoose from '@/components/WhyChoose';
import Stack from '@/components/Stack';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const App = () => {
  useEffect(() => {
    // Dynamically update document title and meta for SEO
    document.title = "DeveloperStudios | Premium Web Development & Software Solutions in Riyadh";
    
    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "DeveloperStudios is a leading tech agency in Riyadh specializing in high-performance web development, custom software, and digital transformation.");
    }

    // Add JSON-LD Structured Data for Search Engines
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "DeveloperStudios",
      "image": "https://developerstudios.in/logo.png",
      "url": "https://developerstudios.in",
      "telephone": "+966-XXXX-XXXX",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Business District",
        "addressLocality": "Riyadh",
        "addressCountry": "SA"
      },
      "serviceType": ["Web Development", "Software Engineering", "UI/UX Design"],
      "areaServed": "Riyadh, Saudi Arabia"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* High-SEO Semantic Structure */}
      <h1 className="sr-only">DeveloperStudios - Best Web Development Agency in Riyadh</h1>
      <Navbar />
      <Hero />
      <About />
      <section id="services">
        <Services />
      </section>
      <WhyChoose />
      <Stack />
      <section id="projects">
        <Projects />
      </section>
      <Testimonials />
      <section id="pricing">
        <Pricing />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
};

export default App;