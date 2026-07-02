"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Monitor, Phone, Database, Cloud } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...portfolioData.skills.map((c) => c.category)];

  const categoryIcons: { [key: string]: React.ReactNode } = {
    "Backend Engineering": <Server className="w-5 h-5 text-primary" />,
    "Frontend Web Systems": <Monitor className="w-5 h-5 text-accent" />,
    "Mobile App Development": <Phone className="w-5 h-5 text-primary" />,
    "Databases & Caching": <Database className="w-5 h-5 text-accent" />,
    "Architecture & DevOps": <Cloud className="w-5 h-5 text-primary" />
  };

  const filteredSkills = selectedCategory === "All"
    ? portfolioData.skills
    : portfolioData.skills.filter((c) => c.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
  } as const;

  return (
    <section id="skills" className="py-24 bg-grid-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary dark:text-primary-dark font-mono">
            Technical Stack
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mt-3">
            Core Competencies & Expertise
          </h3>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mt-5 rounded-full" />
        </div>

        {/* Tab Controls (Mobile: Horizontal Scroll, Desktop: Centered Flex) */}
        <div className="flex overflow-x-auto pb-4 md:pb-0 justify-start md:justify-center items-center gap-2 mb-12 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-md shadow-blue-500/20"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200/50 dark:border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((catData) => (
              <motion.div
                layout
                key={catData.category}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass p-6 sm:p-8 rounded-2xl flex flex-col gap-6 shadow-sm hover:shadow-lg transition-all relative overflow-hidden group"
              >
                {/* Visual Accent Glow */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-70" />
                
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center shrink-0">
                    {categoryIcons[catData.category] || <Server className="w-5 h-5" />}
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-slate-50">
                    {catData.category}
                  </h4>
                </div>

                {/* Skill List with Premium Pill Badges */}
                <div className="flex flex-wrap gap-2.5 mt-2">
                  {catData.skills.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.03 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-50/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-800/80 hover:border-primary/50 dark:hover:border-primary/50 hover:text-primary dark:hover:text-primary hover:shadow-sm hover:shadow-primary/5 transition-colors duration-200 flex items-center justify-center cursor-default select-none font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
