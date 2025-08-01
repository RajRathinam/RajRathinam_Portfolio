import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white/10 to-transparent text-white py-4 px-4 md:px-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left - Name and year */}
        <p className="text-sm text-white/80">
          © {new Date().getFullYear()} Raj Rathinam. All rights reserved.
        </p>

        {/* Right - Social links */}
        <div className="md:flex hidden gap-6">
          <a
            href="mailto:rajrathinam2005@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-all duration-200 text-white/80 hover:scale-110"
          >
            <FiMail size={20} />
          </a>
          <a
            href="https://github.com/RajRathinam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-all duration-200 text-white/80 hover:scale-110"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/raj-rathinam-s-55b09530a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-all duration-200 text-white/80 hover:scale-110"
          >
            <FiLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
