"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, X, ArrowRight, ShieldCheck, Zap, Layers, Users2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const comparisonData = [
  {
    category: "Code Ownership & IP",
    agency: "Proprietary lock-in, recurring license fees, and partial access to source code",
    eagleSora: "100% Bespoke codebase with complete Git ownership & zero licensing royalties",
  },
  {
    category: "System Architecture",
    agency: "Generic monolithic boilerplates, brittle plugins, and off-the-shelf templates",
    eagleSora: "Clean Domain-Driven Design (DDD), containerized microservices, and modular APIs",
  },
  {
    category: "Security & Compliance",
    agency: "Standard SSL/HTTPS with reactive bug patching only after breaches occur",
    eagleSora: "Zero-Trust architecture, automated SAST/DAST in CI/CD, and ISO 27001 rigor",
  },
  {
    category: "Scalability & Latency",
    agency: "Shared hosting or unoptimized clusters prone to crashes under 2x traffic load",
    eagleSora: "Multi-cloud Kubernetes auto-scaling absorbing 10x traffic spikes with <80ms p99 latency",
  },
  {
    category: "Engineering Engagement",
    agency: "Layers of non-technical account managers and outsourced junior programmers",
    eagleSora: "Direct collaboration with senior software architects and dedicated 24/7 SLA",
  },
];

const highlights = [
  { label: "IP Ownership", val: "100%", desc: "Patent-Ready Transfer" },
  { label: "p99 API Latency", val: "< 80ms", desc: "Edge Distributed" },
  { label: "Deployment Speed", val: "2.5x", desc: "Faster Time-to-Market" },
  { label: "Uptime SLA", val: "99.99%", desc: "Contractually Guaranteed" },
];

export const WhyChooseUs: React.FC = () => {
  const [selectedCriteriaIdx, setSelectedCriteriaIdx] = useState(0);
  const activeRow = comparisonData[selectedCriteriaIdx];

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-[#f8faf9] relative overflow-hidden border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-16">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
          <div className="max-w-2xl space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-0.5 bg-[#196d24] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#196d24]">
                The Engineering Benchmark
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2917] tracking-tight leading-[1.15]">
              Why Leading Enterprises{" "}
              <span className="text-[#196d24]">
                Choose Eagle Sora.
              </span>
            </h2>
            <p className="text-sm sm:text-lg text-slate-600 font-medium leading-relaxed">
              We replace fragile dev shop models with true systems engineering. Here is how our approach compares directly against the industry standard.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#196d24] hover:bg-[#0f2917] text-white font-bold text-xs sm:text-sm shadow-md transition-all group"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Enterprise Comparison Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Mobile Comparison Interactive Switcher (< md) */}
          <div className="md:hidden space-y-3">
            <div className="text-[11px] font-mono uppercase text-slate-400 font-bold tracking-wider">
              Select Criterion to Compare:
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              {comparisonData.map((row, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCriteriaIdx(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCriteriaIdx === idx
                      ? "bg-[#0f2917] text-white shadow-sm"
                      : "bg-white text-slate-600 border border-slate-200"
                  }`}
                >
                  {row.category}
                </button>
              ))}
            </div>

            {/* Active Single Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRow.category}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl border border-emerald-100 p-4 space-y-3 shadow-xs"
              >
                <div className="flex items-center justify-between pb-2 border-b border-emerald-50">
                  <h3 className="text-sm font-bold text-[#0f2917]">
                    {activeRow.category}
                  </h3>
                  <span className="text-[10px] font-mono text-[#196d24] font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    {selectedCriteriaIdx + 1} / {comparisonData.length}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-500 bg-slate-50 p-2.5 rounded-xl">
                    <div className="w-4 h-4 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-600 block text-[10px] uppercase font-mono mb-0.5">
                        Traditional Agencies
                      </span>
                      <span className="leading-relaxed">{activeRow.agency}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs font-semibold text-[#0f2917] bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-200/60">
                    <div className="w-4 h-4 rounded-full bg-[#196d24] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <div>
                      <span className="font-bold text-[#196d24] block text-[10px] uppercase font-mono mb-0.5">
                        Eagle Sora Transcendent
                      </span>
                      <span className="leading-relaxed">{activeRow.eagleSora}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Architectural Data Table (md+) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-emerald-200">
                  <th className="py-4 pr-6 text-xs font-mono uppercase tracking-widest text-slate-400 font-bold w-1/4">
                    Engineering Criterion
                  </th>
                  <th className="py-4 px-6 text-xs font-mono uppercase tracking-widest text-slate-500 font-bold w-3/8 bg-slate-100/50 rounded-t-xl">
                    Traditional Dev Shops
                  </th>
                  <th className="py-4 pl-6 text-xs font-mono uppercase tracking-widest text-[#196d24] font-bold w-3/8 bg-emerald-50/70 rounded-t-xl">
                    EAGLE SORA TRANSCENDENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-100/80">
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-white/60 transition-colors group"
                  >
                    {/* Category Name */}
                    <td className="py-5 pr-6 text-sm font-bold text-[#0f2917] align-top">
                      {row.category}
                    </td>

                    {/* Traditional Agency */}
                    <td className="py-5 px-6 text-xs sm:text-sm text-slate-500 bg-slate-50/40 group-hover:bg-slate-50/70 transition-colors align-top leading-relaxed">
                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{row.agency}</span>
                      </div>
                    </td>

                    {/* Eagle Sora */}
                    <td className="py-5 pl-6 text-xs sm:text-sm font-semibold text-[#0f2917] bg-emerald-50/30 group-hover:bg-emerald-50/60 transition-colors align-top leading-relaxed">
                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#196d24] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{row.eagleSora}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Integrated Verified Performance Metrics Strip (Seamless open layout) */}
        <div className="pt-8 border-t border-emerald-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-emerald-200/80">
            {highlights.map((h, i) => (
              <div key={i} className={i !== 0 ? "pt-4 sm:pt-0 sm:pl-8" : ""}>
                <div className="text-3xl sm:text-4xl font-black text-[#196d24] tracking-tight">
                  {h.val}
                </div>
                <div className="text-sm font-bold text-[#0f2917] mt-1">
                  {h.label}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {h.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
