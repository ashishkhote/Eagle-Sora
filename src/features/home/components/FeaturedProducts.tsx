"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FeaturedProducts: React.FC = () => {
  const [activeMobileId, setActiveMobileId] = useState(siteContent.products[0].id);
  const activeProduct = siteContent.products.find((p) => p.id === activeMobileId) || siteContent.products[0];

  return (
    <section id="products" className="py-12 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-emerald-100/60">
      {/* Background Artwork Overlay */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Image
          src="/assets/cityscape-wave-bg.webp"
          alt="Cityscape Wave Background"
          fill
          quality={100}
          className="object-cover object-bottom contrast-[1.2] brightness-[1.02] mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 space-y-2.5 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-100 text-[#196d24] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            PROPRIETARY INNOVATIONS
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-black text-[#0f2917] leading-tight">
            Flagship Software Platforms:{" "}
            <span className="text-[#196d24]">
              SoraAI™ & SoraCommerce™
            </span>
          </h2>
          <p className="text-xs sm:text-lg text-slate-600 font-medium">
            Beyond bespoke consulting, EAGLE SORA invents and licenses proprietary enterprise platforms designed for process automation, generative intelligence, and high-speed commerce.
          </p>
        </div>

        {/* Mobile Product Selector Switcher (< lg) */}
        <div className="lg:hidden flex items-center justify-center gap-2 mb-6">
          {siteContent.products.map((p) => {
            const isActive = p.id === activeMobileId;
            return (
              <button
                key={p.id}
                onClick={() => setActiveMobileId(p.id)}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                  isActive
                    ? "bg-[#0f2917] text-white shadow-md shadow-emerald-950/20"
                    : "bg-[#f8faf9] text-slate-700 border border-slate-200"
                }`}
              >
                {p.name}
              </button>
            );
          })}
        </div>

        {/* Mobile Single Card Showcase (< lg) */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#f8faf9] rounded-2xl border border-emerald-100 p-5 space-y-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-[#196d24] flex items-center justify-center">
                  <DynamicIcon name={activeProduct.iconName} size={22} />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-white text-[#196d24] text-[10px] font-bold uppercase tracking-wider border border-emerald-200">
                  {activeProduct.badge}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-[#0f2917] mb-1">
                  {activeProduct.name}
                </h3>
                <p className="text-[11px] font-bold text-[#196d24] uppercase tracking-wide mb-2">
                  {activeProduct.tagline}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {activeProduct.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-2 pt-1 border-t border-emerald-100">
                {activeProduct.keyFeatures.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-[#0f2917]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#196d24] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-emerald-100 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-semibold">
                  Cloud SaaS & VPC
                </span>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#196d24] hover:text-[#0f2917] transition-colors group"
                >
                  <span>Explore Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop 2-Column Architectural Layout (lg+) - 100% UNCHANGED */}
        <div className="hidden lg:grid grid-cols-2 gap-16 divide-x divide-emerald-100">
          {siteContent.products.map((prod, index) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`flex flex-col justify-between ${index !== 0 ? "pl-16" : "pr-8"}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100/70 text-[#196d24] flex items-center justify-center">
                    <DynamicIcon name={prod.iconName} size={28} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#196d24] text-xs font-bold uppercase tracking-wider border border-emerald-200">
                    {prod.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#0f2917] mb-2">
                  {prod.name}
                </h3>
                <p className="text-xs font-bold text-[#196d24] mb-4 tracking-wide uppercase">
                  {prod.tagline}
                </p>
                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">
                  {prod.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {prod.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#0f2917]">
                      <CheckCircle2 className="w-4 h-4 text-[#196d24] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-emerald-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-semibold">
                  Cloud SaaS & VPC Deployable
                </span>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#196d24] hover:text-[#0f2917] transition-colors group"
                >
                  <span>Explore {prod.name} Specs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
