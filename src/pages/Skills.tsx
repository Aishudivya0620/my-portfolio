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
    <div className="pt-32 min-h-screen pb-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass border-white/10 text-primary-400 text-sm font-medium tracking-wide uppercase">
            Technical Arsenal
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8">
            MY <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">SKILLS</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            I've spent the last few years mastering the art of frontend development. 
            Here's the tech stack I use to bring digital experiences to life.
          </p>
        </motion.div>

        <div className="space-y-32">
          <AnimatedSection>
            <div className="relative">
              <div className="flex items-center gap-6 mb-12">
                <h2 className="text-3xl font-black text-white whitespace-nowrap">FRONTEND</h2>
                <div className="h-px w-full bg-gradient-to-r from-primary-500/50 to-transparent" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {frontendSkills.map((skill, index) => (
                  <SkillItem key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="relative">
              <div className="flex items-center gap-6 mb-12">
                <h2 className="text-3xl font-black text-white whitespace-nowrap">TOOLS & TECH</h2>
                <div className="h-px w-full bg-gradient-to-r from-accent-500/50 to-transparent" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-6">
                {backendSkills.map((skill, index) => (
                  <SkillItem key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="flex items-center gap-6 mb-12">
                <h2 className="text-3xl font-black text-white whitespace-nowrap">OTHERS</h2>
                <div className="h-px w-full bg-gradient-to-r from-primary-500/50 to-transparent" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {otherSkills.map((skill, index) => (
                  <SkillItem key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <section className="mt-48 py-24 glass rounded-[3rem] border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px]" />
          <div className="container-custom relative z-10">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  LEARNING <span className="text-primary-400">JOURNEY</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-xl mx-auto">
                  A timeline of my growth and evolution in the tech world.
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:left-8 md:before:left-1/2 before:top-4 before:bottom-4 before:w-px before:bg-white/10">
              <AnimatedSection delay={0.1}>
                <div className="relative flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2 md:text-right">
                    <div className="glass px-6 py-8 rounded-[2rem] border-white/10 hover:border-primary-500/30 transition-all">
                      <span className="text-primary-400 font-bold mb-2 block">2023</span>
                      <h3 className="text-xl font-bold mb-3">Started My Tech Journey</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Entered the tech field and completed a 6-month internship
                        where I gained foundational experience in web development.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-[#030712] z-10" />
                  <div className="md:w-1/2" />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="relative flex flex-col md:flex-row-reverse gap-8 items-center">
                  <div className="md:w-1/2 md:text-left">
                    <div className="glass px-6 py-8 rounded-[2rem] border-white/10 hover:border-accent-500/30 transition-all">
                      <span className="text-accent-400 font-bold mb-2 block">2024</span>
                      <h3 className="text-xl font-bold mb-3">Frontend Mastery</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Built several projects focusing on HTML, CSS, and
                        Vue.js, mastering reactive component architectures.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#030712] z-10" />
                  <div className="md:w-1/2" />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="relative flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2 md:text-right">
                    <div className="glass px-6 py-8 rounded-[2rem] border-white/10 hover:border-primary-500/30 transition-all">
                      <span className="text-primary-400 font-bold mb-2 block">2025</span>
                      <h3 className="text-xl font-bold mb-3">React & Scale</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Collaborated with teams to develop scalable web apps 
                        using React.js and modern state management.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-[#030712] z-10" />
                  <div className="md:w-1/2" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
