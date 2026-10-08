"use client";

import React from "react";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { Target, Eye, Compass, CheckCircle2, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#f0f7f4] relative overflow-hidden">
      {/* Background Artwork Overlay */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <Image
          src="/assets/cityscape-wave-bg.webp"
          alt="Cityscape Wave Background"
          fill
          quality={100}
          className="object-cover object-bottom contrast-[1.25] brightness-[1.02] mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top 2-Column Row: Left Information + Right Corporate Image Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Tag */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-1 bg-[#196d24] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#196d24]">
                ABOUT US
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2917] leading-tight">
              Innovation with{" "}
              <span className="text-[#196d24]">
                Purpose.
              </span>
            </h2>

            {/* Main Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              {siteContent.company.aboutParagraph}
            </p>

            {/* Key Performance Stats Bar */}
            <div className="pt-6 border-t border-emerald-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              {siteContent.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-[#196d24]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-[#0f2917]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Corporate Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative pt-3 pr-3 pl-3 pb-8"
          >
            {/* Backing Light Green Decorative Accent Card - Tucked Inward */}
            <div className="absolute top-0.5 left-0.5 w-40 sm:w-48 h-40 sm:h-48 rounded-[28px] bg-[#cde8d3] -z-10 transition-all" />

            {/* Backing Solid Green Decorative Accent Card - Tucked Inward */}
            <div className="absolute top-0.5 right-0.5 w-40 sm:w-48 h-40 sm:h-48 rounded-[28px] bg-[#196d24] -z-10 transition-all" />

            {/* Floating 3D Green Leaves Accents */}
            <div className="absolute -top-4 right-8 w-12 h-18 z-20 opacity-80 pointer-events-none">
              <Image
                src="/assets/green-leaf-floating.webp"
                alt="Decorative Leaf Top"
                fill
                className="object-contain mix-blend-multiply rotate-[30deg]"
              />
            </div>
            <div className="absolute bottom-8 -right-4 w-14 h-22 z-20 opacity-80 pointer-events-none">
              <Image
                src="/assets/green-leaf-floating.webp"
                alt="Decorative Leaf Right"
                fill
                className="object-contain mix-blend-multiply -rotate-[20deg]"
              />
            </div>

            {/* Main Corporate Image Container */}
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-white">
              <div className="relative h-[380px] sm:h-[440px] w-full">
                <Image
                  src="/assets/about-team-discussion.webp"
                  alt="Eagle Sora Tech Team Discussion"
                  fill
                  priority
                  quality={100}
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Floating Bottom-Right Stadium Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bottom-0 right-2 sm:-right-4 bg-white/95 backdrop-blur-md px-6 py-4 rounded-3xl border border-emerald-200/90 shadow-2xl z-20 flex items-center gap-4 max-w-sm sm:max-w-md"
            >
              {/* Light Green Icon Badge */}
              <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 text-[#196d24] flex items-center justify-center shrink-0 shadow-sm">
                <Users className="w-6 h-6 stroke-[2.2]" />
              </div>

              {/* Typography Column */}
              <div className="text-left">
                <p className="text-xs sm:text-sm font-bold text-slate-700 leading-snug">
                  We don't just build technology,
                </p>
                <p className="text-sm sm:text-base font-black text-[#0f2917] leading-snug">
                  We build the future!!
                </p>
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* Full Width Bottom Row: Mission & Vision Unified Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14"
        >
          <div className="p-8 sm:p-10 rounded-[32px] bg-[#edf7f1] border border-emerald-200/90 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10 items-center">
              
              {/* Left: Our Mission */}
              <div className="relative pr-0 md:pr-10 border-b md:border-b-0 md:border-r border-emerald-200/90 pb-8 md:pb-0 flex items-start gap-5 overflow-hidden">
                {/* Target/Dart Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-[#c5e6cc] text-[#196d24] flex items-center justify-center shrink-0 shadow-sm z-10">
                  <Target className="w-7 h-7 stroke-[2.3]" />
                </div>
                
                <div className="space-y-2 relative z-10 max-w-sm sm:max-w-md">
                  <h3 className="text-xl sm:text-2xl font-black text-[#0f2917] tracking-tight">Our Mission</h3>
                  <p className="text-sm text-slate-700 font-semibold leading-relaxed">
                    {siteContent.company.mission}
                  </p>
                </div>

                {/* Mountain & Flag Watermark SVG Icon */}
                <svg
                  className="absolute bottom-0 right-2 w-32 h-32 text-[#196d24]/20 pointer-events-none z-0"
                  viewBox="0 0 120 120"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 105 L60 30 L105 105 Z" />
                  <path d="M40 105 L75 50 L100 105 Z" opacity="0.6" />
                  <line x1="60" y1="30" x2="60" y2="10" strokeWidth="3" />
                  <path d="M60 10 L85 18 L60 26 Z" fill="currentColor" fillOpacity="0.4" />
                </svg>
              </div>

              {/* Right: Our Vision */}
              <div className="relative pl-0 md:pl-4 flex items-start gap-5 overflow-hidden">
                {/* Eye Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-[#c5e6cc] text-[#196d24] flex items-center justify-center shrink-0 shadow-sm z-10">
                  <Eye className="w-7 h-7 stroke-[2.3]" />
                </div>

                <div className="space-y-2 relative z-10 max-w-sm sm:max-w-md">
                  <h3 className="text-xl sm:text-2xl font-black text-[#0f2917] tracking-tight">Our Vision</h3>
                  <p className="text-sm text-slate-700 font-semibold leading-relaxed">
                    {siteContent.company.vision}
                  </p>
                </div>

                {/* Globe & Upward Growth Arrow Watermark SVG Icon */}
                <svg
                  className="absolute bottom-0 right-2 w-32 h-32 text-[#196d24]/20 pointer-events-none z-0"
                  viewBox="0 0 120 120"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="55" cy="65" r="38" />
                  <ellipse cx="55" cy="65" rx="38" ry="16" />
                  <line x1="55" y1="27" x2="55" y2="103" />
                  <path d="M20 95 Q50 60 95 25" strokeWidth="3.5" />
                  <path d="M80 25 L97 23 L95 40" strokeWidth="3.5" fill="currentColor" fillOpacity="0.4" />
                </svg>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
