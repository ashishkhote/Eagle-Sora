"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Server,
  BrainCircuit,
  ShieldCheck,
  Smartphone,
  Users,
  Rocket,
  Heart,
  Clock,
  Globe,
  Zap,
  BookOpen,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  Sparkles,
  Coffee,
  Target,
  TrendingUp,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HiringProcessSection } from "./HiringProcessSection";

/* ─── Job Openings Data ─── */
const openRoles = [
  {
    id: "role-fullstack",
    title: "Full Stack Engineer",
    department: "Engineering",
    type: "Full-time",
    mode: "Hybrid",
    location: "Yavatmal / Remote",
    level: "Mid-Senior",
    icon: Code2,
    skills: ["React / Next.js", "Node.js / TypeScript", "PostgreSQL", "Docker"],
    description:
      "Build scalable web platforms and enterprise applications end-to-end. You will own features from database design through responsive UI.",
  },
  {
    id: "role-intern",
    title: "Software Engineering Intern",
    department: "Engineering",
    type: "Internship · 3–6 Months",
    mode: "Hybrid",
    location: "Yavatmal",
    level: "Entry",
    icon: Rocket,
    skills: ["JavaScript / TypeScript", "Git", "Any Web Framework"],
    description:
      "A high-intensity internship designed for top engineering students. You will contribute to real enterprise projects from day one under senior guidance.",
  },
];

/* ─── Culture Pillars ─── */
const culturePillars = [
  {
    icon: Target,
    title: "Engineering Excellence",
    description: "We obsess over code quality, system design, and delivering solutions that genuinely move the needle for clients.",
  },
  {
    icon: TrendingUp,
    title: "Rapid Growth",
    description: "Flat hierarchy, direct mentorship from Directors, and real ownership of impactful products from your first sprint.",
  },
  {
    icon: Globe,
    title: "Remote-Friendly",
    description: "Work from Yavatmal or anywhere in India. We judge output, not hours at a desk.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Conference budget, certification reimbursements, and internal tech talks every week.",
  },
  {
    icon: Heart,
    title: "People First",
    description: "Transparent salaries, mental health days, and a team that genuinely cares about your long-term career.",
  },
  {
    icon: Coffee,
    title: "Startup Energy",
    description: "Early stage means you help shape the culture, the product, and the company's trajectory. Your voice matters here.",
  },
];

/* ─── Perks ─── */
const perks = [
  { icon: Award, label: "Competitive Salary", detail: "Market-rate + performance bonus" },
  { icon: BookOpen, label: "Learning Budget", detail: "Courses, certs & conferences covered" },
  { icon: Clock, label: "Flexible Hours", detail: "Async-first, output-driven team" },
  { icon: Globe, label: "Remote Work", detail: "Hybrid or fully remote options" },
  { icon: Zap, label: "Fast Career Growth", detail: "Promotions based on merit, not tenure" },
  { icon: Users, label: "Small Elite Team", detail: "Work directly with Directors" },
  { icon: Star, label: "IP Ownership Credits", detail: "Contribute to SoraAI™ & SoraCommerce™" },
  { icon: Rocket, label: "Early Equity Track", detail: "Potential ESOP pathway for senior roles" },
];

