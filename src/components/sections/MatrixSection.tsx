"use client";

import React from "react";
import { siteContent } from "@/data/siteContent";
import { Check, X, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export const MatrixSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#f7faf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-[#196d24] text-xs font-bold uppercase tracking-wider">
            COMPETITIVE DIFFERENTIATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2917]">
            Positioned to Deliver{" "}
            <span className="text-[#196d24]">
              Maximum Value.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            See how EAGLE SORA TRANSCENDENT combines the agility and affordability of specialized partners with enterprise-grade blockchain and global delivery capabilities.
          </p>
        </div>

        {/* Matrix Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl border border-emerald-100/90 shadow-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-emerald-100 bg-emerald-50/50">
                  <th className="p-5 sm:p-6 text-xs sm:text-sm font-extrabold text-[#0f2917] uppercase tracking-wider">
                    Feature / Capability
                  </th>
                  <th className="p-5 sm:p-6 text-xs sm:text-sm font-extrabold text-white bg-[#196d24] text-center uppercase tracking-wider shadow-inner">
                    EAGLE SORA TRANSCENDENT
                  </th>
                  <th className="p-5 sm:p-6 text-xs sm:text-sm font-extrabold text-slate-700 text-center uppercase tracking-wider">
                    Zoho
                  </th>
                  <th className="p-5 sm:p-6 text-xs sm:text-sm font-extrabold text-slate-700 text-center uppercase tracking-wider">
                    Wipro
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-100 text-xs sm:text-sm">
                {siteContent.competitorMatrix.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-emerald-50/40 transition-colors"
                  >
                    <td className="p-5 sm:p-6 font-extrabold text-[#0f2917]">
                      {row.feature}
                      {row.notes && (
                        <span className="block text-[11px] font-medium text-slate-500 mt-0.5">
                          {row.notes}
                        </span>
                      )}
                    </td>

                    {/* Eagle Sora Column (Highlighted) */}
                    <td className="p-5 sm:p-6 text-center bg-emerald-50/70 font-bold border-x border-emerald-100">
                      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#196d24] text-white shadow-md">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    </td>

                    {/* Zoho Column */}
                    <td className="p-5 sm:p-6 text-center">
                      {row.zoho ? (
                        <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-[#196d24]">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-100 text-rose-600">
                          <X className="w-4 h-4 stroke-[3]" />
                        </div>
                      )}
                    </td>

                    {/* Wipro Column */}
                    <td className="p-5 sm:p-6 text-center">
                      {row.wipro ? (
                        <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-[#196d24]">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-100 text-rose-600">
                          <X className="w-4 h-4 stroke-[3]" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-emerald-50/60 border-t border-emerald-100 flex items-center justify-between text-xs text-slate-600">
            <span className="flex items-center gap-2 font-bold text-[#0f2917]">
              <ShieldCheck className="w-4 h-4 text-[#196d24]" />
              100% Comprehensive Coverage across Product, Custom & Emerging Tech Dimensions
            </span>
            <a href="/contact" className="font-extrabold text-[#196d24] hover:underline">
              Partner with Us →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
