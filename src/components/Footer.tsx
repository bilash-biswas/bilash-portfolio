"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-bg-dark/40 backdrop-blur-md py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Copy */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-extrabold text-sm shadow-md">
              B
            </span>
            <span className="font-bold text-base text-slate-900 dark:text-slate-50">
              {portfolioData.name}
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono">
            Designed & Engineered with Next.js 15 & Tailwind CSS
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            © {new Date().getFullYear()} Bilash Kumar Biswas. All rights reserved.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-500 dark:text-slate-400">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="hover:text-primary dark:hover:text-primary-dark transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="hover:text-primary dark:hover:text-primary-dark transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => handleNavClick(e, "skills")}
            className="hover:text-primary dark:hover:text-primary-dark transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className="hover:text-primary dark:hover:text-primary-dark transition-colors"
          >
            Projects
          </a>
          <a
            href="#problem-solving"
            onClick={(e) => handleNavClick(e, "problem-solving")}
            className="hover:text-primary dark:hover:text-primary-dark transition-colors"
          >
            Problem Solving
          </a>
          <a
            href="#education"
            onClick={(e) => handleNavClick(e, "education")}
            className="hover:text-primary dark:hover:text-primary-dark transition-colors"
          >
            Education
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hover:text-primary dark:hover:text-primary-dark transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-center bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all hover:scale-105"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-center bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary-dark hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all hover:scale-105"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="w-10 h-10 rounded-full border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-center bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-dark hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all hover:scale-105"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
