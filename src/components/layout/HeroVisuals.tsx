"use client";

import React from "react";
import { SkeletonImage } from "@/components/ui/SkeletonImage";
import {
  Server,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Globe,
  CheckCircle2,
  TrendingUp,
  Award,
  Building2,
  Clock,
  Sparkles,
  Lock,
  GitBranch,
  Activity,
  Code2,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

/**
 * Custom Visual for /services: Eco-Tech Engineering Architecture Cutout
 */
export const ServicesHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center select-none py-2 sm:py-4">
      {/* Ambient Multi-layered Emerald Glow */}
      <div className="absolute inset-0 bg-radial from-emerald-400/20 via-emerald-200/10 to-transparent rounded-full blur-3xl pointer-events-none scale-125" />
      <div className="absolute -bottom-4 w-3/4 h-8 bg-emerald-900/5 rounded-full blur-2xl pointer-events-none" />

      {/* Freely Floating Organic Tech Team Cutout */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full aspect-[1412/1114] max-w-xl lg:max-w-2xl z-10 flex items-center justify-center"
      >
        <SkeletonImage
          src="/assets/eco-tech-dashboard.webp"
          alt="Eagle Sora Engineering Services & Tech Architecture"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          quality={100}
          className="object-contain hover:scale-[1.02] transition-transform duration-500"
        />

        {/* Subtle Micro Badges for Context & Depth */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1 left-1 sm:-left-3 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-black text-[#0f2917]"
        >
          <Sparkles className="w-4 h-4 text-[#196d24]" />
          <span>Cloud & AI Matrix</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="absolute bottom-1 right-1 sm:-right-3 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-black text-[#0f2917]"
        >
          <CheckCircle2 className="w-4 h-4 text-[#196d24]" />
          <span>100% Scalable Core</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

/**
 * Custom Visual for /solutions: Enterprise Solutions & Intelligence Ecosystem Cutout
 */
export const SolutionsHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center select-none py-2 sm:py-4">
      {/* Ambient Multi-layered Emerald Glow */}
      <div className="absolute inset-0 bg-radial from-emerald-400/20 via-emerald-200/10 to-transparent rounded-full blur-3xl pointer-events-none scale-125" />
      <div className="absolute -bottom-4 w-3/4 h-8 bg-emerald-900/5 rounded-full blur-2xl pointer-events-none" />

      {/* Freely Floating Organic Solutions Cutout */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full aspect-[1412/1114] max-w-xl lg:max-w-2xl z-10 flex items-center justify-center"
      >
        <SkeletonImage
          src="/assets/solutions-page.webp"
          alt="Eagle Sora Enterprise Solutions & SaaS Platforms Ecosystem"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          quality={100}
          className="object-contain hover:scale-[1.02] transition-transform duration-500"
        />

        {/* Floating Badges */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1 left-1 sm:-left-3 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-black text-[#0f2917]"
        >
          <Sparkles className="w-4 h-4 text-[#196d24]" />
          <span>SoraAI™ Engine</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute bottom-1 right-1 sm:-right-3 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-black text-[#0f2917]"
        >
          <CheckCircle2 className="w-4 h-4 text-[#196d24]" />
          <span>SoraCommerce™ Scale</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

/**
 * Custom Visual for /roadmap: Strategic Execution Flight Deck Cutout
 */
export const RoadmapHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center select-none py-2 sm:py-4">
      {/* Ambient Multi-layered Emerald Glow */}
      <div className="absolute inset-0 bg-radial from-emerald-400/20 via-emerald-200/10 to-transparent rounded-full blur-3xl pointer-events-none scale-125" />
      <div className="absolute -bottom-4 w-3/4 h-8 bg-emerald-900/5 rounded-full blur-2xl pointer-events-none" />

      {/* Freely Floating Organic Roadmap Cutout */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full aspect-[1412/1114] max-w-xl lg:max-w-2xl z-10 flex items-center justify-center"
      >
        <SkeletonImage
          src="/assets/roadmap-page.webp"
          alt="Eagle Sora Strategic Execution Flight Deck & 3-Year Roadmap"
          fill
          priority
          quality={100}
          className="object-contain hover:scale-[1.02] transition-transform duration-500"
        />

        {/* Floating Badges */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1 left-1 sm:-left-3 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-black text-[#0f2917]"
        >
          <TrendingUp className="w-4 h-4 text-[#196d24]" />
          <span>Phase 1 Active &bull; 100%</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute bottom-1 right-1 sm:-right-3 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-black text-[#0f2917]"
        >
          <Sparkles className="w-4 h-4 text-[#196d24]" />
          <span>2026–2028 Trajectory</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

/**
 * Custom Visual for /about: Organic Team Botanical Illustration (Enlarged, 100% Badge-free & Card-free)
 */
export const AboutHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center select-none py-4">
      {/* Ambient Radial Emerald Glow */}
      <div className="absolute inset-0 bg-emerald-400/25 rounded-full blur-3xl pointer-events-none scale-125" />

      {/* Freely Floating Organic Team Cutout - Enlarged & Prominent */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full aspect-[4/3] max-w-xl lg:max-w-2xl z-10 flex items-center justify-center scale-110 sm:scale-115 lg:scale-125"
      >
        <SkeletonImage
          src="/assets/about-team-cutout.webp"
          alt="Eagle Sora Leadership & Engineering Team"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          quality={100}
          className="object-contain drop-shadow-[0_25px_45px_rgba(25,109,36,0.22)] hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
    </div>
  );
};

/**
 * Custom Visual for /careers: Talent Acquisition & Engineering Culture Cutout
 */
export const CareersHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center select-none py-2 sm:py-4">
      {/* Ambient Multi-layered Emerald Glow */}
      <div className="absolute inset-0 bg-radial from-emerald-400/20 via-emerald-200/10 to-transparent rounded-full blur-3xl pointer-events-none scale-125" />
      <div className="absolute -bottom-4 w-3/4 h-8 bg-emerald-900/5 rounded-full blur-2xl pointer-events-none" />

      {/* Freely Floating Organic Careers Team Cutout */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full aspect-[1412/1114] max-w-xl lg:max-w-2xl z-10 flex items-center justify-center"
      >
        <SkeletonImage
          src="/assets/careers-page.webp"
          alt="Eagle Sora Careers & Talent Acquisition Team"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          quality={100}
          className="object-contain hover:scale-[1.02] transition-transform duration-500"
        />

        {/* Floating Badges */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1 left-1 sm:-left-3 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-black text-[#0f2917]"
        >
          <Sparkles className="w-4 h-4 text-[#196d24]" />
          <span>We&apos;re Actively Hiring</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute bottom-1 right-1 sm:-right-3 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-black text-[#0f2917]"
        >
          <Users className="w-4 h-4 text-[#196d24]" />
          <span>6 Open Tech Roles</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

/**
 * Custom Visual for /contact: Direct Strategic Inquiries & Architecture Dispatch Cutout
 */
export const ContactHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center select-none py-2 sm:py-4">
      {/* Ambient Multi-layered Emerald Glow */}
      <div className="absolute inset-0 bg-radial from-emerald-400/20 via-emerald-200/10 to-transparent rounded-full blur-3xl pointer-events-none scale-125" />
      <div className="absolute -bottom-4 w-3/4 h-8 bg-emerald-900/5 rounded-full blur-2xl pointer-events-none" />

      {/* Freely Floating Organic Contact Cutout */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full aspect-[1412/1114] max-w-xl lg:max-w-2xl z-10 flex items-center justify-center"
      >
        <SkeletonImage
          src="/assets/contact-page.webp"
          alt="Eagle Sora Direct Strategic Inquiries & Client Consultation"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          quality={100}
          className="object-contain hover:scale-[1.02] transition-transform duration-500"
        />

        {/* Floating Badges */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1 left-1 sm:-left-3 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-black text-[#0f2917]"
        >
          <Clock className="w-4 h-4 text-[#196d24]" />
          <span>&lt; 2-Hour Response SLA</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute bottom-1 right-1 sm:-right-3 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-black text-[#0f2917]"
        >
          <Sparkles className="w-4 h-4 text-[#196d24]" />
          <span>Direct Architect Access</span>
        </motion.div>
      </motion.div>
    </div>
  );
};
