import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/* ---------------- SVG ICONS ---------------- */

const NextIcon = () => (
  <svg viewBox="0 0 128 128" className="w-10 h-10 fill-current">
    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm22.2 93.2L48.4 44.8h-8.6v38.4h8.6V57.6l30.3 35.6h7.5z" />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 128 128" className="w-10 h-10 fill-current">
    <circle cx="64" cy="64" r="10" />
    <ellipse cx="64" cy="64" rx="50" ry="20" fill="none" stroke="currentColor" strokeWidth="6" />
    <ellipse cx="64" cy="64" rx="20" ry="50" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(60 64 64)" />
    <ellipse cx="64" cy="64" rx="20" ry="50" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(120 64 64)" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 128 128" className="w-10 h-10">
    <rect width="128" height="128" rx="16" fill="#3178C6" />
    <text x="64" y="82" textAnchor="middle" fontSize="64" fill="#fff" fontWeight="700">TS</text>
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 128 128" className="w-10 h-10 fill-current">
    <rect x="16" y="64" width="16" height="16" />
    <rect x="36" y="64" width="16" height="16" />
    <rect x="56" y="64" width="16" height="16" />
    <rect x="76" y="64" width="16" height="16" />
    <rect x="56" y="44" width="16" height="16" />
    <path d="M16 88h96c0 16-16 24-48 24S16 104 16 88z" />
  </svg>
);

const AWSIcon = () => (
  <svg viewBox="0 0 128 128" className="w-10 h-10 fill-current">
    <path d="M64 20l44 88H20z" />
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 128 128" className="w-10 h-10">
    <circle cx="64" cy="24" r="20" fill="#F24E1E" />
    <circle cx="64" cy="64" r="20" fill="#A259FF" />
    <circle cx="64" cy="104" r="20" fill="#0ACF83" />
  </svg>
);

/* ---------------- TOOL LIST ---------------- */

const tools = [
  { name: 'Next.js', icon: NextIcon },
  { name: 'React Native', icon: ReactIcon },
  { name: 'TypeScript', icon: TypeScriptIcon },
  { name: 'Docker', icon: DockerIcon },
  { name: 'AWS', icon: AWSIcon },
  { name: 'Figma', icon: FigmaIcon },
];

const Stack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-start justify-between mb-16"
        >
          <div>
            <span className="section-label">Expert Stack</span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              Enterprise Tech.
              <br />
              <span className="text-metallic">Billion-Dollar Results.</span>
            </h2>
          </div>
          <span className="section-number hidden md:block">{tools.length}</span>
        </motion.div>

        {/* Marquee */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex gap-8"
            >
              <div className="marquee flex gap-8">
                {[...tools, ...tools, ...tools].map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={`${tool.name}-${index}`}
                      className="w-40 h-32 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 shrink-0 flex flex-col items-center justify-center gap-3 group"
                    >
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        <Icon />
                      </div>
                      <span className="text-sm font-medium">{tool.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
           {/* Specialized Sub-Stacks */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Engineering */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="p-6 rounded-2xl border border-border bg-card/50"
          >
            <h4 className="text-primary font-bold mb-4">Engineering</h4>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Python', 'Kubernetes', 'Redis', 'GraphQL', 'Swift'].map((t) => (
                <span key={t} className="px-3 py-1 bg-background rounded-full text-xs text-muted-foreground border border-border">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Marketing & Growth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="p-6 rounded-2xl border border-border bg-card/50"
          >
            <h4 className="text-primary font-bold mb-4">Marketing & Lead Gen</h4>
            <div className="flex flex-wrap gap-2">
              {['Salesforce', 'Apollo.io', 'Zapier', 'LinkedIn Sales Nav', 'Hotjar', 'Mixpanel'].map((t) => (
                <span key={t} className="px-3 py-1 bg-background rounded-full text-xs text-muted-foreground border border-border">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* AI & Automation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="p-6 rounded-2xl border border-border bg-card/50"
          >
            <h4 className="text-primary font-bold mb-4">AI & Intelligence</h4>
            <div className="flex flex-wrap gap-2">
              {['OpenAI API', 'LangChain', 'TensorFlow', 'Pinecone', 'Anthropic', 'Stable Diffusion'].map((t) => (
                <span key={t} className="px-3 py-1 bg-background rounded-full text-xs text-muted-foreground border border-border">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      
    </section>
  );
};

export default Stack;
