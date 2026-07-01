"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Check, Code2, Globe } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ProblemSolving() {
  // Mapping of icons based on achievements
  const platformIcons: { [key: string]: React.ReactNode } = {
    "LeetCode Profile": <Code2 className="w-8 h-8 text-amber-500" />,
    "Competitive Programming": <Globe className="w-8 h-8 text-emerald-500" />
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  } as const;

  return (
    <section id="problem-solving" className="py-24 bg-grid-pattern relative">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary dark:text-primary-dark font-mono">
            Problem Solving
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mt-3">
            Algorithmic Achievements
          </h3>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Block: Description Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <h4 className="text-2xl font-extrabold text-slate-950 dark:text-slate-50 leading-snug">
              Leveraging Data Structures & Algorithmic Optimizations
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              A solid foundation in computer science is core to engineering resilient software. By actively participating in competitive programming, I solve complex constraints and optimize time and space complexity ($O(N)$, $O(\log N)$) on leading platforms.
            </p>
            <div className="flex flex-col gap-3 font-medium text-slate-700 dark:text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent shrink-0" />
                <span>Proficient in Sorting, Search, Graphs, Dynamic Programming</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent shrink-0" />
                <span>Focus on writing high-performance, race-free, concurrent logic</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent shrink-0" />
                <span>320+ algorithmic constraints evaluated and passed</span>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Badges Grid */}
          <div className="lg:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {portfolioData.achievements.map((ach, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass p-8 rounded-2xl flex flex-col gap-6 transition-all duration-300 shadow-sm hover:shadow-lg relative overflow-hidden group"
                >
                  {/* Subtle inner hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200/50 dark:border-slate-700/50">
                      {platformIcons[ach.platform] || <Code2 className="w-8 h-8" />}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
                      Verified Profile
                    </span>
                  </div>

                  {/* Large Metrics */}
                  <div className="flex flex-col gap-1.5 mt-2">
                    <span className="text-4xl font-extrabold text-slate-900 dark:text-slate-50">
                      {ach.solvedCount}+
                    </span>
                    <span className="text-base font-extrabold text-slate-800 dark:text-slate-200">
                      {ach.badgeName}
                    </span>
                  </div>

                  {/* Details summary */}
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {ach.stats}
                  </p>

                  {/* Outbound Link Button */}
                  <a
                    href={ach.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-850 hover:scale-[1.02] active:scale-[0.98] font-bold text-xs flex items-center justify-center gap-1.5 transition-all text-slate-700 dark:text-slate-300 cursor-pointer"
                  >
                    View Profile
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
