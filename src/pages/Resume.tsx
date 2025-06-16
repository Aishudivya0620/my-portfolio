// import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, Phone, MapPin, Calendar} from "lucide-react";
// import AnimatedSection from "../components/AnimatedSection";
// import ContactForm from "../components/ContactForm";
import myimg from "../images/me.jpg";

const Resume = () => {
  return (
    <div className="pt-20">
      {/* Resume Overview Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 text-center">
                <div className="relative mb-6 mx-auto w-40 h-40 rounded-full overflow-hidden border-4 border-primary-500">
                  <img
                    src={myimg}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h1 className="text-2xl font-bold">Aishwarya</h1>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                  Junior Software Developer
                </p>

                <div className="flex flex-col space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                    <a
                      href="mailto:email@example.com"
                      className="hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      aishwaryat1410@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                    <span>8667275188</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                    <span>Thiruvallur, Chennai</span>
                  </div>
                  {/* <div className="flex items-center justify-center">
                    <Link className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                    <a
                      href="https://portfolio.com"
                      className="hover:text-primary-600 dark:hover:text-primary-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      portfolio.com
                    </a>
                  </div> */}
                </div>

                <div className="mt-6">
                  <a
                    href="/resume.pdf"
                    download="Aishwarya_Resume.pdf" // Optional: set a custom filename
                    className="btn btn-primary inline-flex items-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-xl font-bold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                    Professional Summary
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Junior Software Developer with 2 year of experience,
                    specializing in frontend development and UI/UX design.
                    Skilled in building responsive, visually engaging web
                    applications using HTML, CSS, JavaScript, React.js, and
                    Tailwind CSS. Passionate about clean code, pixel-perfect
                    design, and seamless user experiences. Proficient in tools
                    like Figma for prototyping and Git for version control. A
                    creative problem-solver who bridges the gap between design
                    and development to bring intuitive digital experiences to
                    life.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-xl font-bold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                    Work Experience
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold">
                          Junior Software Developer
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>2020 - Present</span>
                        </div>
                      </div>
                      <h4 className="text-primary-600 dark:text-primary-400 mb-2">
                        MannIT Innovations - Madippakam, Chennai.
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                        <li>
                          I have developed and maintained responsive,
                          user-friendly web interfaces using React.js, HTML,
                          CSS, and JavaScript, achieving 98/100 in Performance,
                          91/100 in Accessibility, 100/100 in Best Practices,
                          and 90/100 in SEO.
                        </li>
                        <li>
                          Worked on features for projects like Alumni
                          Registration, Admin Panel, and Mock Test Applications.
                        </li>
                        <li>
                          Ensured mobile responsiveness for key components
                          ,optimizing the user experience across various devices
                        </li>
                        <li>
                          Actively participated in team meetings, discussions
                          with UI/UX designers.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold">
                          Python Development Intern
                        </h3>

                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>January 2022 - April 2022</span>
                        </div>
                      </div>
                      <h4 className="text-primary-600 dark:text-primary-400 mb-2">
                        Shiash Info Solutions Pvt. Ltd. - Chennai, India
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                        <li>
                          Gained hands-on experience in Python-based application
                          development.
                        </li>
                        <li>
                          Assisted in writing clean, efficient code and
                          debugging issues in real-world projects.{" "}
                        </li>
                        <li>
                          Learned agile methodologies and worked in a
                          collaborative team environment.
                        </li>
                        <li>
                          Collaborated with designers to transform mockups into
                          functional UIs
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                    Education
                  </h2>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">
                        B.Sc. in Computer Science
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>April 2019 - August 2022</span>
                      </div>
                    </div>
                    <h4 className="text-primary-600 dark:text-primary-400 mb-2">
                      Sri Ram College of Arts and Science
                    </h4>
                    {/* <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Graduated with honors. Relevant coursework included Data Structures, Algorithms, 
                      Web Development, Database Systems, and Software Engineering.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-4">
              Let's{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Connect
              </span>
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Interested in working together? Feel free to reach out through the
              form below or directly via email. I'm always open to discussing
              new projects and opportunities.
            </p>
          </AnimatedSection>

          <ContactForm />
        </div>
      </section> */}
    </div>
  );
};

export default Resume;
