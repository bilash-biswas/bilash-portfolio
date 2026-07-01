"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Layers, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const icons = [
    <Award key="award" className="w-8 h-8 text-primary" />,
    <Layers key="layers" className="w-8 h-8 text-accent" />,
    <Terminal key="terminal" className="w-8 h-8 text-primary" />
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  } as const;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/40 dark:bg-bg-dark/40 border-y border-slate-200/40 dark:border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-primary dark:text-primary-dark font-mono"
          >
            About Me
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mt-3"
          >
            Engineering Scalable Digital Ecosystems
          </motion.h3>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Block: Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200">
              Professional Summary
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-medium">
              {portfolioData.summary}
            </p>
            <div className="flex flex-col gap-4 text-slate-600 dark:text-slate-400 font-mono text-sm border-l-2 border-primary/30 pl-4 py-2">
              <div>
                <span className="font-semibold text-slate-800 dark:text-slate-200">Location:</span> {portfolioData.contact.city}, {portfolioData.contact.country}
              </div>
              <div>
                <span className="font-semibold text-slate-800 dark:text-slate-200">Expertise:</span> Microservices, Mobile Architecture, CI/CD
              </div>
            </div>
          </motion.div>

          {/* Right Block: Stats Grid */}
          <div className="lg:col-span-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
            >
              {portfolioData.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass p-6 rounded-2xl flex items-start gap-4 transition-all duration-300 shadow-sm hover:shadow-lg relative overflow-hidden group"
                >
                  {/* Subtle inner hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200/50 dark:border-slate-700/50">
                    {icons[i % icons.length]}
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 bg-gradient-to-r from-slate-950 to-slate-700 dark:from-slate-50 dark:to-slate-300 bg-clip-text">
                      {stat.value}
                    </span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                      {stat.label}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {stat.subText}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
