import { motion } from 'framer-motion';
import { ArrowDown, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* 1. Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        {/* 2. Top Navigation Labels */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <span className="section-label text-xs tracking-[0.2em] font-medium uppercase">DeveloperStudios®</span>
          <span className="section-label text-xs tracking-[0.2em] font-medium uppercase">©2025 Edition</span>
        </motion.div>

        {/* 3. Main Hero Content Area */}
        <div className="relative flex flex-col items-center">
          
          {/* LARGE BACKGROUND HEADING: "STUDIOS" sits behind the image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0"
          >
            <h2 className="text-[25vw] font-display font-black uppercase leading-none tracking-tighter">
              Studios
            </h2>
          </motion.div>

          {/* FRONT HEADING: "AI-DRIVEN DEVELOPER" */}
          <div className="text-center relative z-20 pointer-events-none">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl sm:text-8xl md:text-9xl font-display font-bold leading-[0.8] tracking-tighter uppercase"
            >
              <span className="text-metallic">AI-Driven</span>
              <br />
            </motion.h1>
          </div>

          {/* 4. THREE-COLUMN SIDE LAYOUT (Description - Image - CTA) */}
          <div className="relative mt-[-4rem] md:mt-[-6rem] lg:mt-[-8rem] z-30 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
            
            {/* LEFT: Description Para */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hidden lg:flex flex-col justify-end h-full pb-20"
            >
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-[280px] font-light border-l border-primary/20 pl-6">
                Engineering high-performance digital ecosystems. We combine 
                <span className="text-foreground font-medium"> human-led intuition</span> with 
                <span className="text-foreground font-medium"> AI precision</span> to generate global revenue.
              </p>
            </motion.div>

            {/* CENTER: The Main Figure Image */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="flex justify-center z-10"
            >
              <div className="relative w-[300px] h-[400px] md:w-[380px] md:h-[500px] lg:w-[450px] lg:h-[600px]">
                <div className="w-full h-full rounded-t-[12rem] rounded-b-3xl overflow-hidden border border-white/10 shadow-2xl relative group bg-card/50 backdrop-blur-sm">
                  <img 
                    src="./BG.png" 
                    alt="AI Developer Vision"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  />
                  {/* Subtle fade effect on the image bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                </div>
                {/* Glow behind image */}
                <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full -z-10" />
              </div>
            </motion.div>

            {/* RIGHT: Fixed CTA Button */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col items-center lg:items-end justify-end h-full pb-20"
            >
              <div className="space-y-6 text-center lg:text-right">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold block">Exclusive Agency</span>
                  <span className="text-xs text-muted-foreground block">Available for Q1 2025</span>
                </div>
                
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-4 px-10 py-5 bg-foreground text-background font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
                >
                  <span className="relative z-10 uppercase tracking-widest text-xs">Book a Free Lead</span>
                  <Zap size={18} className="relative z-10 fill-primary text-primary" />
                  <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 5. Bottom Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-light">Scroll to Explore</span>
          <ArrowDown size={14} className="animate-bounce" />
        </motion.div>
      </div>

      {/* 6. Continuous Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/30 py-6 bg-background/50 backdrop-blur-xl z-50">
        <div className="marquee flex whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-8 text-xs uppercase tracking-[0.6em] text-muted-foreground/40 font-medium">
              Brand Identity • AI Product Design • Web Development • Custom Automations • 
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;