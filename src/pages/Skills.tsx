// import React from "react";
import { motion } from "framer-motion";
import SkillItem from "../components/SkillItem";
import { skills } from "../constants/skills";
import AnimatedSection from "../components/AnimatedSection";

const Skills = () => {
  // Group skills by category
  const frontendSkills = skills.filter((skill) =>
    [
      "JavaScript",
      //  'TypeScript',
      "React",
      "HTML/CSS",
      "Tailwind CSS",
    ].includes(skill.name)
  );

  const backendSkills = skills.filter((skill) =>
    ["Node.js", "Postman", "MongoDB"].includes(skill.name)
  );

  const otherSkills = skills.filter(
    (skill) => !frontendSkills.includes(skill) && !backendSkills.includes(skill)
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
                Skills
              </span>
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Over the past year, I've gained hands-on experience building
              modern web applications. I've worked with a range of frontend
              technologies and tools, focusing on creating responsive,
              user-friendly interfaces. Here's a snapshot of the skills I've
              developed and continue to improve.
            </p>
          </motion.div>

          <AnimatedSection delay={0.1}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Frontend Development
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {frontendSkills.map((skill, index) => (
                  <SkillItem key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Tchnologies Used
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
                {backendSkills.map((skill, index) => (
                  <SkillItem key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">
                Other Skills
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {otherSkills.map((skill, index) => (
                  <SkillItem key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-8">
              My Learning{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Journey
              </span>
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="relative pl-8 pb-12 border-l-2 border-primary-200 dark:border-primary-800">
                <div className="absolute top-0 left-0 w-4 h-4 -ml-2 rounded-full bg-primary-500"></div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                    2023
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Started My Tech Journey
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Entered the tech field and completed a 6-month internship
                  where I gained foundational experience in web development and
                  learned essential collaboration and coding skills.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative pl-8 pb-12 border-l-2 border-primary-200 dark:border-primary-800">
                <div className="absolute top-0 left-0 w-4 h-4 -ml-2 rounded-full bg-primary-500"></div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                    2024
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Frontend Projects with HTML, CSS & Vue.js
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Worked on individual projects focusing on HTML, CSS, and
                  Vue.js, where I built responsive interfaces and learned the
                  importance of component-based architecture in frontend
                  development.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="relative pl-8 pb-12 border-l-2 border-primary-200 dark:border-primary-800">
                <div className="absolute top-0 left-0 w-4 h-4 -ml-2 rounded-full bg-primary-500"></div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                    2025
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Team Projects with React.js
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Collaborated with teams to develop scalable web apps using
                  React.js. Gained hands-on experience in component design,
                  state management, and integrating APIs in real-world
                  scenarios.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
