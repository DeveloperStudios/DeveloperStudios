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


const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Stack />
      <Projects />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
