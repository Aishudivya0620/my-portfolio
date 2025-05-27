import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-700 dark:text-gray-300">
              &copy; {new Date().getFullYear()} Developer Portfolio. All rights reserved.
            </p>
          </div>

          {/* Center: Quick Links */}
          {/* <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
          
          </div> */}

          {/* Right: Social Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/Aishudivya0620" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aishwarya1135/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            {/* <a 
              href="mailto:aishwaryat1410@gmail.com" 
              className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a> */}
            <a 
              href="https://wa.me/918667275188" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom: Extra Info */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 space-y-1">
          <p>📍 Thiruvallur, Chennai, India | Passionate about crafting great user experiences

</p>
          {/* <p>Built with React.js, Tailwind CSS & </p> */}
          <p className="text-xs">
            <a href="#top" className="hover:underline">↑ Back to top</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
