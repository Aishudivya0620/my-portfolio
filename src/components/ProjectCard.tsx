// import React from 'react';
import { motion } from "framer-motion";
// import { Github, ExternalLink } from 'lucide-react';

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
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden group">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-56 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-200 text-sm line-clamp-2 mb-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-accent-500/20 text-accent-100"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.category === "personal" && (
            <div className="flex space-x-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label={`View live demo of ${project.title}`}
              >
                Live
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label={`View GitHub repository for ${project.title}`}
              >
                GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