/* ─── Role Card ─── */
function RoleCard({ role }: { role: typeof openRoles[0] }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = role.icon;

  return (
    <motion.div
      layout
      className="bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md hover:border-[#196d24]/40 transition-all overflow-hidden"
    >
      {/* Header Row */}
      <button
        id={`role-${role.id}`}
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 flex items-start gap-4"
      >
        <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 text-[#196d24] flex items-center justify-center shrink-0 mt-0.5">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-base font-black text-[#0f2917] mr-1">{role.title}</h3>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#196d24] text-[11px] font-bold uppercase tracking-wider">
              {role.level}
            </span>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 font-medium">
            <span>{role.department}</span>
            <span>•</span>
            <span>{role.type}</span>
            <span>•</span>
            <span>{role.mode}</span>
            <span>•</span>
            <span>{role.location}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {role.skills.map((s) => (
              <span
                key={s}
                className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-600"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="shrink-0 text-slate-400 mt-1">
          {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {/* Expandable Details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 border-t border-emerald-50 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed pt-4">{role.description}</p>
              <Link
                href={`/careers/apply?role=${encodeURIComponent(role.title)}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#196d24] hover:bg-[#13551c] text-white text-xs font-bold transition-all shadow-md hover:-translate-y-0.5"
              >
                Apply Now <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Main Component ─── */
export const CareersPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const departments = ["All", "Engineering", "Infrastructure", "Research & AI", "Compliance & Security", "Digital Experience"];

  const filtered =
    activeFilter === "All" ? openRoles : openRoles.filter((r) => r.department === activeFilter);

  return (
    <div className="bg-[#f8fafc]">

      {/* ── SECTION 1: Why Work With Us ── */}
      <section className="py-20 sm:py-24 bg-white border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-[#196d24] text-xs font-black uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> OUR CULTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f2917] leading-tight mb-4">
              Why Engineers{" "}
              <span className="text-[#196d24]">Choose Eagle Sora</span>
            </h2>
            <p className="text-base text-slate-600 font-medium leading-relaxed">
              We are a small but fast-moving team building enterprise-grade products. If you want real ownership and direct impact, you belong here.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturePillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-6 rounded-2xl bg-[#f4f9f4] border border-emerald-100 hover:border-[#196d24]/50 hover:shadow-md transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-emerald-200 text-[#196d24] flex items-center justify-center mb-4 group-hover:bg-[#196d24] group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-black text-[#0f2917] mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{p.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Perks & Benefits ── */}
      <section className="py-20 sm:py-24 bg-[#f4f9f4] border-b border-emerald-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-[#196d24] text-xs font-black uppercase tracking-wider mb-4">
              <Star className="w-3.5 h-3.5" /> PERKS & BENEFITS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f2917] leading-tight mb-4">
              We Take Care of <span className="text-[#196d24]">Our Team</span>
            </h2>
            <p className="text-base text-slate-600 font-medium">
              Competitive compensation and real benefits that make a difference in your day-to-day life.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={perk.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm hover:shadow-md hover:border-[#196d24]/40 transition-all text-center group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-[#196d24] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#196d24] group-hover:text-white transition-all">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <p className="text-xs font-black text-[#0f2917] mb-1">{perk.label}</p>
                  <p className="text-[11px] text-slate-500 font-medium">{perk.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Open Roles ── */}
      <section className="py-20 sm:py-24 bg-white border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-[#196d24] text-xs font-black uppercase tracking-wider mb-4">
              <Rocket className="w-3.5 h-3.5" /> OPEN POSITIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f2917] leading-tight mb-4">
              Find Your <span className="text-[#196d24]">Role</span>
            </h2>
            <p className="text-base text-slate-600 font-medium">
              We are actively hiring across engineering and product. Click any role to see details and apply.
            </p>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {departments.map((dep) => (
              <button
                key={dep}
                id={`filter-${dep.replace(/\s+/g, "-").toLowerCase()}`}
                onClick={() => setActiveFilter(dep)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all ${activeFilter === dep
                  ? "bg-[#196d24] text-white border-[#196d24] shadow-md"
                  : "bg-white text-slate-600 border-slate-200 hover:border-[#196d24] hover:text-[#196d24]"
                  }`}
              >
                {dep}
              </button>
            ))}
          </div>

          {/* Role Cards */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filtered.map((role) => (
                <motion.div
                  key={role.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <RoleCard role={role} />
                </motion.div>
              ))}
            </AnimatePresence>

            {filtered.length === 0 && (
              <p className="text-center text-sm text-slate-500 font-medium py-10">
                No open roles in this department right now. Check back soon or send us a general application.
              </p>
            )}
          </div>
        </div>
      </section>

      <HiringProcessSection />

      {/* ── SECTION 5: CTA — General Application ── */}
      <section className="py-20 sm:py-28 bg-[#0f2917] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_#4ade80_0%,_transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_#166534_0%,_transparent_60%)]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-800/60 text-emerald-300 text-xs font-black uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" /> DON&apos;T SEE YOUR ROLE?
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6">
            Send a General{" "}
            <span className="text-emerald-400">Application</span>
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/80 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            We are always looking for outstanding engineers, designers, and problem-solvers. If you believe you can contribute, reach out — we read every application.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/careers/apply"
              id="careers-apply-cta"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#0f2917] font-black text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Send Your Application <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`mailto:Ajaygorle886@gmail.com?subject=General Application - Eagle Sora`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
