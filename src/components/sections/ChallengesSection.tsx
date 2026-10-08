"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  Layers,
  Code2,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChallengePair {
  id: string;
  problemTitle: string;
  problemSubtitle: string;
  problemDetails: string[];
  solutionTitle: string;
  solutionHeadline: string;
  solutionDescription: string;
  metrics: { label: string; value: string };
  deliverables: string[];
}

const challengePairs: ChallengePair[] = [
  {
    id: "lock-in",
    problemTitle: "Vendor Lock-in & Trapped IP",
    problemSubtitle: "Annual recurring license fees with zero code access",
    problemDetails: [
      "20%+ recurring annual maintenance royalties",
      "No direct Git source code transfer",
      "Forced proprietary vendor ecosystems",
    ],
    solutionTitle: "100% Client Code & IP Ownership",
    solutionHeadline: "Zero royalties. Full Git repository transferred directly to you.",
    solutionDescription:
      "We build custom software as genuine work-for-hire. Upon milestone settlement, all repository rights, database schemas, and microservice architectures are legally transferred to your enterprise.",
    metrics: { label: "Vendor Royalties", value: "$0 Perpetual" },
    deliverables: [
      "Direct Git Repository Transfer with complete commit history",
      "Full copyright & IP assignment in commercial contract",
      "Clean documentation allowing in-house team takeover anytime",
    ],
  },
  {
    id: "architecture",
    problemTitle: "Legacy Monoliths & Slow Sprints",
    problemSubtitle: "Spaghetti codebases that crash under traffic surges",
    problemDetails: [
      "Rigid codebases prone to breaking with every new feature",
      "Sluggish sprint velocity taking months for minor changes",
      "Server crashes during seasonal traffic spikes",
    ],
    solutionTitle: "Modern Cloud-Native Microservices",
    solutionHeadline: "Domain-Driven Design (DDD) with sub-100ms response latencies.",
    solutionDescription:
      "We dismantle monolithic bottlenecks into decoupled, containerized microservices orchestrated on Kubernetes. Automated horizontal pod scaling absorbs 10x traffic surges without degradation.",
    metrics: { label: "API Response SLA", value: "< 80ms p99" },
    deliverables: [
      "Clean modular API contracts (REST, GraphQL, gRPC)",
      "Dockerized containers on auto-scaling Kubernetes clusters",
      "Multi-region database replication with sub-second failover",
    ],
  },
  {
    id: "security",
    problemTitle: "Compliance & Cyber Vulnerabilities",
    problemSubtitle: "Data breaches, compliance fines, and unencrypted leaks",
    problemDetails: [
      "DPDP Act, HIPAA, and GDPR compliance risks",
      "Reactive patching only after security incidents occur",
      "Insecure cloud configurations exposing client records",
    ],
    solutionTitle: "Zero-Trust & Bank-Grade Vaulting",
    solutionHeadline: "Continuous CI/CD vulnerability scanning with AES-256 encryption.",
    solutionDescription:
      "Security is engineered at the compiler level. We embed automated SAST/DAST scanners in every commit, enforce strict least-privilege RBAC, and vault all data at rest with AES-256 and TLS 1.3 in transit.",
    metrics: { label: "Security Rigor", value: "ISO 27001 Ready" },
    deliverables: [
      "Full alignment with India DPDP Act 2023 & GDPR mandates",
      "Zero-Trust role-based access control with MFA enforcement",
      "Immutable, tamper-proof audit trails for forensic compliance",
    ],
  },
  {
    id: "delivery",
    problemTitle: "Rigid Off-the-Shelf SaaS Limits",
    problemSubtitle: "Forcing your workflows into generic pre-packaged boxes",
    problemDetails: [
      "Bloated software with 80% features you never use",
      "Inability to integrate with custom in-house systems",
      "Extravagant per-user seat pricing that stunts team growth",
    ],
    solutionTitle: "Tailored High-Durability Platforms",
    solutionHeadline: "Software molded exactly to your operational workflows.",
    solutionDescription:
      "Instead of fitting your business into a rigid third-party template, we engineer platforms tailored to your distinct operational workflows—enabling limitless user scale without per-seat tax.",
    metrics: { label: "Cost Efficiency", value: "Zero Per-Seat Tax" },
    deliverables: [
      "Bespoke admin dashboards reflecting your exact metrics",
      "Custom integration connectors to existing enterprise ERPs/CRMs",
      "Scales freely across thousands of team members and customers",
    ],
  },
  {
    id: "talent",
    problemTitle: "Substandard Outsourcing & Junior Devs",
    problemSubtitle: "Endless layers of account managers with buggy handoffs",
    problemDetails: [
      "Agencies masking junior hires behind glossy pitch decks",
      "Lack of senior architectural oversight leading to bugs",
      "Poor communication across opaque multi-tier outsourcing",
    ],
    solutionTitle: "Direct Principal Architect Collaboration",
    solutionHeadline: "Senior technology leadership actively driving your engineering.",
    solutionDescription:
      "You collaborate directly with senior architects and elite tech leads. We hold bi-weekly sprint demos, continuous CI/CD preview builds, and transparent Slack/Teams engineering syncs.",
    metrics: { label: "Engineering Lead", value: "Direct Architect" },
    deliverables: [
      "Bi-weekly sprint demos with working production deployments",
      "Transparent engineering channels with direct lead engineer access",
      "Contractual 30-day post-launch warranty with zero surprise fees",
    ],
  },
];

