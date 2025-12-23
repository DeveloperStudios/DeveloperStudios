import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Rogers Telecom',
    category: 'Telecommunications',
    year: '2025',
    image: './rogers.png',
    link: 'https://www.rogers.com/',
    color: '#FF0000',
  },
  {
    title: 'Telus Digital',
    category: 'Telecommunications',
    year: '2025',
    image: './telus.png',
    link: 'https://www.telus.com/en/',
    color: '#4B286D',
  },
  {
    title: 'Distributel ISP',
    category: 'Internet Services',
    year: '2025',
    image: './ISP.png',
    link: 'https://www.distributel.ca',
    color: '#E31837',
  },
  {
    title: 'Holibrands',
    category: 'E-commerce',
    year: '2025',
    image: './Holibrands.png',
    link: 'https://holibrands.com',
    color: '#000000',
  },
  {
    title: 'Overseas Education',
    category: 'Education',
    year: '2024',
    image: './overseas.png',
    link: 'https://www.overseeducation.com',
    color: '#0056b3',
  },
  {
    title: 'Amazon Affiliates',
    category: 'E-commerce',
    year: '2024',
    image: './amazon.png',
    link: 'https://sell.amazon.in',
    color: '#FF9900',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
              {project.title}
            </h3>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ArrowUpRight className="text-background" size={20} />
          </motion.div>
        </div>
      </div>

      {/* Color accent line */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ backgroundColor: project.color }}
      />
    </motion.div>
  );
};

const Projects = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 bg-card relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-start justify-between mb-16"
        >
          <div>
            <span className="section-label">Projects</span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
              AI-crafted
              <br />
              <span className="text-metallic">design highlights</span>
            </h2>
          </div>
          <span className="section-number hidden md:block">6</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
