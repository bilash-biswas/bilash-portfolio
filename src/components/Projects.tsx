"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { portfolioData, ProjectItem } from "@/data/portfolioData";

export default function Projects() {
  const projectImages: { [key: string]: string } = {
    corebank: "/corebank_ui.webp",
    walletflow: "/walletflow_ui.webp",
    bcsplatform: "/bcsplatform_ui.webp",
    "collab-editor": "/collab_editor_ui.webp",
    logicbuild: "/bcsplatform_ui.webp"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  } as const;

  return (
    <section id="projects" className="py-24 bg-white/40 dark:bg-bg-dark/40 border-y border-slate-200/40 dark:border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary dark:text-primary-dark font-mono">
            My Portfolio
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mt-3">
            Production-Grade Case Studies
          </h3>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mt-5 rounded-full" />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {portfolioData.projects.map((project: ProjectItem) => {
            const imageUrl = projectImages[project.id] || "/corebank_ui.webp";
            
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl flex flex-col h-full overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Project Image Panel */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/50">
                  <Image
                    src={imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-w-768px) 100vw, 384px"
                    priority={project.id === "corebank"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Content Details */}
                <div className="p-6 flex flex-col flex-grow gap-5">
                  {/* Category & Title */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent dark:text-accent-dark font-mono">
                      {project.category}
                    </span>
                    <h4 className="text-xl font-extrabold text-slate-900 dark:text-slate-50 group-hover:text-primary transition-colors leading-snug">
                      {project.title.split(" (")[0]}
                    </h4>
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500 font-mono italic">
                      {project.title.includes("(") ? `(${project.title.split(" (")[1]}` : ""}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  {/* Technical Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[11px] font-semibold font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/30 dark:border-slate-700/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="flex flex-col gap-2.5 border-t border-slate-200/50 dark:border-slate-800/50 pt-4 flex-grow">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider font-mono">
                      Key Highlights:
                    </span>
                    <ul className="flex flex-col gap-2">
                      {project.keyFeats.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                          <CheckCircle2 className="w-4 h-4 text-accent dark:text-accent-dark shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex items-center gap-3 border-t border-slate-200/50 dark:border-slate-800/50 pt-4 mt-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100/80 hover:bg-slate-200/80 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-100 font-bold text-xs flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                      >
                        <Github className="w-4 h-4" />
                        Codebase
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 rounded-xl bg-primary hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] font-bold text-xs flex items-center justify-center gap-1.5 transition-all text-white shadow-sm shadow-blue-500/10 cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* GitHub Direct Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-16"
        >
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-900 dark:bg-slate-900/50 text-white font-bold hover:bg-slate-800 dark:hover:bg-slate-800/80 shadow-md dark:shadow-none hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all group cursor-pointer border border-slate-900 dark:border-slate-800 hover:border-slate-800 dark:hover:border-slate-700"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
