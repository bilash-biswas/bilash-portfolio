"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { MapPin, Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

// Define the validation schema using Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    try {
      // Check if credentials are set. If not, fallback to simulation mode.
      if (!serviceId || !templateId || !publicKey) {
        // Simulate networking delay
        await new Promise((resolve) => setTimeout(resolve, 1500));
        
        console.log("EmailJS credentials not set. Simulated form submission:", data);
        setSubmitStatus("success");
        setStatusMessage(
          "Message submitted successfully (Simulation Mode)! Add your EmailJS API keys in .env to connect live."
        );
        reset();
      } else {
        const templateParams = {
          from_name: data.name,
          reply_to: data.email,
          subject: data.subject,
          message: data.message
        };

        const result = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
        );

        if (result.status === 200) {
          setSubmitStatus("success");
          setStatusMessage("Your message has been sent successfully. Thank you!");
          reset();
        } else {
          throw new Error("Failed to send message via EmailJS.");
        }
      }
    } catch (err: unknown) {
      console.error("Contact Form error:", err);
      setSubmitStatus("error");
      setStatusMessage("An error occurred while sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-grid-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary dark:text-primary-dark font-mono">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mt-3">
            Let&apos;s Build Something Great
          </h3>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass p-8 rounded-2xl flex flex-col justify-between h-full relative overflow-hidden group">
              {/* Orb glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col gap-8">
                <h4 className="text-2xl font-extrabold text-slate-900 dark:text-slate-50 leading-tight">
                  Contact Information
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  Have an exciting role, project, or concept to discuss? Fill out the form or reach out directly. I am always open to discussing new opportunities.
                </p>

                {/* Details list */}
                <div className="flex flex-col gap-6 mt-4">
                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center shrink-0 text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider font-mono">
                        Location
                      </span>
                      <span className="text-base font-semibold text-slate-800 dark:text-slate-200">
                        {portfolioData.contact.city}, {portfolioData.contact.country}
                      </span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center shrink-0 text-accent">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider font-mono">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${portfolioData.contact.email}`}
                        className="text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-primary transition-colors"
                      >
                        {portfolioData.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tagline footer card */}
              <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-8 mt-12 text-xs font-mono text-slate-400 dark:text-slate-500">
                Response timeframe: Typically within 24 hours.
              </div>
            </div>
          </div>

          {/* Right Block: Form Container */}
          <div className="lg:col-span-7">
            <div className="glass p-8 rounded-2xl relative">
              
              {/* Submission Notification Toast */}
              <AnimatePresence>
                {submitStatus !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mb-6 p-4 rounded-xl flex items-start gap-3 border ${
                      submitStatus === "success"
                        ? "bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300 border-emerald-200/50 dark:border-emerald-800/30"
                        : "bg-rose-50/50 dark:bg-rose-950/20 text-rose-800 dark:text-rose-300 border-rose-200/50 dark:border-rose-800/30"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    )}
                    <span className="text-sm font-medium leading-relaxed">{statusMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-bold text-slate-700 dark:text-slate-300 font-mono">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. John Doe"
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl border bg-white/40 dark:bg-slate-900/40 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                        errors.name
                          ? "border-rose-500 focus:ring-rose-500/50"
                          : "border-slate-200/80 dark:border-slate-800"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-rose-500 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300 font-mono">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. john@example.com"
                      {...register("email")}
                      className={`w-full px-4 py-3 rounded-xl border bg-white/40 dark:bg-slate-900/40 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                        errors.email
                          ? "border-rose-500 focus:ring-rose-500/50"
                          : "border-slate-200/80 dark:border-slate-800"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-rose-500 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-bold text-slate-700 dark:text-slate-300 font-mono">
                    Subject Line
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Collaboration Opportunity"
                    {...register("subject")}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/40 dark:bg-slate-900/40 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                      errors.subject
                        ? "border-rose-500 focus:ring-rose-500/50"
                        : "border-slate-200/80 dark:border-slate-800"
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-xs text-rose-500 font-mono mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300 font-mono">
                    Message Detail
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your project or questions..."
                    {...register("message")}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/40 dark:bg-slate-900/40 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none ${
                      errors.message
                        ? "border-rose-500 focus:ring-rose-500/50"
                        : "border-slate-200/80 dark:border-slate-800"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-rose-500 font-mono mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-4 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/25 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing Submission...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
