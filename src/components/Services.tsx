import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// src/components/Services.tsx
const services = [
  {
    number: '01',
    title: 'Brand Design & Identity',
    description: 'We craft impactful brand DNA for global B2B and B2C leaders, ensuring your visual identity commands market authority.',
    tags: ['Logo', 'Visual Strategy', 'Brand Guidelines', 'Brand DNA'],
  },
  {
    number: '02',
    title: 'Web & App Development',
    description: 'High-performance engineering for web and mobile. We build scalable architectures that handle millions in revenue.',
    tags: ['Next.js', 'React Native', 'SaaS', 'E-commerce'],
  },
  {
    number: '03',
    title: 'Demand Gen & Growth',
    description: 'Our marketing lab focuses on lead generation and growth strategies that turn digital products into revenue engines.',
    tags: ['Growth Marketing', 'Lead Gen', 'Content Strategy', 'Digital Ads'],
  },
 {
    number: '04',
    title: 'Branding',
    description: 'Visual identity and brand strategy that commands authority. We build cohesive design systems that define your market presence.',
    tags: ['Logo Design', 'Visual Strategy', 'Brand DNA', 'Graphic Design'],
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 card-hover"
    >
      <div className="absolute top-8 right-8">
        <span className="section-number">{service.number}</span>
      </div>
      
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
      </div>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {service.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 text-xs bg-secondary text-secondary-foreground rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hover gradient effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
};

const Services = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-start justify-between mb-16"
        >
          <div>
            <span className="section-label">/Services</span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
              Future-ready design services,
              <br />
              <span className="text-metallic">Enhanced by AI.</span>
            </h2>
          </div>
          <span className="section-number hidden md:block">4</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
