import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "DeveloperStudios transformed our digital interface with incredible speed. Their AI-driven approach helped us stay ahead in the competitive Canadian telecom market.",
    author: 'Tony Staffieri',
    role: 'President & CEO, Rogers Communications',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
  },
  {
    quote: "The team's ability to combine AI precision with human-led design intuition is unmatched. They delivered a world-class platform for our digital division.",
    author: 'Darren Entwistle',
    role: 'President & CEO, TELUS',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
  },
  {
    quote: "DeveloperStudios understood our massive scale immediately. They used AI to explore user experience directions that significantly boosted our seller engagement.",
    author: 'Amit Agarwal',
    role: 'SVP & Country Head, Amazon India',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
  },
 {
    quote: "Working with DeveloperStudios was a game-changer for our brand. They cut our design iterations in half without losing the human touch our customers value.",
    author: 'Matt Stein',
    role: 'CEO, Distributel',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop', // Updated working placeholder
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-start justify-between mb-16"
        >
          <div>
            <span className="section-label">Testimonials</span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
              Leaders on the power of
              <br />
              <span className="text-primary">AI</span> <span className="text-metallic">driven design.</span>
            </h2>
          </div>
          <span className="section-number hidden md:block">{testimonials.length}</span>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <Quote className="absolute -top-4 -left-4 text-primary/20" size={64} />
            
            <div className="p-8 md:p-12 rounded-3xl bg-card border border-border shadow-2xl">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-2xl md:text-3xl font-display text-foreground leading-relaxed mb-8 italic">
                  "{testimonials[current].quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].author}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <p className="font-bold text-foreground text-lg">{testimonials[current].author}</p>
                    <p className="text-sm text-primary font-medium">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-12">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-card hover:border-primary/50 transition-all duration-300 group"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current ? 'bg-primary w-8' : 'bg-muted w-2'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-card hover:border-primary/50 transition-all duration-300 group"
              >
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;