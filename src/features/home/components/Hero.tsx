"use client";

import React from "react";
import Image from "next/image";
import { SkeletonImage } from "@/components/ui/SkeletonImage";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { ArrowRight, BarChart3, Cloud, Users, Lightbulb, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-auto lg:min-h-screen pt-14 sm:pt-24 pb-8 sm:pb-20 overflow-hidden flex items-center bg-[#f4f9f4]"
    >
      {/* Background Artwork: Serene Pastel Cityscape Waves Overlay */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <Image
          src="/assets/Serene Pastel Cityscape Waves.webp"
          alt="Serene Pastel Cityscape Waves Background"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* 3 Left 3D Green Leaves matching exact reference crop pixel-perfectly (12_46_27 PM.png) */}
      
      {/* 5 Static 3D Green Leaves matching reference mockup (12_46_27 PM.png) - FADED SOFT PASTEL LOOK */}
      
      {/* 5 3D Green Leaves matching reference mockup (12_46_27 PM.png) - ELEGANT ENTRANCE IN-ANIMATION */}
      
      {/* Leaf 1: Far Top-Left Corner */}
      <div className="absolute top-[18%] left-[2.5%] w-[42px] h-[60px] sm:w-[50px] sm:h-[72px] pointer-events-none z-10 opacity-60">
        <Image
          src="/assets/green-leaf-floating.webp"
          alt="Left Leaf 1 - Top Small"
          fill
          sizes="60px"
          className="object-contain mix-blend-multiply rotate-[20deg] brightness-[1.08] contrast-[0.9]"
        />
      </div>

      {/* Leaf 2: Middle-Left Main Large Leaf */}
      <div className="absolute top-[22%] left-[0.8%] w-[95px] h-[150px] sm:w-[115px] sm:h-[180px] pointer-events-none z-10 opacity-65">
        <Image
          src="/assets/green-leaf-floating.webp"
          alt="Left Leaf 2 - Middle Large"
          fill
          sizes="120px"
          className="object-contain mix-blend-multiply rotate-[22deg] brightness-[1.08] contrast-[0.9]"
        />
      </div>

      {/* Leaf 3: Lower-Left Medium Leaf */}
      <div className="absolute top-[58%] left-[2.2%] w-[58px] h-[90px] sm:w-[68px] sm:h-[105px] pointer-events-none z-10 opacity-60">
        <Image
          src="/assets/green-leaf-floating.webp"
          alt="Left Leaf 3 - Lower Medium"
          fill
          sizes="70px"
          className="object-contain mix-blend-multiply rotate-[145deg] brightness-[1.08] contrast-[0.9]"
        />
      </div>

      {/* Leaf 4: Bottom-Center Area */}
      <div className="absolute bottom-[22%] left-[50%] w-14 h-10 sm:w-16 sm:h-12 pointer-events-none z-10 opacity-60">
        <Image
          src="/assets/green-leaf-floating.webp"
          alt="Static Leaf 4 - Bottom Center"
          fill
          sizes="64px"
          className="object-contain mix-blend-multiply rotate-[-30deg] brightness-[1.08] contrast-[0.9]"
        />
      </div>

      {/* Leaf 5: Far Right Edge */}
      <div className="absolute top-[44%] right-[3.5%] w-16 h-12 sm:w-18 sm:h-13 pointer-events-none z-10 opacity-60">
        <Image
          src="/assets/green-leaf-floating.webp"
          alt="Static Leaf 5 - Far Right"
          fill
          sizes="72px"
          className="object-contain mix-blend-multiply scale-x-[-1] rotate-[-25deg] brightness-[1.08] contrast-[0.9]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTA (Zero opacity-0 delay, always 100% visible) */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
            {/* Subtitle Tag matching exact reference typography: TECHNOLOGY • INNOVATION • TRANSFORMATION */}
            <div className="text-[10px] min-[375px]:text-xs sm:text-sm font-bold tracking-[0.14em] sm:tracking-[0.22em] text-[#196d24] uppercase flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span>TECHNOLOGY</span>
              <span className="text-[#196d24] font-extrabold text-sm sm:text-base">•</span>
              <span>INNOVATION</span>
              <span className="text-[#196d24] font-extrabold text-sm sm:text-base">•</span>
              <span>TRANSFORMATION</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl min-[360px]:text-4xl sm:text-5xl lg:text-[62px] font-black text-[#0f172a] leading-[1.12] tracking-tight">
              Building a{" "}
              <span className="text-[#196d24]">
                Smarter,
              </span>
              <br />
              <span className="text-[#196d24]">
                More Connected
              </span>
              <br />
              Digital Future.
            </h1>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-[#475569] max-w-xl leading-relaxed font-medium">
              We build custom software, digital platforms and technology solutions that empower businesses and contribute to a smarter, more connected digital nation.
            </p>

            {/* Action Buttons matching exact logo green shade (#196d24) */}
            <div className="flex flex-col min-[480px]:flex-row items-stretch min-[480px]:items-center gap-3 sm:gap-4 pt-2 sm:pt-3">
              {/* Primary Solid Logo Leaf Green Button */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#196d24] hover:bg-[#13551c] text-white text-sm sm:text-base font-bold transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 min-h-[46px]"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              {/* Secondary White/Green Outline Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-emerald-50/60 text-[#196d24] border-[1.8px] border-[#196d24] text-sm sm:text-base font-bold transition-all duration-200 shadow-sm hover:shadow-md min-h-[46px]"
              >
                <span>Talk to Our Team</span>
              </Link>
            </div>

            {/* Sub-Trust Badges */}
            <div className="pt-4 sm:pt-6 border-t border-emerald-200/70 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#64748b] font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#196d24]" />
                <span>Enterprise Security Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#196d24]" />
                <span>Zero Legacy Dependencies</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic with Floating Feature Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[340px] sm:min-h-[480px] lg:min-h-[560px]">
            {/* Ambient Background Glow */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-emerald-300/30 blur-3xl pointer-events-none" />

            {/* Hero Central Graphic Container - SLOW BOUNCE ANIMATION (NO ROTATION) */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[210px] h-[210px] min-[360px]:w-[240px] min-[360px]:h-[240px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] flex items-center justify-center z-10"
            >
              <SkeletonImage
                src="/assets/Swirling Green Leaf Emblem.webp"
                alt="Swirling Green Leaf Emblem"
                fill
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 380px, 440px"
                className="object-contain mix-blend-multiply drop-shadow-md"
                priority
              />
            </motion.div>

            {/* Connected Floating Feature Badges */}

            {/* Badge 1: Digital Transformation (Top-Left) */}
            <div className="absolute top-1 sm:top-4 left-0 sm:left-2 bg-[#f0f7f2]/95 backdrop-blur-md px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-sm flex items-center gap-2 sm:gap-3 border border-emerald-200/80 z-20 group">
              <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-[#196d24] stroke-[2.2] shrink-0" />
              <div className="text-[10px] sm:text-xs font-bold text-[#0f2917] leading-tight text-left">
                Digital<br />Transformation
              </div>

              {/* Refined Angled SVG Line fading towards center */}
              <div className="hidden sm:block absolute left-[98%] top-1/2 -translate-y-1/2 pointer-events-none z-10 w-44 h-24 overflow-visible">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 160 90" fill="none">
                  <defs>
                    <linearGradient id="fade-tl" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#196d24" stopOpacity="1" />
                      <stop offset="50%" stopColor="#196d24" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#196d24" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 5 20 L 65 20 L 145 75"
                    stroke="url(#fade-tl)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="5" cy="20" r="4" fill="#196d24" />
                </svg>
              </div>
            </div>

            {/* Badge 2: Scalable Technology (Middle-Left) */}
            <div className="absolute top-1/2 left-0 sm:left-0 -translate-y-1/2 bg-[#f0f7f2]/95 backdrop-blur-md px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-sm flex items-center gap-2 sm:gap-3 border border-emerald-200/80 z-20 group">
              <Cloud className="w-4 h-4 sm:w-5 sm:h-5 text-[#196d24] stroke-[2.2] shrink-0" />
              <div className="text-[10px] sm:text-xs font-bold text-[#0f2917] leading-tight text-left">
                Scalable<br />Technology
              </div>

              {/* Refined Horizontal SVG Line fading towards center */}
              <div className="hidden sm:block absolute left-[98%] top-1/2 -translate-y-1/2 pointer-events-none z-10 w-44 h-10 overflow-visible">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 160 40" fill="none">
                  <defs>
                    <linearGradient id="fade-ml" x1="0%" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="#196d24" stopOpacity="1" />
                      <stop offset="50%" stopColor="#196d24" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#196d24" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 5 20 L 150 20"
                    stroke="url(#fade-ml)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <circle cx="5" cy="20" r="4" fill="#196d24" />
                </svg>
              </div>
            </div>

            {/* Badge 3: Stronger Businesses (Bottom-Left) */}
            <div className="absolute bottom-1 sm:bottom-4 left-1 sm:left-10 bg-[#f0f7f2]/95 backdrop-blur-md px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-sm flex items-center gap-2 sm:gap-3 border border-emerald-200/80 z-20 group">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#196d24] stroke-[2.2] shrink-0" />
              <div className="text-[10px] sm:text-xs font-bold text-[#0f2917] leading-tight text-left">
                Stronger<br />Businesses
              </div>

              {/* Refined Angled SVG Line fading towards center */}
              <div className="hidden sm:block absolute left-[98%] top-1/2 -translate-y-1/2 pointer-events-none z-10 w-44 h-24 overflow-visible">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 160 90" fill="none">
                  <defs>
                    <linearGradient id="fade-bl" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#196d24" stopOpacity="1" />
                      <stop offset="50%" stopColor="#196d24" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#196d24" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 5 70 L 65 70 L 145 15"
                    stroke="url(#fade-bl)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="5" cy="70" r="4" fill="#196d24" />
                </svg>
              </div>
            </div>

            {/* Badge 4: Innovative Solutions (Top-Right) */}
            <div className="absolute top-4 sm:top-10 right-0 sm:right-2 bg-[#f0f7f2]/95 backdrop-blur-md px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-sm flex items-center gap-2 sm:gap-3 border border-emerald-200/80 z-20 group">
              <div className="hidden sm:block absolute right-[98%] top-1/2 -translate-y-1/2 pointer-events-none z-10 w-44 h-24 overflow-visible">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 160 90" fill="none">
                  <defs>
                    <linearGradient id="fade-tr" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#196d24" stopOpacity="1" />
                      <stop offset="50%" stopColor="#196d24" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#196d24" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 155 20 L 95 20 L 15 75"
                    stroke="url(#fade-tr)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="155" cy="20" r="4" fill="#196d24" />
                </svg>
              </div>

              <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-[#196d24] stroke-[2.2] shrink-0" />
              <div className="text-[10px] sm:text-xs font-bold text-[#0f2917] leading-tight text-left">
                Innovative<br />Solutions
              </div>
            </div>

            {/* Badge 5: Sustainable Growth (Bottom-Right) */}
            <div className="absolute bottom-4 sm:bottom-10 right-0 sm:right-2 bg-[#f0f7f2]/95 backdrop-blur-md px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-sm flex items-center gap-2 sm:gap-3 border border-emerald-200/80 z-20 group">
              <div className="hidden sm:block absolute right-[98%] top-1/2 -translate-y-1/2 pointer-events-none z-10 w-44 h-24 overflow-visible">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 160 90" fill="none">
                  <defs>
                    <linearGradient id="fade-br" x1="100%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#196d24" stopOpacity="1" />
                      <stop offset="50%" stopColor="#196d24" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#196d24" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 155 70 L 95 70 L 15 15"
                    stroke="url(#fade-br)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="155" cy="70" r="4" fill="#196d24" />
                </svg>
              </div>

              <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-[#196d24] stroke-[2.2] shrink-0" />
              <div className="text-[10px] sm:text-xs font-bold text-[#0f2917] leading-tight text-left">
                Sustainable<br />Growth
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
