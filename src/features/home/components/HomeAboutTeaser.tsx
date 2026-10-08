"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, Zap, CheckCircle2, Terminal, Code2, Server, Lock, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Capability {
  id: string;
  num: string;
  tag: string;
  icon: typeof Cpu;
  title: string;
  headline: string;
  description: string;
  bullets: string[];
  consoleTitle: string;
  consoleMetrics: { label: string; value: string; status: string }[];
  consoleCode: string[];
}

const capabilities: Capability[] = [
  {
    id: "bespoke",
    num: "01",
    tag: "IP OWNERSHIP",
    icon: Cpu,
    title: "100% Bespoke & Full IP Rights",
    headline: "Zero off-the-shelf templates. Full patent-ready codebase.",
    description:
      "Every database schema, backend microservice, and frontend component is designed specifically for your operational domain with full Git rights transferred directly to you.",
    bullets: [
      "Zero vendor lock-in or recurring framework licensing fees",
      "Clean domain-driven design (DDD) with complete documentation",
      "Production-ready CI/CD pipelines & containerized deployment",
    ],
    consoleTitle: "architecture_manifest.v2.json",
    consoleMetrics: [
      { label: "IP Ownership", value: "100%", status: "Guaranteed" },
      { label: "Vendor Lock-in", value: "0%", status: "Zero Licensing" },
      { label: "Architecture", value: "Clean DDD", status: "Modular" },
    ],
    consoleCode: [
      "// Eagle Sora Bespoke Domain Spec",
      "export const systemConfig = {",
      '  ownership: "Client_Full_IP_Transfer",',
      '  git_repository: "Direct_Enterprise_Transfer",',
      '  licensing_fees: "$0_Zero_Royalties",',
      '  clean_code_audit: "Sonarqube_A_Grade",',
      '  reusability: "Domain_Specific_Microservices"',
      "};",
    ],
  },
  {
    id: "security",
    num: "02",
    tag: "COMPLIANCE",
    icon: ShieldCheck,
    title: "Zero-Trust & ISO 27001 Security",
    headline: "Bank-grade cryptography with automated CI/CD audits.",
    description:
      "Enterprise systems require continuous defense. We integrate automated SAST/DAST vulnerability scanning, granular role-based access control, and AES-256 encryption at rest and in transit.",
    bullets: [
      "Strict least-privilege Zero-Trust identity architecture",
      "Automated secret scanning and continuous dependency auditing",
      "GDPR, ISO 27001 & SOC 2 compliance-ready telemetry",
    ],
    consoleTitle: "security_posture_telemetry.log",
    consoleMetrics: [
      { label: "Encryption", value: "AES-256-GCM", status: "Active" },
      { label: "CI/CD SAST", value: "Zero Critical", status: "Verified" },
      { label: "Access Model", value: "RBAC Zero-Trust", status: "Enforced" },
    ],
    consoleCode: [
      "// Eagle Sora Zero-Trust Security Gate",
      "function verifyRequest(ctx: SecurityContext) {",
      '  await ctx.enforceZeroTrust({',
      '    encryption: "AES_256_GCM",',
      '    handshake: "TLS_1_3_Strict",',
      '    rbac: ctx.caller.hasVerifiedToken(),',
      '    auditLog: "Immutable_Tamper_Proof"',
      '  });',
      "}",
    ],
  },
  {
    id: "cloud",
    num: "03",
    tag: "PERFORMANCE",
    icon: Zap,
    title: "Cloud-Native Sub-100ms Scale",
    headline: "Built for 10x traffic surges with multi-cloud elasticity.",
    description:
      "Engineered on modern container orchestration with distributed edge caching and serverless scale across AWS, GCP, and Azure to guarantee 99.99% operational SLA.",
    bullets: [
      "Sub-80ms p99 API response latencies with edge distribution",
      "Kubernetes horizontal pod auto-scaling for sudden traffic spikes",
      "Multi-region failover and active-active database replication",
    ],
    consoleTitle: "cloud_mesh_topology.yaml",
    consoleMetrics: [
      { label: "API Latency (p99)", value: "< 75ms", status: "Global Edge" },
      { label: "Uptime SLA", value: "99.99%", status: "Contractual" },
      { label: "Concurrency", value: "10x Spikes", status: "Auto-scaled" },
    ],
    consoleCode: [
      "# Eagle Sora Multi-Region Cloud Spec",
      "topology:",
      "  provider: [AWS, GCP, Azure_Hybrid]",
      "  orchestration: Kubernetes_v1.31",
      "  scaling_policy:",
      "    target_cpu_utilization: 65%",
      "    p99_latency_sla_ms: 75",
      "    multi_region_failover: immediate_sync",
    ],
  },
];

