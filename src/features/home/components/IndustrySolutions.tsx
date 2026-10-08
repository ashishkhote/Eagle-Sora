"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Landmark,
  HeartPulse,
  ShoppingCart,
  Truck,
  Briefcase,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Activity,
  Database,
  Cpu,
  Lock,
  Server,
  Layers,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ArchitectureNode {
  step: string;
  name: string;
  detail: string;
  tag: string;
}

interface IndustryItem {
  id: string;
  title: string;
  shortName: string;
  icon: React.ElementType;
  complianceTag: string;
  headline: string;
  description: string;
  deliverables: {
    title: string;
    description: string;
  }[];
  metrics: {
    value: string;
    label: string;
  }[];
  architectureFlow: ArchitectureNode[];
  colorTheme: string;
}

const industryList: IndustryItem[] = [
  {
    id: "fintech",
    title: "FinTech & Banking",
    shortName: "FinTech",
    icon: Landmark,
    complianceTag: "PCI-DSS v4.0 & SOC-2 Type II",
    headline: "High-Throughput Ledger Systems with Sub-Second Settlement",
    description:
      "We design ultra-resilient financial infrastructures engineered for continuous high-frequency operations, deterministic double-entry accounting, and instant fraud interception.",
    deliverables: [
      {
        title: "Deterministic General Ledger",
        description: "Zero-reconciliation double-entry ledgers with ACID compliance and full cryptographic audit trails.",
      },
      {
        title: "Real-Time AI Fraud Scoring",
        description: "Sub-15ms transactional risk inference using streaming feature stores and behavioural heuristics.",
      },
      {
        title: "Multi-Rail Payment Routing",
        description: "Intelligent failover across SWIFT, SEPA, ACH, and regional UPI payment gateways.",
      },
    ],
    metrics: [
      { value: "< 48ms", label: "P99 Transaction Latency" },
      { value: "99.999%", label: "Ledger Availability SLA" },
      { value: "$0", label: "Reconciliation Discrepancy" },
    ],
    architectureFlow: [
      { step: "01 / Ingress", name: "Multi-Rail Payment Gateway", detail: "Mutual TLS & Signed Webhooks", tag: "Encrypted" },
      { step: "02 / Compute", name: "Kafka Stream & Fraud AI", detail: "Sub-15ms Heuristic Inference", tag: "Real-time" },
      { step: "03 / Storage", name: "Immutable Ledger Database", detail: "Write-Ahead Log & WAL Checkpoints", tag: "ACID Safe" },
      { step: "04 / Settlement", name: "Automated Clearing House Router", detail: "Instant SWIFT / SEPA / UPI Dispatch", tag: "Settled" },
    ],
    colorTheme: "emerald",
  },
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    shortName: "Healthcare",
    icon: HeartPulse,
    complianceTag: "HIPAA, HITECH & ISO 27799",
    headline: "Zero-Trust Patient Ecosystems with Strict PHI Isolation",
    description:
      "From FHIR/HL7 clinical interoperability pipelines to ultra-low-latency WebRTC telemedicine portals, we build mission-critical digital health platforms that protect patient privacy at every byte.",
    deliverables: [
      {
        title: "HL7 & FHIR Interoperability",
        description: "Seamless data exchange bridges connecting EHR/EMR platforms (Epic, Cerner) with modern cloud apps.",
      },
      {
        title: "Zero-Knowledge PHI Vaults",
        description: "Field-level AES-256 encryption with client-side key management and immutable HIPAA audit logging.",
      },
      {
        title: "WebRTC Telehealth Engine",
        description: "End-to-end encrypted video consultations with automated clinical notes and prescription routing.",
      },
    ],
    metrics: [
      { value: "0", label: "Unencrypted PHI Footprint" },
      { value: "100%", label: "HIPAA Security Score" },
      { value: "< 120ms", label: "Telehealth WebRTC Latency" },
    ],
    architectureFlow: [
      { step: "01 / Ingress", name: "EHR / FHIR Interop Gateway", detail: "HL7 v2/v3, FHIR JSON Validation", tag: "Compliant" },
      { step: "02 / Security", name: "Zero-Knowledge Crypt Vault", detail: "Field-Level AES-256 HSM Encryption", tag: "Zero-Leak" },
      { step: "03 / Engine", name: "Clinical Decision Support AI", detail: "De-identified Diagnostic Assistance", tag: "Isolated" },
      { step: "04 / Portal", name: "Doctor & Patient WebRTC Hub", detail: "Encrypted Video & Telehealth Records", tag: "Live" },
    ],
    colorTheme: "teal",
  },
  {
    id: "ecommerce",
    title: "E-Commerce & High-Volume Retail",
    shortName: "E-Commerce",
    icon: ShoppingCart,
    complianceTag: "Ultra-Low Latency & High Concurrency",
    headline: "Headless Omnichannel Engines Built for Flash-Sale Traffic Surges",
    description:
      "We replace bloated legacy monoliths with lightning-fast headless commerce stacks, sub-10ms distributed search indexes, and resilient checkout pipelines that never drop an order.",
    deliverables: [
      {
        title: "Headless Commerce Architecture",
        description: "Decoupled Next.js storefronts with global edge CDN caching for sub-300ms page load times worldwide.",
      },
      {
        title: "Distributed Inventory Engine",
        description: "Real-time Redis multi-warehouse stock reservation preventing overselling during viral flash events.",
      },
      {
        title: "One-Click Checkout Pipelines",
        description: "Frictionless multi-currency checkouts integrated with Apple Pay, Google Pay, and localized gateways.",
      },
    ],
    metrics: [
      { value: "85,000+", label: "Concurrent Checkouts / Min" },
      { value: "< 240ms", label: "Global Edge Page Load" },
      { value: "4.2x", label: "Conversion Lift Over Monolith" },
    ],
    architectureFlow: [
      { step: "01 / Edge", name: "Headless Next.js Global CDN", detail: "ISR Caching & Dynamic Edge Hydration", tag: "Global" },
      { step: "02 / Cache", name: "Distributed Redis Inventory", detail: "Sub-5ms Atomic Stock Locks", tag: "Atomic" },
      { step: "03 / Checkout", name: "Asynchronous Payment Pipeline", detail: "Multi-Gateway Fallback & Tokenization", tag: "1-Click" },
      { step: "04 / Dispatch", name: "WMS / Multi-Carrier Router", detail: "Real-Time Label Generation & Tracking", tag: "Automated" },
    ],
    colorTheme: "green",
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    shortName: "Logistics",
    icon: Truck,
    complianceTag: "IoT MQTT v5 & Real-Time Telematics",
    headline: "Predictive Fleet Telematics & Automated Cold-Chain Routing",
    description:
      "We engineer enterprise fleet orchestration platforms, ingesting millions of IoT sensor events per second to optimize routing, monitor cargo temperatures, and automate multi-carrier EDI.",
    deliverables: [
      {
        title: "Real-Time Telematics Ingestion",
        description: "High-volume MQTT/Kafka broker processing GPS, speed, fuel, and diagnostic OBD-II data in real time.",
      },
      {
        title: "Algorithmic Route Optimization",
        description: "Dynamic routing algorithms factoring live traffic, road restrictions, delivery windows, and fuel efficiency.",
      },
      {
        title: "Automated Carrier EDI & Invoicing",
        description: "Paperless EDI 204/214/210 transaction automation with digital proof of delivery (e-POD) signoffs.",
      },
    ],
    metrics: [
      { value: "1.2M+", label: "Telemetry Pings / Minute" },
      { value: "22%", label: "Average Fuel Cost Reduction" },
      { value: "< 3 sec", label: "Automated Route Recalculation" },
    ],
    architectureFlow: [
      { step: "01 / Sensors", name: "OBD-II & Cold-Chain IoT Gateway", detail: "MQTT v5 Streaming over Cellular/Satellite", tag: "Ingestion" },
      { step: "02 / Processing", name: "Spatial Telematics Engine", detail: "Geo-Fencing & Anomaly Detection", tag: "Sub-Second" },
      { step: "03 / Dispatch", name: "Algorithmic Fleet Coordinator", detail: "Dynamic Multi-Stop Route Synthesis", tag: "Optimized" },
      { step: "04 / Terminal", name: "Driver PWA & Automated e-POD", detail: "Digital Bill of Lading & Carrier EDI", tag: "Paperless" },
    ],
    colorTheme: "emerald",
  },
  {
    id: "saas",
    title: "Enterprise SaaS & B2B Platforms",
    shortName: "Enterprise SaaS",
    icon: Briefcase,
    complianceTag: "SOC-2 Type II & Multi-Tenant VPC",
    headline: "Multi-Tenant Cloud Architectures Built for Enterprise Scale",
    description:
      "We architect high-margin B2B SaaS applications featuring strict schema-level tenant isolation, enterprise SSO, granular RBAC permissions, and automated usage-based metered billing.",
    deliverables: [
      {
        title: "Strict Tenant Isolation",
        description: "Row-Level Security (RLS) and dynamic database schema partitioning ensuring complete data isolation.",
      },
      {
        title: "Enterprise SSO & SCIM Directory",
        description: "Native Okta, Azure AD, and Google Workspace SAML 2.0 / OIDC integrations with automated SCIM provisioning.",
      },
      {
        title: "Usage-Based Metering & Billing",
        description: "Precision telemetry pipelines tracking API calls, seats, and compute usage connected directly to Stripe.",
      },
    ],
    metrics: [
      { value: "100%", label: "Tenant Data Isolation SLA" },
      { value: "< 15 min", label: "Enterprise SSO Onboarding" },
      { value: "99.99%", label: "Production API Uptime" },
    ],
    architectureFlow: [
      { step: "01 / Identity", name: "Enterprise SSO & SAML Gateway", detail: "Okta / Azure AD / SCIM Provisioning", tag: "Secure" },
      { step: "02 / Routing", name: "Dynamic Multi-Tenant Router", detail: "Tenant Context Injection & Rate Limiting", tag: "Isolated" },
      { step: "03 / Storage", name: "PostgreSQL with Schema RLS", detail: "Row-Level Security & Dedicated VPCs", tag: "Encrypted" },
      { step: "04 / Billing", name: "Telemetry Usage Metering Engine", detail: "Real-time Stripe Invoicing & Webhooks", tag: "Automated" },
    ],
    colorTheme: "teal",
  },
];

