"use client";

import React from "react";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { CheckCircle2, Circle, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 bg-[#f0f8f3] relative overflow-hidden">
      {/* Background Artwork Overlay */}
      <div className="absolute inset-0 z-0 opacity-55 pointer-events-none">
        <Image
          src="/assets/framing-wave-bg.webp"
          alt="Framing Wave Background"
          fill
          quality={100}
          className="object-cover object-center contrast-[1.25] brightness-[1.02] mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-200/60 text-[#196d24] text-xs font-bold uppercase tracking-wider">
            STRATEGIC GROWTH PLAN
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2917]">
            Future Roadmap &{" "}
            <span className="text-[#196d24]">
              Expansion Strategy.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            A 4-phase strategic trajectory scaling product expansion, global delivery hubs, quantum R&D, and enterprise operations.
          </p>
        </div>

        {/* 4 Phase Timeline Horizontal/Vertical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.roadmap.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className={`p-6 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between ${
                item.status === "active"
                  ? "bg-white border-2 border-[#196d24] shadow-xl"
                  : "bg-white/90 border border-emerald-100/90 shadow-sm hover:shadow-md"
              }`}
            >
              <div>
                {/* Phase Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3.5 py-1 rounded-full text-xs font-extrabold tracking-wide uppercase ${
                      item.status === "active"
                        ? "bg-[#196d24] text-white"
                        : "bg-emerald-100 text-[#196d24]"
                    }`}
                  >
                    {item.phase}
                  </span>

                  {item.status === "active" ? (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-[#196d24]">
                      <Clock className="w-3.5 h-3.5 animate-spin" /> In Execution
                    </span>
                  ) : (
                    <span className="text-[11px] font-bold text-slate-500">
                      Scheduled
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-black text-[#0f2917] mb-2">
                  {item.title}
                </h3>
                
                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Milestones list */}
                <div className="space-y-2 mb-6">
                  {item.milestones.map((ms, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#196d24] shrink-0 mt-0.5" />
                      <span>{ms}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
                <span>Phase 0{index + 1} Target</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#196d24]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
