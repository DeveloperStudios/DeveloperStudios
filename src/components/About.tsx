import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label text-primary">// Empowered by AI. Driven by Human Vision.</span>
         <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
  We build digital engines that drive 7-figure revenue growth.
</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
       <p className="text-muted-foreground text-lg leading-relaxed">
  Developer Studios is a global design and engineering collective. We don't just build websites; 
  we engineer growth-focused ecosystems for brands that demand excellence and scalability.
</p>
<div className="flex items-center gap-8 pt-6">
  <div>
    <span className="text-4xl font-display font-bold text-foreground">$150M+</span>
    <p className="text-sm text-muted-foreground mt-1">Client Revenue Generated</p>
  </div>
  <div className="h-16 w-px bg-border" />
  <div>
    <span className="text-4xl font-display font-bold text-foreground">50+</span>
    <p className="text-sm text-muted-foreground mt-1">Global Market Leaders</p>
  </div>
</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