const visibleIndustryList = industryList.filter((item) =>
  ["healthcare", "ecommerce", "logistics"].includes(item.id),
);

export const IndustrySolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("healthcare");

  const currentIndustry =
    visibleIndustryList.find((item) => item.id === activeTab) || visibleIndustryList[0];
  const CurrentIcon = currentIndustry.icon;

  return (
    <section className="py-12 sm:py-20 lg:py-32 bg-[#f4faf6] relative overflow-hidden border-b border-emerald-100">
      {/* Ambient background mesh */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-teal-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-6 sm:pb-12 border-b border-emerald-200/80">
          <div className="max-w-3xl space-y-2.5 sm:space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-1 bg-[#196d24] rounded-full" />
              <span className="text-xs font-black uppercase tracking-widest text-[#196d24]">
                Domain Specialization
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0f2917] tracking-tight leading-[1.12]">
              We Build for <span className="text-[#196d24]">the Sectors</span> That Matter.
            </h2>

            <p className="text-sm sm:text-lg text-slate-600 font-medium leading-relaxed">
              Every vertical demands distinct compliance mandates, latency thresholds, and regulatory constraints.
              Explore how our battle-tested engineering blueprints solve real enterprise friction.
            </p>
          </div>

        </div>

        {/* 1. INTERACTIVE SECTOR SWITCHER (Interactive Pills - Modern Tab System) */}
        <div className="pt-5 sm:pt-8 pb-6 sm:pb-10">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-3 scrollbar-none">
            {visibleIndustryList.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === activeTab;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`group relative flex items-center gap-3 px-5 py-3.5 rounded-2xl font-bold text-sm whitespace-nowrap transition-all duration-300 select-none ${isActive
                    ? "bg-[#0f2917] text-white shadow-xl shadow-emerald-950/20 scale-[1.02]"
                    : "bg-white/80 hover:bg-white text-slate-700 hover:text-[#0f2917] border border-emerald-100/90 hover:border-emerald-300 shadow-sm"
                    }`}
                >
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${isActive
                      ? "bg-[#196d24] text-white"
                      : "bg-emerald-50 text-[#196d24] group-hover:bg-emerald-100"
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{item.title}</span>

                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. DYNAMIC DOMAIN BLUEPRINT SHOWCASE (Active Card Showcase) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndustry.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="bg-white rounded-3xl border border-emerald-200/90 shadow-2xl shadow-emerald-950/5 overflow-hidden"
          >
            {/* Top Spec Ribbon */}
            <div className="bg-[#0f2917] text-white px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-emerald-900/50">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#196d24] flex items-center justify-center text-white shrink-0 shadow-md shadow-black/20">
                  <CurrentIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-mono font-bold tracking-wider text-emerald-400">
                      Live Architectural Spec
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-xs text-slate-300 font-medium">Production Validated</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    {currentIndustry.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-900/80 text-emerald-300 border border-emerald-700/60">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {currentIndustry.complianceTag}
                </span>
              </div>
            </div>

            {/* Showcase Grid: Left Deep-Dive + Right Live Blueprint Schematic */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-emerald-100">

              {/* LEFT COLUMN: Narrative & Key Architectural Deliverables (7 cols) */}
              <div className="lg:col-span-7 p-4 min-[400px]:p-6 sm:p-10 space-y-6 sm:space-y-8">

                {/* Headline & Description */}
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-xl min-[400px]:text-2xl sm:text-3xl font-extrabold text-[#0f2917] tracking-tight leading-snug">
                    {currentIndustry.headline}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                    {currentIndustry.description}
                  </p>
                </div>

                {/* 3 Core Architectural Deliverables */}
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
                    Core Technical Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {currentIndustry.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-[#f7fbf8] hover:bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#196d24]/10 text-[#196d24] flex items-center justify-center mb-3 group-hover:bg-[#196d24] group-hover:text-white transition-colors">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <h5 className="text-sm font-bold text-[#0f2917] mb-1.5 leading-snug">
                          {item.title}
                        </h5>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Real-World Production Metrics */}
                <div className="bg-[#f0f7f2] border border-emerald-200/70 rounded-2xl p-4 sm:p-5">
                  <div className="grid grid-cols-1 min-[420px]:grid-cols-3 gap-3 sm:gap-4 text-center sm:text-left">
                    {currentIndustry.metrics.map((metric, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-xl sm:text-2xl font-black text-[#196d24] font-mono tracking-tight">
                          {metric.value}
                        </div>
                        <div className="text-[11px] sm:text-xs font-medium text-slate-600">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: Live Interactive Architectural Pipeline Diagram (5 cols) */}
              <div className="lg:col-span-5 p-4 min-[400px]:p-6 sm:p-10 bg-[#fafdfa] flex flex-col justify-between space-y-6">

                {/* Pipeline Header */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#196d24]" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0f2917]">
                        End-to-End Pipeline Schematic
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#196d24] bg-emerald-100 px-2 py-0.5 rounded">
                      Node Stream
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Live operational data-path mapped to enterprise security perimeter.
                  </p>
                </div>

                {/* Interactive Schematic Flow Nodes */}
                <div className="space-y-3 relative">
                  {/* Subtle connecting vertical line */}
                  <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-emerald-200 -z-0" />

                  {currentIndustry.architectureFlow.map((node, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="relative z-10 flex items-start gap-3.5 bg-white border border-emerald-100 hover:border-emerald-300 rounded-2xl p-3.5 shadow-sm hover:shadow-md transition-all group"
                    >
                      <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 text-[#196d24] font-mono text-xs font-bold flex items-center justify-center shrink-0 group-hover:bg-[#196d24] group-hover:text-white transition-colors">
                        {idx + 1}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                            {node.step}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-[#196d24] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                            {node.tag}
                          </span>
                        </div>
                        <h6 className="text-xs sm:text-sm font-extrabold text-[#0f2917] truncate mt-0.5">
                          {node.name}
                        </h6>
                        <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                          {node.detail}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Architectural Guarantee */}
                <div className="pt-2 border-t border-emerald-100/90 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-[#196d24]" />
                    <span className="font-medium">100% Dedicated VPC or On-Prem</span>
                  </div>
                  <span className="font-mono text-[11px] font-bold text-emerald-700">
                    Eagle Sora Verified
                  </span>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quick Grid Selector - Hidden on mobile to eliminate redundant scrolling */}
        <div className="hidden sm:grid mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-emerald-200/60 sm:grid-cols-3 gap-2.5 sm:gap-3">
          {visibleIndustryList.map((item) => {
            const Icon = item.icon;
            const isSelected = item.id === activeTab;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-left p-3.5 rounded-2xl border transition-all ${isSelected
                  ? "bg-white border-[#196d24] shadow-md shadow-emerald-950/10 ring-2 ring-emerald-500/20"
                  : "bg-white/60 hover:bg-white border-emerald-100 hover:border-emerald-200 shadow-sm"
                  }`}
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${isSelected ? "bg-[#196d24] text-white" : "bg-emerald-50 text-[#196d24]"}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-xs font-bold truncate ${isSelected ? "text-[#196d24]" : "text-[#0f2917]"}`}>
                    {item.shortName}
                  </span>
                </div>
                <div className="text-[10px] font-mono text-slate-500 truncate">
                  {item.complianceTag}
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
