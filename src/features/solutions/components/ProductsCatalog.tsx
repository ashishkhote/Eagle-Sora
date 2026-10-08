"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import {
  Sparkles,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Database,
  Lock,
  Cpu,
  Server,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";

export const ProductsCatalog: React.FC = () => {
  return (
    <div className="w-full">
      {/* 1. Overview Header Section */}
      <section className="py-16 bg-[#eef6f0] border-b border-emerald-200/60 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-[#196d24] text-xs font-bold uppercase tracking-wider">
            ENTERPRISE PLATFORMS & ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2917] leading-tight">
            Flagship Platforms Engineered for{" "}
            <span className="text-[#196d24]">
              High-Throughput Scale
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            In-depth architecture, technical specifications, and enterprise deployment models for our proprietary software suite: SoraAI™ intelligence orchestrator and SoraCommerce™ headless commerce engine.
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/90 border border-emerald-200/70 shadow-sm text-center">
              <div className="text-2xl font-black text-[#196d24]">&lt; 100ms</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">API Response Latency</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/90 border border-emerald-200/70 shadow-sm text-center">
              <div className="text-2xl font-black text-[#196d24]">Zero</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Data Retention Risk</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/90 border border-emerald-200/70 shadow-sm text-center">
              <div className="text-2xl font-black text-[#196d24]">100%</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Customizable SDKs</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/90 border border-emerald-200/70 shadow-sm text-center">
              <div className="text-2xl font-black text-[#196d24]">99.99%</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Guaranteed SLA Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Full-Width Section 1: SoraAI™ Platform */}
      <section
        id="sora-ai"
        className="py-24 bg-[#f4faf6] border-b border-emerald-100/80 relative overflow-hidden"
      >
        {/* Background Artwork */}
        <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
          <Image
            src="/assets/cityscape-wave-bg.webp"
            alt="Cityscape Wave Background"
            fill
            quality={100}
            className="object-cover object-bottom contrast-[1.25] brightness-[1.02] mix-blend-multiply"
          />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: SoraAI Narrative & Meta */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Badge & Icon Header */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#196d24] text-white flex items-center justify-center shadow-lg shadow-emerald-800/20 shrink-0">
                  <Sparkles className="w-8 h-8 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-200/70 text-[#196d24]">
                    PROPRIETARY SAAS PLATFORM
                  </span>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2917] mt-1.5 leading-tight">
                    SoraAI™
                  </h3>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-lg font-bold text-[#196d24] leading-snug">
                Enterprise AI Automation & Intelligence Engine
              </p>

              {/* Descriptions */}
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                An advanced enterprise AI platform designed to automate complex multi-step workflows, analyze business intelligence data, and power domain-specific LLM assistants for teams.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Engineered with strict zero-data-retention security protocols, SoraAI™ connects directly to enterprise databases, internal document vaults, and CRM platforms to automate repetitive decision-making and generate contextual insights in real time.
              </p>

              {/* Deployment & Licensing Meta Box */}
              <div className="p-4 rounded-2xl bg-white/90 border border-emerald-200/90 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-slate-400 block tracking-wider">
                    Deployment Models
                  </span>
                  <span className="text-sm font-extrabold text-[#0f2917]">
                    Multi-Tenant Cloud, Dedicated VPC & Air-Gapped On-Premises
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-emerald-100 text-[#196d24] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              {/* CTA Action Button */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#196d24] hover:bg-[#13551c] text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-800/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all group"
                >
                  <span>Schedule SoraAI™ Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Key Capabilities & Architecture Cards */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Core Feature Matrix */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-[#196d24]" />
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#0f2917]">
                    Core SoraAI™ Capabilities
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Custom Vector Search",
                      desc: "Millisecond semantic retrieval across millions of enterprise files & databases.",
                    },
                    {
                      title: "Automated Workflows",
                      desc: "Multi-step autonomous execution pipelines with human-in-the-loop approvals.",
                    },
                    {
                      title: "Enterprise Data Privacy",
                      desc: "Zero-log compliance; your data is never used to train external public models.",
                    },
                    {
                      title: "Operational Dashboard",
                      desc: "Real-time analytics on token usage, latency, automation accuracy, and ROI.",
                    },
                  ].map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white/95 border border-emerald-200/80 shadow-sm space-y-2 hover:border-[#196d24] transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#196d24] shrink-0" />
                        <span className="text-sm font-extrabold text-[#0f2917]">
                          {feat.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed pl-6.5">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Highlights Box */}
              <div className="p-6 rounded-3xl bg-white border border-emerald-200/90 shadow-md space-y-4">
                <div className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-[#196d24]" />
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#0f2917]">
                    SoraAI™ Architecture Specs
                  </h4>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
                    <span className="w-2 h-2 rounded-full bg-[#196d24]" />
                    <span>REST & GraphQL Streaming APIs</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
                    <span className="w-2 h-2 rounded-full bg-[#196d24]" />
                    <span>SOC-2 & GDPR Encryption</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
                    <span className="w-2 h-2 rounded-full bg-[#196d24]" />
                    <span>Fine-Tuned Domain LLMs</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
                    <span className="w-2 h-2 rounded-full bg-[#196d24]" />
                    <span>Vector DB (Milvus / Pinecone)</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Full-Width Section 2: SoraCommerce™ Platform (Flipped Layout) */}
      <section
        id="soracommerce"
        className="py-24 bg-white border-b border-emerald-100/80 relative overflow-hidden"
      >
        {/* Background Artwork */}
        <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
          <Image
            src="/assets/framing-wave-bg.webp"
            alt="Framing Wave Background"
            fill
            quality={100}
            className="object-cover object-center contrast-[1.25] brightness-[1.02] mix-blend-multiply"
          />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column (Flipped to Right on Desktop): Specs & Capabilities */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 lg:order-2 space-y-6"
            >
              {/* Badge & Icon Header */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#196d24] text-white flex items-center justify-center shadow-lg shadow-emerald-800/20 shrink-0">
                  <ShoppingBag className="w-8 h-8 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-200/70 text-[#196d24]">
                    HIGH-THROUGHPUT COMMERCE ENGINE
                  </span>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2917] mt-1.5 leading-tight">
                    SoraCommerce™
                  </h3>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-lg font-bold text-[#196d24] leading-snug">
                Headless High-Throughput E-Commerce Platform
              </p>

              {/* Descriptions */}
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                A modular, lightning-fast e-commerce engine engineered for B2B and B2C enterprises requiring ultra-low latency catalog search, seamless payment routing, and global scale.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Designed to eliminate monolithic e-commerce bottlenecks, SoraCommerce™ features an event-driven microservices architecture capable of handling millions of concurrent SKUs, instant global checkout, and real-time omnichannel inventory synchronization.
              </p>

              {/* Deployment & Volume Meta Box */}
              <div className="p-4 rounded-2xl bg-[#f8fafc] border border-emerald-200/90 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-slate-400 block tracking-wider">
                    Infrastructure & Scale
                  </span>
                  <span className="text-sm font-extrabold text-[#0f2917]">
                    10,000+ Orders/Sec Peak Capacity & Sub-100ms Catalog API
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-emerald-100 text-[#196d24] flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
              </div>

              {/* CTA Action Button */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#196d24] hover:bg-[#13551c] text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-800/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all group"
                >
                  <span>Request SoraCommerce™ Walkthrough</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column (Flipped to Left on Desktop): Capabilities Grid */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 lg:order-1 space-y-6"
            >
              {/* Core Feature Matrix */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#196d24]" />
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#0f2917]">
                    Core SoraCommerce™ Modules
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Sub-100ms Search API",
                      desc: "Instant fuzzy filtering, faceted categorization, and real-time inventory checks.",
                    },
                    {
                      title: "Omnichannel Sync",
                      desc: "Unified inventory routing across retail POS, online storefronts, and marketplaces.",
                    },
                    {
                      title: "Multi-Currency & Tax",
                      desc: "Dynamic geo-located tax calculating, multi-currency settlement & payment fallback.",
                    },
                    {
                      title: "Headless React SDK",
                      desc: "Drop-in frontend React components, cart hooks, and high-converting checkout flows.",
                    },
                  ].map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#f8faf9] border border-emerald-200/80 shadow-sm space-y-2 hover:border-[#196d24] transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#196d24] shrink-0" />
                        <span className="text-sm font-extrabold text-[#0f2917]">
                          {feat.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed pl-6.5">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Highlights Box */}
              <div className="p-6 rounded-3xl bg-[#f8faf9] border border-emerald-200/90 shadow-md space-y-4">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-[#196d24]" />
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#0f2917]">
                    SoraCommerce™ Architecture Specs
                  </h4>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-emerald-100 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#196d24]" />
                    <span>Global Edge CDN Caching</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-emerald-100 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#196d24]" />
                    <span>PCI-DSS Level 1 Security Mesh</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-emerald-100 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#196d24]" />
                    <span>B2B Bulk Pricing & Credit Lines</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-emerald-100 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#196d24]" />
                    <span>Automated Carrier & Tracking APIs</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};
