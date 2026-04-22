// import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, Phone, MapPin, Calendar } from "lucide-react";
// import AnimatedSection from "../components/AnimatedSection";
// import ContactForm from "../components/ContactForm";
import myimg from "../images/me.jpg";

const Resume = () => {
  return (
    <div className="pt-32 min-h-screen pb-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Sidebar */}
            <div className="w-full lg:w-1/3 space-y-8 sticky top-32">
              <div className="glass p-8 rounded-[2.5rem] border-white/10 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative mb-6 mx-auto w-32 h-32 rounded-[2rem] overflow-hidden border-2 border-primary-500/30 p-1">
                  <img
                    src={myimg}
                    alt="Aishwarya"
                    className="w-full h-full object-cover rounded-[1.8rem]"
                  />
                </div>

                <h1 className="text-3xl font-black mb-2 uppercase tracking-tighter">Aishwarya</h1>
                <p className="text-primary-400 font-bold text-sm mb-6 uppercase tracking-widest">
                  Frontend Developer
                </p>

                <div className="space-y-4 text-sm text-gray-400">
                  <div className="flex items-center justify-center gap-3 p-3 glass border-white/5 rounded-2xl hover:bg-white/5 transition-colors">
                    <Mail className="w-4 h-4 text-primary-400" />
                    <span>aishwarya1135@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-3 glass border-white/5 rounded-2xl hover:bg-white/5 transition-colors">
                    <Phone className="w-4 h-4 text-accent-400" />
                    <span>8667275188</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-3 glass border-white/5 rounded-2xl hover:bg-white/5 transition-colors">
                    <MapPin className="w-4 h-4 text-primary-400" />
                    <span>Chennai, India</span>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="/resume.pdf"
                    download="Aishwarya_Resume.pdf"
                    className="btn-premium btn-premium-primary w-full text-sm py-4"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>

              <div className="glass p-8 rounded-[2.5rem] border-white/10">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-primary-500 rounded-full" />
                  Core Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'UI/UX'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 glass border-white/5 rounded-xl text-[10px] font-bold uppercase text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-2/3 space-y-10">
              <section className="glass p-8 md:p-10 rounded-[2.5rem] border-white/10 group">
                <h2 className="text-2xl font-black mb-6 flex items-center gap-4">
                  <span className="text-primary-400">01</span>
                  SUMMARY
                </h2>
                <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                  Frontend Developer with 3 years of experience specializing in React.js, Next.js, and modern JavaScript.
                  Skilled in building scalable, responsive web applications, integrating APIs, and creating clean, efficient
                  UI components. Focused on performance and user experience.
                </p>
              </section>

              <section className="glass p-8 md:p-10 rounded-[2.5rem] border-white/10">
                <h2 className="text-2xl font-black mb-10 flex items-center gap-4">
                  <span className="text-accent-400">02</span>
                  EXPERIENCE
                </h2>

                <div className="space-y-12 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-white/10 pl-8">
                  <div className="relative group">
                    <div className="absolute -left-10 top-1.5 w-4 h-4 rounded-full glass border-primary-500/50 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">Frontend Developer</h3>
                      <span className="text-xs font-bold text-primary-400 uppercase tracking-widest bg-primary-500/10 px-3 py-1 rounded-full">2025 - PRESENT</span>
                    </div>
                    <p className="text-sm font-bold text-gray-500 mb-4 italic uppercase">Aadhyas, Chennai</p>
                    <ul className="space-y-3">
                      {[
                        'Developed and maintained responsive web interfaces using React.js and modern CSS frameworks.',
                        'Achieved 98/100 Performance and 100/100 Best Practices in Lighthouse.',
                        'Worked on complex features for Alumni Registration and Admin Panels.',
                        'Optimized mobile responsiveness for high-traffic components.'
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative group">
                    <div className="absolute -left-10 top-1.5 w-4 h-4 rounded-full glass border-accent-500/50 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">Python Development Intern</h3>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">JAN 2022 - APR 2022</span>
                    </div>
                    <p className="text-sm font-bold text-gray-500 mb-4 italic uppercase">Shiash Info Solutions, Chennai</p>
                    <ul className="space-y-3">
                      {[
                        'Gained hands-on experience in Python-based application development.',
                        'Assisted in writing clean, efficient code and debugging issues.',
                        'Worked in a collaborative Agile team environment.',
                        'Transformed design mockups into functional user interfaces.'
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="glass p-8 md:p-10 rounded-[2.5rem] border-white/10">
                <h2 className="text-2xl font-black mb-8 flex items-center gap-4">
                  <span className="text-primary-400">03</span>
                  EDUCATION
                </h2>
                <div className="flex items-center gap-6 p-6 glass border-white/5 rounded-3xl group hover:border-primary-500/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">B.Sc. in Computer Science</h3>
                    <p className="text-primary-400 text-sm mb-1 font-medium">Sri Ram College of Arts and Science</p>
                    <p className="text-xs text-gray-500 uppercase font-black">2019 - 2022</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