export const HomeAboutTeaser: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const activeCap = capabilities[activeTab];

  return (
    <section className="py-20 sm:py-24 bg-[#f8faf9] border-y border-emerald-100/70 relative overflow-hidden">
      {/* Background Subtle Wave Overlay */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Image
          src="/assets/framing-wave-bg.webp"
          alt="Framing Wave Background"
          fill
          quality={100}
          className="object-cover object-center contrast-[1.2] brightness-[1.02] mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-emerald-100/80">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-0.5 bg-[#196d24] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#196d24]">
                Enterprise Engineering Philosophy
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2917] tracking-tight leading-[1.15]">
              Engineering Precision.{" "}
              <span className="text-[#196d24]">
                Enterprise Scale.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              We reject off-the-shelf templates and generic site builders. Every digital asset is architected as high-durability software with complete IP ownership.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white hover:bg-emerald-50 border border-emerald-200 text-[#0f2917] hover:text-[#196d24] font-bold text-sm shadow-sm transition-all group"
            >
              <span>Explore Company Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#196d24]" />
            </Link>
          </div>
        </div>

        {/* Asymmetric Interactive Architectural Layout — NO BOX CARDS! */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-12 items-start">
          
          {/* Left Column: Interactive Capability Selector */}
          <div className="lg:col-span-5 space-y-3">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 relative ${
                    isActive
                      ? "bg-white shadow-lg border-l-4 border-l-[#196d24] border-t border-r border-b border-emerald-100"
                      : "bg-transparent hover:bg-white/60 border border-transparent hover:border-emerald-100/60"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#196d24] text-white shadow-md shadow-emerald-900/20"
                          : "bg-emerald-100/70 text-[#196d24]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#196d24] font-bold">
                          {cap.tag}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-300">
                          {cap.num}
                        </span>
                      </div>
                      <h3
                        className={`text-base sm:text-lg font-bold transition-colors ${
                          isActive ? "text-[#0f2917]" : "text-slate-700"
                        }`}
                      >
                        {cap.title}
                      </h3>
                      {isActive && (
                        <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal leading-relaxed line-clamp-2">
                          {cap.description}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Bottom Official Registration Row */}
            <div className="pt-4 px-2 flex items-center gap-3 text-xs font-medium text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>MCA Registered &bull; EAGLE SORA TRANSCENDENT PVT LTD</span>
            </div>
          </div>

          {/* Right Column: Architectural Blueprint & Live Terminal Specs Console */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCap.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-[#0a1b10] border border-emerald-900/60 shadow-2xl overflow-hidden text-emerald-100"
              >
                {/* Console Top Window Bar */}
                <div className="px-5 py-3.5 bg-[#07140c] border-b border-emerald-900/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-3 text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" />
                      {activeCap.consoleTitle}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300/70 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
                    Production Verified
                  </span>
                </div>

                {/* Console Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Headline & Overview */}
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                      {activeCap.headline}
                    </h4>
                    <p className="text-sm text-emerald-200/80 font-normal leading-relaxed">
                      {activeCap.description}
                    </p>
                  </div>

                  {/* Real-time Engineering Metrics Strip */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#06120a] border border-emerald-900/40">
                    {activeCap.consoleMetrics.map((m, mi) => (
                      <div key={mi} className="text-center sm:text-left">
                        <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                          {m.label}
                        </div>
                        <div className="text-base sm:text-lg font-black text-white my-0.5">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-emerald-300/60 font-mono">
                          {m.status}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key Implementation Criteria */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                      Architectural Guarantees
                    </div>
                    {activeCap.bullets.map((b, bi) => (
                      <div key={bi} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Code / Config Snippet */}
                  <div className="rounded-xl bg-[#040c06] p-4 font-mono text-xs text-emerald-300 border border-emerald-900/30 overflow-x-auto">
                    {activeCap.consoleCode.map((line, li) => (
                      <div key={li} className="leading-relaxed">
                        <span className="text-emerald-800 select-none mr-3 inline-block w-4 text-right">
                          {li + 1}
                        </span>
                        <span className={line.startsWith("//") || line.startsWith("#") ? "text-emerald-600" : "text-emerald-200"}>
                          {line}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Status Footer */}
                <div className="px-6 py-3.5 bg-[#06120a] border-t border-emerald-900/40 flex items-center justify-between text-xs font-mono text-emerald-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Domain Architecture: Active
                  </span>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors underline flex items-center gap-1"
                  >
                    View System Specs <ArrowRight className="w-3.5 h-3.5" />
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
