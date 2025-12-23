import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const features = [
  {
    title: 'Revenue-First Engineering',
    description: 'Every pixel and line of code is optimized for conversion and demand generation. We build to grow your bottom line.',
    metric: { value: 3, suffix: 'x', label: 'Average ROI' },
  },
  {
    title: 'Global Delivery Model',
    description: "Operating across timezones to provide same-day updates and rapid scaling for enterprise partners worldwide.",
    metric: { value: 24, suffix: 'h', label: 'Turnaround' },
  },
  {
    title: 'Brand-Consistent, Every Time',
    description: 'From design systems to creative assets, our AI keeps your brand consistent across every screen, pixel, and platform.',
    metric: { value: 100, suffix: '%', label: 'Consistency' },
  },
  {
    title: 'Launch 2x Faster',
    description: 'Our AI-accelerated sprint model shortens your timeline from months to weeks — while keeping feedback loops human and empathetic.',
    metric: { value: 2, suffix: 'x', label: 'Speed' },
  },
];

const CountUp = ({ end, suffix, isInView }: { end: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, isInView]);

  return (
    <span className="text-5xl md:text-6xl font-display font-bold text-primary">
      {count}{suffix}
    </span>
  );
};

const WhyChoose = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-start justify-between mb-16"
        >
          <div>
            <span className="section-label">Why Choose DeveloperStudios?</span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
              Clarity, Speed, and Intelligence—
              <br />
              <span className="text-metallic">DeveloperStudios Way</span>
            </h2>
          </div>
          <span className="section-number hidden md:block">4</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-50px" });

            return (
              <motion.div
                key={feature.title}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  {feature.metric && (
                    <div className="text-right shrink-0">
                      <CountUp end={feature.metric.value} suffix={feature.metric.suffix} isInView={isInView} />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
