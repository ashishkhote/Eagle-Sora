"use client";

import React from "react";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { CheckCircle2, ShieldCheck, ArrowRight, Sparkles, FileText, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export const DetailedServicesSection: React.FC = () => {

  const sectionBgs = [
    "bg-[#f4faf6]",
    "bg-white",
    "bg-[#edf7f1]",
    "bg-white",
    "bg-[#f5fbf7]"
  ];

  return (
    <div className="w-full">
      {/* Overview Header Section */}
      <section className="py-16 bg-[#eef6f0] border-b border-emerald-200/60 relative overflow-hidden">
        {/* Background Artwork Overlay */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Image
            src="/assets/framing-wave-bg.webp"
            alt="Framing Wave Background"
            fill
            quality={100}
            className="object-cover object-center contrast-[1.25] brightness-[1.02] mix-blend-multiply"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-200/80 text-[#196d24] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-[#196d24]" />
            ENTERPRISE SERVICE PORTFOLIO
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2917] leading-tight">
            Tailored Engineering for{" "}
            <span className="text-[#196d24]">
              Modern Enterprise.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Explore our core engineering capabilities, cloud infrastructure, AI automation, and cybersecurity compliance offerings built for scale.
          </p>
        </div>
      </section>

      {/* Full-Width Independent Service Sections (No Outer Card Boxes!) */}
      {siteContent.services.map((srv, index) => {
        const bgStyle = sectionBgs[index % sectionBgs.length];
        const isFlipped = index % 2 !== 0;

        return (
          <section
            key={srv.id}
            id={srv.id}
            className={`py-20 ${bgStyle} border-b border-emerald-100/80 relative overflow-hidden`}
          >
            {/* Ambient Lighting Glow */}
            <div className={`absolute top-0 ${isFlipped ? "left-0" : "right-0"} w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none`} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Information Column */}
                <motion.div
                  initial={{ opacity: 0, x: isFlipped ? 25 : -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-6 space-y-6 ${isFlipped ? "lg:order-2" : "lg:order-1"}`}
                >
                  {/* Category Badge & Icon */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#196d24] text-white flex items-center justify-center shadow-lg shadow-emerald-800/20 shrink-0">
                      <DynamicIcon name={srv.iconName} size={28} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-200/70 text-[#196d24]">
                        {srv.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2917] mt-1.5 leading-tight">
                        {srv.title}
                      </h3>
                    </div>
                  </div>

                  {/* Descriptions */}
                  <p className="text-base sm:text-lg text-[#0f2917] font-semibold leading-relaxed">
                    {srv.shortDescription}
                  </p>

                  <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                    {srv.fullDescription}
                  </p>

                  {/* CTA Action Button */}
                  <div className="pt-2">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-[#196d24] hover:bg-[#0f2917] text-white font-bold text-sm shadow-xl shadow-emerald-800/20 hover:shadow-2xl transition-all group"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>

                {/* Specs & Deliverables Grid Column */}
                <motion.div
                  initial={{ opacity: 0, x: isFlipped ? -25 : 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-6 space-y-6 ${isFlipped ? "lg:order-1" : "lg:order-2"}`}
                >
                  {/* Key Capabilities Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-[#196d24]" />
                      <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#0f2917]">
                        Key Technical Capabilities
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {srv.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="p-3.5 rounded-2xl bg-white/90 border border-emerald-200/80 shadow-sm flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#196d24] shrink-0 mt-0.5" />
                          <span className="text-xs font-semibold text-slate-700 leading-snug">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Deliverables Section */}
                  <div className="pt-4 border-t border-emerald-200/70 space-y-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#196d24]" />
                      <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#0f2917]">
                        Core Project Deliverables
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {srv.deliverables.map((deliv, dIdx) => (
                        <div
                          key={dIdx}
                          className="p-3.5 rounded-2xl bg-[#edf7f1]/90 border border-emerald-200/80 flex items-start gap-3"
                        >
                          <ShieldCheck className="w-4 h-4 text-[#196d24] shrink-0 mt-0.5" />
                          <span className="text-xs font-bold text-[#0f2917] leading-snug">
                            {deliv}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};
