"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/siteContent";
import { Layers, Crosshair, ShieldCheck, MapPin, Cpu, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export const STPAnalysis: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"segmentation" | "targeting" | "positioning">("segmentation");

  return (
    <section className="py-24 bg-[#fafbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-[#196d24] text-xs font-bold uppercase tracking-wider">
            STP MARKET ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2917]">
            Segmentation, Targeting &{" "}
            <span className="text-[#196d24]">
              Positioning.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Delivering the future of digital innovation through tailored, secure, and scalable technology solutions across target industry verticals.
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab("segmentation")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === "segmentation"
                  ? "bg-[#196d24] text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-emerald-50 border border-emerald-100"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Segmentation</span>
            </button>

            <button
              onClick={() => setActiveTab("targeting")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === "targeting"
                  ? "bg-[#196d24] text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-emerald-50 border border-emerald-100"
              }`}
            >
              <Crosshair className="w-4 h-4" />
              <span>Targeting</span>
            </button>

            <button
              onClick={() => setActiveTab("positioning")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === "positioning"
                  ? "bg-[#196d24] text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-emerald-50 border border-emerald-100"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Positioning</span>
            </button>
          </div>
        </div>

        {/* Tab Panels */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-100/90 shadow-xl"
        >
          {activeTab === "segmentation" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                <div className="flex items-center gap-3 mb-4 text-[#196d24] font-extrabold">
                  <Building2 className="w-5 h-5" />
                  <h3 className="text-base">Industry Segments</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {siteContent.stpAnalysis.segmentation.industries.map((ind, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-xl bg-white text-xs font-bold text-[#0f2917] border border-emerald-100 shadow-sm">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                <div className="flex items-center gap-3 mb-4 text-[#196d24] font-extrabold">
                  <Cpu className="w-5 h-5" />
                  <h3 className="text-base">Technology Needs</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {siteContent.stpAnalysis.segmentation.techNeeds.map((tn, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-xl bg-white text-xs font-bold text-[#0f2917] border border-emerald-100 shadow-sm">
                      {tn}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                <div className="flex items-center gap-3 mb-4 text-[#196d24] font-extrabold">
                  <MapPin className="w-5 h-5" />
                  <h3 className="text-base">Geography</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {siteContent.stpAnalysis.segmentation.geography.map((geo, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-xl bg-white text-xs font-bold text-[#0f2917] border border-emerald-100 shadow-sm">
                      {geo}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "targeting" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {siteContent.stpAnalysis.targeting.map((target, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#196d24] text-white flex items-center justify-center shrink-0 font-extrabold text-sm shadow-md">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-[#0f2917] mb-1">Target Persona {idx + 1}</h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{target}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "positioning" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {siteContent.stpAnalysis.positioning.map((pos, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 hover:border-[#196d24] transition-all">
                  <div className="w-12 h-12 rounded-full bg-[#196d24] text-white flex items-center justify-center mx-auto mb-4 font-black text-base shadow-md">
                    P{idx + 1}
                  </div>
                  <p className="text-sm font-extrabold text-[#0f2917] leading-snug">{pos}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
};
