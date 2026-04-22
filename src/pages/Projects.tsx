import { useState, ElementType } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/projects";
import AnimatedSection from "../components/AnimatedSection";
import {
  RepeatIcon as ReactIcon,
  Code as NodeJs,
  // Server,
  Database,
  // Wallet,
  // FileCode2,
  // Box,
  // Flame,
  // LineChart,
  // Cloud,
  Palette,
  // BarChart3,
  // Network,
  Layout,
  // Smartphone,
  // Blocks,
  // Map,
} from "lucide-react";

// Technology to icon mapping
const techIcons: Record<string, { icon: ElementType; color: string }> = {
  React: { icon: ReactIcon, color: "text-cyan-500" },
  "Node.js": { icon: NodeJs, color: "text-green-600" },
  // 'Express': { icon: Server, color: 'text-gray-600' },
  MongoDB: { icon: Database, color: "text-green-500" },
  // 'Stripe': { icon: Wallet, color: 'text-purple-500' },
  // 'TypeScript': { icon: FileCode2, color: 'text-blue-500' },
  // 'Redux': { icon: Box, color: 'text-purple-600' },
  // 'Firebase': { icon: Flame, color: 'text-orange-500' },
  // 'Chart.js': { icon: LineChart, color: 'text-pink-500' },
  // 'Weather API': { icon: Cloud, color: 'text-sky-500' },
  "Tailwind CSS": { icon: Palette, color: "text-cyan-400" },
  // 'D3.js': { icon: BarChart3, color: 'text-orange-600' },
  // 'GraphQL': { icon: Network, color: 'text-pink-600' },
  "Styled Components": { icon: Layout, color: "text-pink-500" },
  // 'React Native': { icon: Smartphone, color: 'text-blue-600' },
  // 'Next.js': { icon: Blocks, color: 'text-black dark:text-white' },
  // 'Google Maps API': { icon: Map, color: 'text-red-500' },
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Extract unique technologies from all projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  );

  const filteredProjects = activeFilter
    ? projects.filter((project) =>
      project.technologies.some(
        (tech) =>
          tech.trim().toLowerCase() === activeFilter?.trim().toLowerCase()
      )
    )
    : projects;

  const officeProjects = filteredProjects.filter(
    (p) => p.category === "office"
  );
  const personalProjects = filteredProjects.filter(
    (p) => p.category === "personal"
  );

  return (
    <div className="pt-32 min-h-screen pb-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass border-white/10 text-primary-400 text-sm font-medium tracking-wide uppercase">
            Portfolio
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 italic">
            SELECTED <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">WORKS</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            A collection of projects where I've pushed the boundaries of what's possible on the web.
          </p>
        </motion.div>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-20 overflow-x-auto pb-4 no-scrollbar">
            <button
              onClick={() => setActiveFilter(null)}
              className={`px-6 py-2.5 text-sm font-bold rounded-2xl transition-all border ${activeFilter === null
                  ? "bg-primary-500 border-primary-500 text-white shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                  : "glass border-white/5 text-gray-400 hover:text-white hover:border-white/20"
                }`}
            >
              All Projects
            </button>

            {allTechnologies.map((tech) => {
              const IconInfo = techIcons[tech];
              const Icon = IconInfo?.icon;

              return (
                <button
                  key={tech}
                  onClick={() => setActiveFilter(tech)}
                  className={`px-6 py-2.5 text-sm font-bold rounded-2xl transition-all border flex items-center gap-2 whitespace-nowrap ${activeFilter === tech
                      ? "bg-primary-500 border-primary-500 text-white shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                      : "glass border-white/5 text-gray-400 hover:text-white hover:border-white/20"
                    }`}
                >
                  {Icon && <Icon className={`w-4 h-4 ${activeFilter === tech ? 'text-white' : IconInfo.color}`} />}
                  <span>{tech}</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          layout
        >
          {filteredProjects.length > 0 ? (
            <>


              {personalProjects.length > 0 && (
                <>
                  <div className="col-span-full mb-4 mt-12 flex items-center gap-4">
                    <h2 className="text-2xl font-black text-white/50 uppercase tracking-widest">
                      Personal Projects
                    </h2>
                    <div className="h-px flex-grow bg-white/5" />
                  </div>
                  {personalProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index + officeProjects.length}
                    />
                  ))}
                </>
              )}

              {officeProjects.length > 0 && (
                <>
                  <div className="col-span-full mb-4 flex items-center gap-4">
                    <h2 className="text-2xl font-black text-white/50 uppercase tracking-widest">
                      Office Projects
                    </h2>
                    <div className="h-px flex-grow bg-white/5" />
                  </div>
                  {officeProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                    />
                  ))}
                </>
              )}
            </>
          ) : (
            <div className="col-span-full py-24 text-center glass rounded-[3rem] border-white/5">
              <p className="text-gray-500 text-xl font-medium">
                No projects found for the selected filter.
              </p>
              <button
                onClick={() => setActiveFilter(null)}
                className="mt-6 text-primary-400 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
