import React, { useState } from "react";
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
const techIcons: Record<string, { icon: React.ElementType; color: string }> = {
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
    <div className="pt-20">
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">
              My{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Projects
              </span>
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Browse through my latest projects. Each one represents a unique
              challenge and solution, showcasing different aspects of my
              technical skills and creativity.
            </p>
          </motion.div>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button
                onClick={() => setActiveFilter(null)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeFilter === null
                    ? "bg-primary-500 text-white"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                All
              </button>

              {allTechnologies.map((tech) => {
                const IconInfo = techIcons[tech];
                const Icon = IconInfo?.icon;

                return (
                  <button
                    key={tech}
                    onClick={() => setActiveFilter(tech)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors flex items-center gap-2 ${
                      activeFilter === tech
                        ? "bg-primary-500 text-white"
                        : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                  >
                    {Icon && <Icon className={`w-4 h-4 ${IconInfo.color}`} />}
                    <span>{tech}</span>
                  </button>
                );
              })}
            </div>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.length > 0 ? (
              <>
                {officeProjects.length > 0 && (
                  <>
                    <h2 className="col-span-full text-2xl font-bold text-left text-primary-600 dark:text-primary-400">
                      Office Projects
                    </h2>
                    {officeProjects.map((project, index) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                      />
                    ))}
                  </>
                )}

                {personalProjects.length > 0 && (
                  <>
                    <h2 className="col-span-full text-2xl font-bold text-left text-primary-600 dark:text-primary-400 mt-8">
                      Personal Projects
                    </h2>
                    {personalProjects.map((project, index) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index + officeProjects.length}
                      />
                    ))}
                  </>
                )}
              </>
            ) : (
              <p className="col-span-full text-center text-gray-500 dark:text-gray-400 py-12">
                No projects found with the selected technology.
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-8">
              Project <span className="text-primary-600 dark:text-primary-400">Approach</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection delay={0.1}>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Planning</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Every project starts with thorough requirements gathering and detailed planning to ensure the final product meets all objectives.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Development</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Using modern technologies and best practices to build robust, scalable, and maintainable applications with clean code.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Testing & Deployment</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Rigorous testing and smooth deployment processes ensure high-quality, reliable applications that perform well in production.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Projects;
