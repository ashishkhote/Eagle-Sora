"use client";

import React from "react";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import {
  Building2,
  FileCheck,
  ShieldCheck,
  MapPin,
  Clock,
  Phone,
  Mail,
  Award,
  Globe2,
} from "lucide-react";
import { motion } from "framer-motion";

export const CorporateGovernance: React.FC = () => {
  return (
    <section className="py-24 bg-[#edf7f1] relative overflow-hidden">
      {/* Background artwork overlay */}
      <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
        <Image
          src="/assets/cityscape-wave-bg.webp"
          alt="Cityscape Wave Background"
          fill
          quality={100}
          className="object-cover object-bottom contrast-[1.25] brightness-[1.02] mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text & Badges */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-[#196d24] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#196d24]" />
              LEGAL ENTITY & COMPLIANCE
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2917] leading-tight">
              Enterprise Governance &{" "}
              <span className="text-[#196d24]">Corporate Profile.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              EAGLE SORA TRANSCENDENT PRIVATE LIMITED operates with strict corporate governance, audited compliance practices, and transparent engagement frameworks to protect customer interests and intellectual property.
            </p>

            {/* Credential Pills */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-emerald-200/90 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#196d24] flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-500">Corporate Identity</div>
                  <div className="text-sm sm:text-base font-extrabold text-[#0f2917]">
                    {siteContent.company.legalName}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-emerald-200/90 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#196d24] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-500">Registered Office & HQ</div>
                  <div className="text-sm sm:text-base font-extrabold text-[#0f2917] leading-snug">
                    {siteContent.company.address}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-emerald-200/90 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#196d24] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-500">Quality & Information Security</div>
                  <div className="text-sm sm:text-base font-extrabold text-[#0f2917]">
                    ISO 27001 Security Standard & Zero-Trust Engineering
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card: Factsheet & Operational Standards */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="p-8 sm:p-10 rounded-[32px] bg-white border border-emerald-200/90 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#196d24] text-white flex items-center justify-center font-black">
                    ES
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#0f2917]">Operational Factsheet</h3>
                    <p className="text-xs font-semibold text-slate-500">Verified Corporate Standing</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#196d24] text-xs font-bold uppercase">
                  ACTIVE • MCA
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#f8faf9] border border-emerald-100">
                  <div className="text-2xl font-black text-[#196d24]">100%</div>
                  <div className="text-xs font-bold text-slate-700 mt-1">IP & Code Handover</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#f8faf9] border border-emerald-100">
                  <div className="text-2xl font-black text-[#196d24]">99.9%</div>
                  <div className="text-xs font-bold text-slate-700 mt-1">Uptime SLA Standard</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#f8faf9] border border-emerald-100">
                  <div className="text-2xl font-black text-[#196d24]">50+</div>
                  <div className="text-xs font-bold text-slate-700 mt-1">Enterprise Deliveries</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#f8faf9] border border-emerald-100">
                  <div className="text-2xl font-black text-[#196d24]">24/7</div>
                  <div className="text-xs font-bold text-slate-700 mt-1">Critical SLA Response</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#f0f7f4] border border-emerald-200/70 space-y-2">
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#196d24] uppercase">
                  <FileCheck className="w-4 h-4" />
                  <span>Contractual Transparency</span>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Every engagement is protected by comprehensive bilateral NDAs, milestone-governed deliverables, verifiable Git repositories, and clear SLA schedules.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#196d24]" /> {siteContent.company.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#196d24]" /> {siteContent.company.phone}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
