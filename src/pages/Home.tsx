// import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import { projects } from "../constants/projects";
import ProjectCard from "../components/ProjectCard";
// import ContactForm from "../components/ContactForm";
import programmerImg from "../images/programmer.jpg";
import AnimatedText from "../components/AnimatedText";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              className="md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
                Hi, I'm{" "}
                <span className="text-primary-600 dark:text-primary-400">
                  Aishwarya
                </span>
                <br />
                <span className="text-accent-600 dark:text-accent-400">
                  Junior Software Developer
                </span>
              </h1> */}


<h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
  <AnimatedText text="Hi, I'm " />
  <AnimatedText
    text="Aishwarya"
    className="text-primary-600 dark:text-primary-400"
  />
  <br />
  <AnimatedText
    text="Junior Software Developer"
    className="text-2xl sm:text-3xl text-accent-600 dark:text-accent-400"
  />
</h1>


              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-xl">
                Junior Software Developer with over a year of experience in
                frontend development and UI/UX design. Adept at crafting
                responsive, user-centric web applications using HTML, CSS,
                JavaScript, and React.js. Passionate about clean code and
                intuitive design, with a strong ability to collaborate with
                cross-functional teams to bring innovative ideas to life.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link to="/projects" className="btn btn-primary">
                  <span>View Projects</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>

                {/* <a href="#contact" className="btn btn-outline">
                  <Mail className="mr-2 w-4 h-4" />
                  <span>Contact Me</span>
                </a> */}
              </div>

              <div className="mt-8 flex justify-center md:justify-start gap-4">
                <a
                  href="https://github.com/Aishudivya0620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/aishwarya1135/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 9H2V21H6V9Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href="https://wa.me/8667275188" // Replace with your actual WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                >
                  {/* WhatsApp SVG */}
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.004 3C9.378 3 3.996 8.383 3.996 15.006c0 2.675.77 5.225 2.22 7.448l-2.308 6.223 6.47-2.128c1.985 1.087 4.237 1.662 6.627 1.662h.001c6.626 0 12.008-5.383 12.008-12.006C28.015 8.383 22.63 3 16.004 3zm-.004 21.975c-2.106 0-4.157-.572-5.948-1.654l-.426-.253-3.844 1.264 1.243-3.77-.277-.442A10.922 10.922 0 0 1 5.996 15.01c0-5.522 4.486-10.008 10.004-10.008s10.015 4.486 10.015 10.008c0 5.52-4.49 10.005-10.015 10.005zm5.573-7.556c-.3-.15-1.772-.874-2.046-.974-.273-.099-.472-.15-.672.15-.198.3-.772.973-.946 1.171-.174.198-.348.223-.648.075-.3-.15-1.265-.466-2.41-1.486-.89-.792-1.49-1.77-1.665-2.07-.174-.3-.018-.462.132-.612.135-.134.3-.348.45-.522.15-.175.198-.3.3-.498.1-.198.05-.373-.025-.523-.075-.15-.672-1.62-.922-2.22-.243-.582-.492-.504-.672-.513-.174-.007-.374-.009-.574-.009-.198 0-.522.075-.795.373s-1.043 1.018-1.043 2.48c0 1.462 1.066 2.876 1.215 3.075.15.198 2.097 3.204 5.084 4.49.71.306 1.263.488 1.694.623.712.226 1.36.194 1.87.118.571-.085 1.772-.723 2.025-1.42.25-.698.25-1.296.174-1.42-.074-.123-.273-.198-.571-.348z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-1 rounded-2xl shadow-xl">
                <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
                  <img
                    src={programmerImg}
                    alt="Developer at work"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">
              About{" "}
              <span className="text-primary-600 dark:text-primary-400">Me</span>
            </h2>
          </AnimatedSection>

          <div className="flex flex-col md:flex-row gap-10 items-center">
            <AnimatedSection className="md:w-1/2" delay={0.1}>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  I'm a passionate frontend developer with hands-on experience
                  building modern, interactive web interfaces. My journey
                  started with Python and evolved into frontend technologies
                  like React.js, where I found my love for turning designs into
                  real, usable products
                </p>
                <p>
                  I've worked on real-world applications like admin dashboards,
                  alumni registration systems, and mock test platforms—always
                  aiming for performance, accessibility, and mobile-first
                  design.
                </p>
                <p>
                  Beyond coding, I enjoy learning new frameworks, staying
                  updated with frontend trends, and collaborating with designers
                  and developers to create thoughtful digital experiences.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="md:w-1/2" delay={0.2}>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Education & Experience
                </h3>

                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4 py-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      2020 - Present
                    </p>
                    <h4 className="font-medium">
                      Senior Developer at Tech Company
                    </h4>
                    <p className="text-sm">
                      Leading development of web applications for enterprise
                      clients
                    </p>
                  </div>

                  <div className="border-l-4 border-primary-500 pl-4 py-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      2018 - 2020
                    </p>
                    <h4 className="font-medium">Junior Software Developer</h4>
                    <p className="text-sm">
                      Built and maintained multiple client projects using modern
                      web technologies
                    </p>
                  </div>

                  <div className="border-l-4 border-primary-500 pl-4 py-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      April 2019 – August 2022
                    </p>
                    <h4 className="font-medium">B.S. in Computer Science</h4>
                    <p className="text-sm">
                      University Name - Sri Ram College of Arts and Science
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download full resume
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-4">
              Featured{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Projects
              </span>
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Here are some of my recent projects. Each one was carefully
              crafted with attention to detail, performance, and user
              experience.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* We'll display just the first 3 projects here */}
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="btn btn-outline inline-flex items-center"
            >
              <span>View All Projects</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-4">
              Get in{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Touch
              </span>
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Have a project in mind or just want to chat? Feel free to reach
              out and I'll get back to you as soon as possible.
            </p>
          </AnimatedSection>

          <ContactForm />
        </div>
      </section> */}
    </div>
  );
};

export default Home;
