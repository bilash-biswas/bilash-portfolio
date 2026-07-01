"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, Landmark } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Education() {
  const timelineVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  } as const;

  return (
    <section id="education" className="py-24 bg-white/40 dark:bg-bg-dark/40 border-y border-slate-200/40 dark:border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary dark:text-primary-dark font-mono">
            Timeline
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mt-3">
            Education & Professional Training
          </h3>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Industrial Training */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h4 className="text-xl font-extrabold text-slate-900 dark:text-slate-50 flex items-center gap-2">
              <Award className="w-6 h-6 text-accent" />
              Specialized Training
            </h4>
            
            {portfolioData.training.map((train, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass p-6 sm:p-8 rounded-2xl border-l-4 border-l-accent flex flex-col gap-4 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow Overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

                <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-accent/10 text-accent dark:text-accent-dark self-start">
                  TICI Certified
                </span>
                
                <div className="flex flex-col gap-1.5">
                  <h5 className="text-lg font-extrabold text-slate-900 dark:text-slate-50 leading-snug">
                    {train.course}
                  </h5>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                    <Landmark className="w-4 h-4 shrink-0 text-slate-400" />
                    {train.institution}
                  </p>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono border-t border-slate-200/50 dark:border-slate-800/50 pt-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>Duration: {train.duration}</span>
                  </div>
                  <div>
                    <span>Result: <strong className="text-slate-800 dark:text-slate-200">{train.result}</strong></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Academic timeline */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h4 className="text-xl font-extrabold text-slate-900 dark:text-slate-50 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Academic History
            </h4>

            {/* Vertical timeline timeline */}
            <motion.div
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative pl-6 sm:pl-8 border-l border-slate-200 dark:border-slate-800 flex flex-col gap-8 ml-2 py-2"
            >
              {portfolioData.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Timeline point ring */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-bg-light dark:bg-bg-dark z-10 group-hover:scale-125 group-hover:bg-primary transition-all duration-300 shadow-sm" />
                  
                  <div className="flex flex-col gap-3">
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="text-xs font-mono font-bold text-primary dark:text-primary-dark">
                        Passing Year: {edu.passingYear}
                      </span>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/30 px-2.5 py-1 rounded-md self-start">
                        {edu.result}
                      </span>
                    </div>

                    {/* Degree & Inst */}
                    <div className="flex flex-col gap-1">
                      <h5 className="text-lg font-extrabold text-slate-900 dark:text-slate-50 group-hover:text-primary transition-colors leading-snug">
                        {edu.degree}
                      </h5>
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <Landmark className="w-4 h-4 text-slate-400" />
                        {edu.institution}
                      </p>
                    </div>
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
