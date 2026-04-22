import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, Code, ArrowRight } from 'lucide-react';

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  category: "office" | "personal";
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group h-[420px] rounded-[2.5rem] glow-card neon-border overflow-hidden"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative h-full w-full glass rounded-[2.4rem] overflow-hidden flex flex-col"
      >
        <div className="relative h-1/2 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
          
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass border-white/10 text-[10px] font-bold uppercase tracking-wider text-primary-400">
            {project.category}
          </div>
        </div>

        <div className="flex-grow p-8 flex flex-col">
          <h3 className="text-2xl font-black mb-3 text-white group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2 mb-6 group-hover:text-gray-300 transition-colors">
            {project.description}
          </p>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-semibold text-gray-300"
                >
                  <Code className="w-3 h-3 text-accent-500" />
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-white/5 pt-4">
              {project.category === "personal" ? (
                <>
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-xs font-bold text-primary-400 flex items-center gap-2 group-link"
                  >
                    View Details
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </>
              ) : (
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Confidential Office Project</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
