"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = [portfolioData.title, ...portfolioData.subtitles];
  const speed = isDeleting ? 30 : 80;

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[titleIndex];
      if (!isDeleting) {
        setTypedText(currentTitle.substring(0, typedText.length + 1));
        if (typedText === currentTitle) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentTitle.substring(0, typedText.length - 1));
        if (typedText === "") {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, titleIndex, speed, titles]);

  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-pulse-slow pointer-events-none" />

      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              top: `${(i * 12) + 15}%`,
              left: `${((i * 23) % 70) + 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, (i * 4) - 10, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200/50 dark:border-blue-800/30 bg-blue-50/50 dark:bg-blue-950/20 text-xs font-semibold text-primary dark:text-primary-dark mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              Available for full-time roles & projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {portfolioData.name}
              </span>
            </motion.h1>

            {/* Dynamic Typing Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-12 mt-4 flex items-center justify-center lg:justify-start"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 font-mono">
                <span>{typedText}</span>
                <span className="w-1 h-6 ml-1 bg-primary dark:bg-primary-dark inline-block animate-pulse" />
              </h2>
            </motion.div>

            {/* Badges / Subtitles list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2.5"
            >
              {portfolioData.subtitles.map((sub, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-full bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-sm text-slate-600 dark:text-slate-400"
                >
                  {sub}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="/resume.pdf"
                download="Bilash_Kumar_Biswas_CV.pdf"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <FileText className="w-5 h-5" />
                Download CV
              </a>

              <button
                onClick={(e) => handleScrollTo(e, "projects")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 font-bold flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-850 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
              >
                View Projects
                <ArrowRight className="w-5 h-5 text-slate-500 dark:text-slate-400" />
              </button>
            </motion.div>

            {/* Social Icons row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-5 text-slate-400 dark:text-slate-500"
            >
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 dark:hover:text-slate-200 hover:scale-110 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="hover:text-accent hover:scale-110 transition-all"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Profile Image Layout */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              {/* Spinning gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary to-accent opacity-75 blur-md animate-pulse-slow" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary to-accent animate-spin" style={{ animationDuration: "20s" }} />
              
              {/* Portrait wrap */}
              <div className="absolute inset-1 rounded-2xl bg-bg-light dark:bg-bg-dark overflow-hidden flex items-center justify-center">
                <Image
                  src="/bilash_portrait.png"
                  alt="Bilash Kumar Biswas"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 384px"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
