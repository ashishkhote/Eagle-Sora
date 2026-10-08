"use client";

import React from "react";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { PieChart, DollarSign, ShieldCheck, Users, Code, Cloud } from "lucide-react";
import { motion } from "framer-motion";

export const CapitalAllocation: React.FC = () => {
  return (
    <section className="py-20 bg-[#eef7f2] relative overflow-hidden">
      {/* Background Artwork Overlay */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <Image
          src="/assets/cityscape-wave-bg.webp"
          alt="Cityscape Wave Background"
          fill
          quality={100}
          className="object-cover object-bottom contrast-[1.25] brightness-[1.02] mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-200/70 text-[#196d24] text-xs font-bold uppercase tracking-wider">
            FINANCIAL TRANSPARENCY & ALLOCATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2917]">
            Resource Allocation &{" "}
            <span className="text-[#196d24]">
              Capital Structure.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            A disciplined, growth-oriented deployment model prioritizing engineering talent, R&D, cloud security, and compliance governance.
          </p>
        </div>

        {/* 4 Cards Grid with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.capitalAllocation.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-3xl bg-white border border-emerald-100/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#196d24]">
                    {item.percentage}%
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#196d24] font-mono text-xs font-bold">
                    ₹{item.amountInr}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-[#0f2917] mb-2">
                  {item.category}
                </h3>
                
                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="w-full h-2.5 rounded-full bg-emerald-100/70 overflow-hidden mb-2">
                  <div
                    className="h-full bg-[#196d24] rounded-full transition-all duration-1000"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] font-bold text-slate-500">
                  <span>Allocation Weight</span>
                  <span>{item.percentage}% Total</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
