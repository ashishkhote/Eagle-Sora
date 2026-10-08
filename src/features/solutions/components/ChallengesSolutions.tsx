"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/siteContent";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const ChallengesSolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"challenges" | "solutions">("solutions");

  return (
    <section id="solutions" className="py-24 bg-[#fafcf6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-[#196d24] text-xs font-bold uppercase tracking-wider">
            TRANSFORMING INDUSTRY CHALLENGES INTO VALUE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2917]">
            Overcoming Legacy Barriers with{" "}
            <span className="text-[#196d24]">
              Modern Solutions.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            We deliver innovative, secure, and fully customized digital solutions that empower businesses to scale efficiently, adapt quickly, and stay ahead.
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex p-1.5 rounded-full bg-emerald-100/60 border border-emerald-200/80 mt-4">
            <button
              onClick={() => setActiveTab("solutions")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === "solutions"
                  ? "bg-[#196d24] text-white shadow-md"
                  : "text-slate-700 hover:text-[#0f2917]"
              }`}
            >
              Eagle Sora Solutions
            </button>
            <button
              onClick={() => setActiveTab("challenges")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === "challenges"
                  ? "bg-amber-600 text-white shadow-md"
                  : "text-slate-700 hover:text-[#0f2917]"
              }`}
            >
              Industry Pain Points
            </button>
          </div>
        </div>

        {/* Content Display */}
        {activeTab === "solutions" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {siteContent.solutions.map((sol, index) => (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-3xl bg-white border border-emerald-100/90 hover:border-[#196d24] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#196d24] text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                    <DynamicIcon name={sol.iconName} size={22} />
                  </div>
                  <h3 className="text-base font-extrabold text-[#0f2917] mb-2 leading-snug group-hover:text-[#196d24] transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                    {sol.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-emerald-100 flex items-center gap-2 text-[11px] font-bold text-[#196d24]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{sol.highlight}</span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.challenges.map((ch, index) => (
              <motion.div
                key={ch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-3xl bg-white border border-amber-200/80 hover:border-amber-500 transition-all shadow-sm hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5">
                    <DynamicIcon name={ch.iconName} size={22} />
                  </div>
                  <h3 className="text-base font-extrabold text-[#0f2917] mb-2">
                    {ch.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                    {ch.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-200/60 flex items-center gap-2 text-[11px] font-bold text-amber-700">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <span>{ch.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
