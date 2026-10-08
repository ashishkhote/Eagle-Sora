"use client";

import React from "react";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import {
  Code2,
  Smartphone,
  Cloud,
  Cpu,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  Server,
  GitBranch,
} from "lucide-react";
import { motion } from "framer-motion";

export const FeaturedServices: React.FC = () => {
  return (
    <section id="services" className="py-12 sm:py-20 lg:py-28 bg-[#f4faf6] relative overflow-hidden border-b border-emerald-100/70">
      {/* Ambient Radial Lighting */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-8 sm:pb-14 border-b border-emerald-200/80">
          <div className="max-w-2xl space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-0.5 bg-[#196d24] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#196d24]">
                Core Engineering Capabilities
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0f2917] tracking-tight leading-[1.15]">
              Engineering Services that move{" "}
              <span className="text-[#196d24]">
                business forward.
              </span>
            </h2>

            <p className="text-sm sm:text-lg text-slate-600 font-medium leading-relaxed">
              We design and deliver custom software, cloud backbones, and intelligent automations built to withstand enterprise volume without technical debt.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-[#196d24] hover:bg-[#13551c] text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-900/15 hover:shadow-xl hover:-translate-y-0.5 transition-all group"
            >
              <span>Explore All 5 Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Dynamic Bento Grid Layout (Completely Non-Linear!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 pt-6 sm:pt-10">

          {/* Card 1: Custom Software Engineering (7 Cols - Flagship Core) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 group rounded-2xl sm:rounded-3xl bg-white border border-emerald-200/90 hover:border-[#196d24] p-4 sm:p-7 lg:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none group-hover:bg-emerald-100/60 transition-colors" />

            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#196d24] text-white flex items-center justify-center shadow-md shadow-emerald-900/20 group-hover:scale-110 transition-transform">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#196d24] font-black block">
                      CORE ARCHITECTURE &bull; 01
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0f2917] group-hover:text-[#196d24] transition-colors">
                      Custom Software Development
                    </h3>
                  </div>
                </div>
                <Link
                  href="/services#custom-software"
                  className="w-10 h-10 rounded-full bg-emerald-50 text-[#196d24] flex items-center justify-center group-hover:bg-[#196d24] group-hover:text-white transition-all shrink-0"
                  aria-label="View Custom Software Development"
                >
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </Link>
              </div>

              <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-xl">
                We design and build bespoke backend microservices, high-throughput APIs, and clean domain-driven code tailored to your exact business workflows—with 100% intellectual property rights transferred to you.
              </p>

              {/* Architecture Feature Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {["Domain-Driven Design (DDD)", "Microservices & Event Streams", "PostgreSQL / Redis", "Zero Technical Debt"].map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] font-bold text-slate-700"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-emerald-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-bold font-mono">
                <GitBranch className="w-4 h-4 text-[#196d24]" />
                <span>Full Git Rights &bull; Zero Royalties</span>
              </div>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                100% Bespoke Code
              </span>
            </div>
          </motion.div>

          {/* Card 2: Web & Mobile App Development (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 group rounded-2xl sm:rounded-3xl bg-white border border-emerald-200/90 hover:border-[#196d24] p-4 sm:p-7 lg:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="relative z-10 space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-teal-700 font-black block">
                      DIGITAL EXPERIENCE &bull; 02
                    </span>
                    <h3 className="text-lg sm:text-2xl font-black text-[#0f2917] group-hover:text-[#196d24] transition-colors">
                      Web & Mobile Apps
                    </h3>
                  </div>
                </div>
                <Link
                  href="/services#web-mobile"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-all shrink-0"
                  aria-label="View Web & Mobile Apps"
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform" />
                </Link>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                From progressive web apps (PWAs) to cross-platform iOS & Android apps with sub-second page loads, responsive navigation, and high-conversion UX.
              </p>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {["Next.js Turbopack", "React Native", "iOS & Android", "PWA Offline Mode"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg sm:rounded-xl bg-teal-50/70 border border-teal-200/60 text-[10px] sm:text-[11px] font-bold text-teal-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-teal-100 flex items-center justify-between text-xs">
              <span className="text-teal-800 font-mono font-bold">&lt; 1.2s First Paint</span>
              <span className="text-teal-700 font-bold bg-teal-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-teal-200 text-[10px] sm:text-xs">
                Pixel-Perfect
              </span>
            </div>
          </motion.div>

          {/* Card 3: Cloud & Infrastructure Engineering (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 group rounded-2xl sm:rounded-3xl bg-white border border-emerald-200/90 hover:border-[#196d24] p-4 sm:p-7 lg:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="relative z-10 space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-sky-700 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Cloud className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sky-700 font-black block">
                      DEVOPS & MULTI-CLOUD &bull; 03
                    </span>
                    <h3 className="text-lg sm:text-2xl font-black text-[#0f2917] group-hover:text-[#196d24] transition-colors">
                      Cloud & Infrastructure
                    </h3>
                  </div>
                </div>
                <Link
                  href="/services#cloud"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-sky-50 text-sky-700 flex items-center justify-center group-hover:bg-sky-700 group-hover:text-white transition-all shrink-0"
                  aria-label="View Cloud Services"
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform" />
                </Link>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Zero-downtime multi-cloud migrations, automated Kubernetes clusters, and Infrastructure-as-Code (Terraform) built to withstand 10x traffic bursts.
              </p>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {["AWS & GCP VPCs", "Kubernetes (K8s)", "Terraform IaC", "Automated CI/CD"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg sm:rounded-xl bg-sky-50/70 border border-sky-200/60 text-[10px] sm:text-[11px] font-bold text-sky-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-sky-100 flex items-center justify-between text-xs">
              <span className="text-sky-800 font-mono font-bold">99.99% Availability</span>
              <span className="text-sky-700 font-bold bg-sky-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-sky-200 text-[10px] sm:text-xs">
                Multi-Region
              </span>
            </div>
          </motion.div>

          {/* Card 4: AI & Emerging Tech Integration (7 Cols - Flagship Tech) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 group rounded-2xl sm:rounded-3xl bg-white border border-emerald-200/90 hover:border-[#196d24] p-4 sm:p-7 lg:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none group-hover:bg-emerald-100/60 transition-colors" />

            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0f2917] text-emerald-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#196d24] font-black block">
                      ENTERPRISE INTELLIGENCE &bull; 04
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0f2917] group-hover:text-[#196d24] transition-colors">
                      AI & Emerging Tech Integration
                    </h3>
                  </div>
                </div>
                <Link
                  href="/services#ai-integration"
                  className="w-10 h-10 rounded-full bg-emerald-50 text-[#196d24] flex items-center justify-center group-hover:bg-[#196d24] group-hover:text-white transition-all shrink-0"
                  aria-label="View AI Services"
                >
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </Link>
              </div>

              <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-xl">
                Harnessing our proprietary SoraAI™ intelligence engine, custom vector embeddings, private LLMs, and autonomous workflow agents with an ironclad zero-data-retention guarantee.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {["SoraAI™ Semantic RAG", "Autonomous Multi-Agents", "Zero AI Model Training", "Private VPC LLMs"].map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] font-bold text-slate-700"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-emerald-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-[#0f2917] font-bold font-mono">
                <Sparkles className="w-4 h-4 text-[#196d24]" />
                <span>Zero Public LLM Training &bull; Private Tenant</span>
              </div>
              <span className="text-[#196d24] font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                SoraAI™ Powered
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