export const ChallengesSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const activePair = challengePairs[selectedIdx];

  return (
    <section id="solutions" className="py-12 sm:py-20 lg:py-28 bg-white border-b border-emerald-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-8 sm:pb-14 border-b border-emerald-100">
          <div className="max-w-2xl space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-0.5 bg-[#196d24] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#196d24]">
                Enterprise Dilemma vs. Solution
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0f2917] tracking-tight leading-[1.15]">
              Real Problems.{" "}
              <span className="text-[#196d24]">
                Real Solutions.
              </span>
            </h2>

            <p className="text-sm sm:text-lg text-slate-600 font-medium leading-relaxed">
              Most enterprises face the same digital bottlenecks: vendor lock-in, legacy spaghetti code, and compliance risks. Here is how Eagle Sora solves them with custom engineering.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#196d24] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Proven Across 5 Core Bottlenecks</span>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Horizontal Tab Bar (< lg) */}
        <div className="lg:hidden pt-6 pb-2">
          <div className="text-[11px] font-mono uppercase text-slate-400 font-bold tracking-wider pb-2">
            Select Roadblock:
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {challengePairs.map((pair, index) => {
              const isSelected = selectedIdx === index;
              return (
                <button
                  key={pair.id}
                  onClick={() => setSelectedIdx(index)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#0f2917] text-white shadow-md shadow-emerald-950/20"
                      : "bg-[#f8faf9] text-slate-700 border border-slate-200/80 hover:bg-emerald-50/50"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-md flex items-center justify-center font-mono text-[10px] font-black ${
                      isSelected
                        ? "bg-amber-400 text-[#0f2917]"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{pair.problemTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 pt-2 lg:pt-10 items-start">
          
          {/* Desktop Left Column: Interactive Problem Selector (lg+) */}
          <div className="hidden lg:block lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider px-2 pb-1">
              Select Industry Roadblock:
            </div>

            {challengePairs.map((pair, index) => {
              const isSelected = selectedIdx === index;
              return (
                <button
                  key={pair.id}
                  onClick={() => setSelectedIdx(index)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 border text-left relative ${
                    isSelected
                      ? "bg-[#0f2917] text-white border-[#0f2917] shadow-xl shadow-emerald-950/20"
                      : "bg-[#f8faf9] hover:bg-emerald-50/50 text-slate-700 border-slate-200/70 hover:border-emerald-200"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono text-xs font-black shrink-0 transition-colors ${
                        isSelected
                          ? "bg-amber-400 text-[#0f2917]"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`text-sm sm:text-base font-black truncate ${isSelected ? "text-white" : "text-[#0f2917]"}`}>
                          {pair.problemTitle}
                        </h3>
                        <span
                          className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                            isSelected
                              ? "bg-emerald-900/60 text-emerald-300"
                              : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {isSelected ? "Active" : "Compare"}
                        </span>
                      </div>
                      <p className={`text-xs leading-relaxed line-clamp-1 ${isSelected ? "text-emerald-200/80" : "text-slate-500"}`}>
                        {pair.problemSubtitle}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: The Breakthrough Solution Deck */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePair.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl sm:rounded-3xl bg-[#f4faf6] border-2 border-emerald-300/80 p-4 sm:p-7 lg:p-9 shadow-xl relative overflow-hidden space-y-4 sm:space-y-6"
              >
                {/* Top Badge Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-emerald-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#196d24] text-white flex items-center justify-center shadow-md">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#196d24] font-black block">
                        THE EAGLE SORA RESOLUTION
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-[#0f2917]">
                        {activePair.solutionTitle}
                      </h3>
                    </div>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-full bg-white border border-emerald-200 shadow-xs flex items-center gap-2 text-xs font-mono font-bold text-[#196d24]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{activePair.metrics.label}: <strong>{activePair.metrics.value}</strong></span>
                  </div>
                </div>

                {/* Solution Headline & Explanation */}
                <div className="space-y-2">
                  <h4 className="text-xl sm:text-2xl font-black text-[#0f2917] tracking-tight leading-snug">
                    {activePair.solutionHeadline}
                  </h4>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {activePair.solutionDescription}
                  </p>
                </div>

                {/* Key Deliverables Checkmarks */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono uppercase text-[#196d24] font-black tracking-wider">
                    Contractual Architectural Guarantees:
                  </div>
                  <div className="space-y-2.5">
                    {activePair.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-emerald-100/90 shadow-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#196d24] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-4 border-t border-emerald-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 font-medium">
                    Ready to modernize this bottleneck?
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#196d24] hover:bg-[#13551c] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all group"
                  >
                    <span>Consult Senior Tech Lead</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
