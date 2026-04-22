// import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Download, Github } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import { projects } from "../constants/projects";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import programmerImg from "../images/programmer.jpg";


const Home = () => {
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
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px] animate-pulse-slow delay-1000" />

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-3/5 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 mb-6 rounded-full glass border-white/10 text-primary-400 text-sm font-medium tracking-wide uppercase"
              >
                Available for New Projects
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
                <span className="block opacity-80">I'm</span>
                <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x neon-text">
                  Aishwarya
                </span>
              </h1>

              <div className="h-12 md:h-16 mb-8 overflow-hidden">
                <motion.p 
                  className="text-2xl md:text-4xl font-medium text-gray-400"
                  animate={{ y: [0, -60, -120, 0] }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    times: [0, 0.33, 0.66, 1]
                  }}
                >
                  <span className="block h-12 md:h-16">Frontend Developer</span>
                  <span className="block h-12 md:h-16 text-accent-400">UI/UX Designer</span>
                  <span className="block h-12 md:h-16 text-primary-400">React Enthusiast</span>
                </motion.p>
              </div>

              <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
                Crafting high-performance, visually stunning digital experiences with 
                <span className="text-white font-semibold mx-1">React.js</span> and 
                <span className="text-white font-semibold mx-1">Next.js</span>. 
                Focused on turning complex problems into elegant, human-centric solutions.
              </p>

              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <Link to="/projects" className="btn-premium btn-premium-primary group">
                  <span>Explore Work</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/Aishudivya0620"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass border-white/10 hover:bg-white/10 transition-all hover:scale-110 active:scale-95"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aishwarya1135/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass border-white/10 hover:bg-white/10 transition-all hover:scale-110 active:scale-95"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-2/5 relative"
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Photo Frame Decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl opacity-20 blur-2xl animate-pulse-slow" />
              
              <motion.div 
                className="relative glow-card p-2 rounded-[2.5rem] border border-white/20"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
              >
                <div 
                  className="relative aspect-square rounded-[1.8rem] overflow-hidden group"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <img
                    src={programmerImg}
                    alt="Aishwarya"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>

              {/* Floating Social Pill (Optional but cool) */}
              <motion.div 
                className="absolute -bottom-6 -right-6 glass-dark px-6 py-3 rounded-2xl border border-white/10 flex items-center gap-3 backdrop-blur-3xl shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-sm font-medium">Remote Work Ready</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center justify-between mb-16">
              <div className="md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-black mb-4">
                  ABOUT <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">ME</span>
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
              </div>
              <p className="md:w-1/2 text-gray-400 text-lg mt-6 md:mt-0">
                A dedicated developer who loves turning ideas into reality through code. 
                I specialize in crafting seamless user experiences with a focus on performance.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection delay={0.1}>
              <div className="glass p-8 md:p-10 rounded-[2rem] border-white/5 relative group">
                <div className="absolute -top-6 -left-6 w-12 h-12 glass border-white/10 rounded-2xl flex items-center justify-center text-primary-400 transform -rotate-12 group-hover:rotate-0 transition-transform">
                  <ArrowRight className="w-6 h-6" />
                </div>
                
                <div className="prose prose-lg prose-invert max-w-none space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    I'm a passionate frontend developer with hands-on experience
                    building modern, interactive web interfaces. My journey
                    started with Python and evolved into frontend technologies
                    like React.js, where I found my love for turning designs into
                    real, usable products.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    I've worked on real-world applications like admin dashboards,
                    alumni registration systems, and mock test platforms—always
                    aiming for performance, accessibility, and mobile-first
                    design.
                  </p>
                  <div className="pt-6 border-t border-white/5 flex flex-wrap gap-4">
                    <div className="px-4 py-2 glass border-white/5 rounded-xl text-sm font-medium hover:bg-white/5 transition-colors">
                      Problem Solver
                    </div>
                    <div className="px-4 py-2 glass border-white/5 rounded-xl text-sm font-medium hover:bg-white/5 transition-colors">
                      Team Player
                    </div>
                    <div className="px-4 py-2 glass border-white/5 rounded-xl text-sm font-medium hover:bg-white/5 transition-colors">
                      Continuous Learner
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400">
                    <Download className="w-4 h-4" />
                  </span>
                  Experience & Education
                </h3>

                <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full glass border-white/10 flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                       <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
                    </div>
                    <p className="text-sm font-medium text-primary-400 mb-1">August 2023 – Present</p>
                    <h4 className="text-xl font-bold text-white mb-1">Frontend Developer</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Working on UI and developing features for web apps using modern frameworks and tools,
                      ensuring responsive and high-performance user interfaces.
                    </p>
                  </div>

                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full glass border-white/10 flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                       <div className="w-2 h-2 rounded-full bg-accent-500" />
                    </div>
                    <p className="text-sm font-medium text-accent-400 mb-1">April 2019 – August 2022</p>
                    <h4 className="text-xl font-bold text-white mb-1">B.S. in Computer Science</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Sri Ram College of Arts and Science. Focused on core computer science 
                      principles and software development.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="group inline-flex items-center gap-3 px-6 py-3 glass border-white/10 rounded-2xl font-medium hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                  >
                    <Download className="w-5 h-5 text-primary-400 group-hover:animate-bounce" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 relative">
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                FEATURED <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">WORKS</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                A selection of my favourite projects, built with passion and precision.
                From concept to deployment, every detail matters.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* We'll display just the first 3 projects here */}
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="text-center mt-20">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 glass border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all hover:scale-105 active:scale-95 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                GET IN <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">TOUCH</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Have a project in mind or just want to chat? 
                I'm always open to discussing new projects and opportunities.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
