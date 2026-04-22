import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-24 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="glass p-12 rounded-[3rem] border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 group">
          <div className="text-center md:text-left flex flex-col gap-4">
            <h2 className="text-3xl font-black italic tracking-tighter">
              LET'S <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">BUILD</span> SOMETHING GREAT.
            </h2>
            <p className="text-gray-400 font-medium">
              Open for freelance opportunities and full-time positions.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
              <a href="mailto:aishwarya1135@gmail.com" className="btn-premium btn-premium-primary text-sm px-6 py-3">
                Hire Me
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Aishudivya0620"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110 active:scale-95 group/icon"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover/icon:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/aishwarya1135/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110 active:scale-95 group/icon"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover/icon:text-white transition-colors" />
              </a>
              <a
                href="https://wa.me/918667275188"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110 active:scale-95 group/icon"
              >
                <FaWhatsapp className="w-5 h-5 text-gray-400 group-hover/icon:text-green-400 transition-colors" />
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">
                &copy; {new Date().getFullYear()} AISHWARYA.
              </p>
              <p className="text-gray-600 text-[10px] mt-1 font-medium tracking-widest">
                DESIGNED & DEVELOPED WITH PASSION
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-64 bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;
