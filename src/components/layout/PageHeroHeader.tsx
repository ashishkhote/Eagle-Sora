"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Sparkles } from "lucide-react";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { motion } from "framer-motion";

export interface OrbitalBadge {
  label: string;
  iconName?: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

interface PageHeroHeaderProps {
  badge: string;
  title: string;
  highlightText?: string;
  subtitle: string;
  pattern?: "cityscape" | "framing";
  trustChips?: string[];
  visualImage?: string;
  orbitalBadges?: OrbitalBadge[];
  visualCustom?: React.ReactNode;
}

export const PageHeroHeader: React.FC<PageHeroHeaderProps> = ({
  badge,
  title,
  highlightText,
  subtitle,
  pattern = "cityscape",
  trustChips = ["Enterprise Grade", "ISO 27001 Certified", "24/7 SLA Support"],
  visualImage = "/assets/hero-tech-sphere.webp",
  orbitalBadges,
  visualCustom,
}) => {
  const bgGraphic =
    pattern === "cityscape"
      ? "/assets/Serene Pastel Cityscape Waves.webp"
      : "/assets/framing-wave-bg.webp";

  const defaultOrbitalBadges: OrbitalBadge[] = [
    { label: "Enterprise Verified", iconName: "ShieldCheck", position: "top-left" },
    { label: "High Performance", iconName: "Zap", position: "top-right" },
    { label: "Scalable Cloud", iconName: "Cloud", position: "bottom-left" },
    { label: "100% Bespoke Code", iconName: "Cpu", position: "bottom-right" },
  ];

  const badgesToRender = orbitalBadges || defaultOrbitalBadges;

  return (
    <section className="relative pt-32 sm:pt-36 pb-20 sm:pb-24 bg-[#f4f9f4] overflow-hidden border-b border-emerald-100">
      {/* Background Artwork Layer (Matching Home Hero aesthetic) */}
      <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
        <Image
          src={bgGraphic}
          alt="Page Hero Background Artwork"
          fill
          sizes="100vw"
          quality={100}
          className="object-cover object-bottom contrast-[1.1] brightness-[1.02]"
          priority
        />
      </div>

      {/* Ambient Lighting Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-emerald-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none" />

      {/* Floating 3D Green Leaf Accents (Matching Home Hero) */}
      <div className="absolute top-[18%] left-[2%] w-12 h-20 pointer-events-none z-10 opacity-75">
        <Image
          src="/assets/green-leaf-floating.webp"
          alt="Floating Leaf Left"
          fill
          sizes="48px"
          className="object-contain mix-blend-multiply rotate-[22deg]"
        />
      </div>
      <div className="absolute bottom-[15%] right-[2%] w-14 h-22 pointer-events-none z-10 opacity-75">
        <Image
          src="/assets/green-leaf-floating.webp"
          alt="Floating Leaf Right"
          fill
          sizes="56px"
          className="object-contain mix-blend-multiply scale-x-[-1] -rotate-[25deg]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Title & Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-emerald-200 text-[#196d24] text-xs font-black tracking-widest uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#196d24]" />
              <span>{badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.12] text-[#0f172a]">
              {title}{" "}
              {highlightText && (
                <span className="text-[#196d24]">
                  {highlightText}
                </span>
              )}
            </h1>

            {/* Description Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            {/* Trust Badges Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              {trustChips.map((chip, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-emerald-200/90 text-xs font-bold text-[#0f2917] shadow-xs hover:border-[#196d24] transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#196d24]" />
                  <span>{chip}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Custom Visual or 3D Sphere Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center py-4"
          >
            {visualCustom ? (
              <div className="w-full relative z-10">{visualCustom}</div>
            ) : (
              <div className="relative w-full flex items-center justify-center">
                {/* Ambient Radial Glow */}
                <div className="absolute inset-0 bg-emerald-200/40 rounded-full blur-3xl scale-95 pointer-events-none" />

                {/* 3D Sphere Container with Circular Framing */}
                <div className="relative w-56 h-56 min-[360px]:w-64 min-[360px]:h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white/80 bg-white">
                    <Image
                      src={visualImage}
                      alt={`${title} Sphere`}
                      fill
                      priority
                      quality={100}
                      className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Dynamic Orbital Badges Floating Around the Sphere */}
                  {badgesToRender.map((b, i) => {
                    const positionClasses = {
                      "top-left": "-top-2 left-0 sm:-top-3 sm:-left-6",
                      "top-right": "-top-2 right-0 sm:-top-3 sm:-right-6",
                      "bottom-left": "-bottom-2 left-0 sm:-bottom-3 sm:-left-6",
                      "bottom-right": "-bottom-2 right-0 sm:-bottom-3 sm:-right-6",
                    }[b.position];

                    return (
                      <motion.div
                        key={b.label}
                        animate={{ y: i % 2 === 0 ? [0, -6, 0] : [0, 6, 0] }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3,
                        }}
                        className={`absolute ${positionClasses} bg-white/95 backdrop-blur-md text-[#0f2917] px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-emerald-200/90 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-black z-20 whitespace-nowrap`}
                      >
                        <DynamicIcon name={b.iconName || "Sparkles"} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#196d24]" size={16} />
                        <span>{b.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
