"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { Mail, Phone, MapPin, ArrowRight, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const HomeContactCta: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-[#edf7f1] border-t border-emerald-200/70 relative overflow-hidden">
      {/* Background Wave Art */}
      <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
        <Image
          src="/assets/framing-wave-bg.webp"
          alt="Framing Wave Background"
          fill
          quality={100}
          className="object-cover object-center contrast-[1.2] brightness-[1.02] mix-blend-multiply"
        />
      </div>

      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        {/* Top Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#196d24] text-[11px] font-bold uppercase tracking-wider"
        >
          <Sparkles className="w-3.5 h-3.5" />
          GET IN TOUCH WITH EAGLE SORA
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2917] leading-tight"
        >
          Have a Project in Mind?{" "}
          <span className="text-[#196d24]">
            Let's Build It Together.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-medium leading-relaxed"
        >
          Whether you need custom software, cloud DevOps modernization, or proprietary AI integration, our senior engineering team is ready to accelerate your digital transformation.
        </motion.p>

        {/* Quick Contact Info Chips (Compact) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <a
            href={`mailto:${siteContent.company.email}`}
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-emerald-200/90 hover:border-[#196d24] text-slate-700 hover:text-[#196d24] transition-all shadow-xs text-xs font-bold"
          >
            <Mail className="w-4 h-4 text-[#196d24]" />
            <span>{siteContent.company.email}</span>
          </a>

          <a
            href={`tel:${siteContent.company.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-emerald-200/90 hover:border-[#196d24] text-slate-700 hover:text-[#196d24] transition-all shadow-xs text-xs font-bold"
          >
            <Phone className="w-4 h-4 text-[#196d24]" />
            <span>{siteContent.company.phone}</span>
          </a>

          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-emerald-200/90 text-slate-700 shadow-xs text-xs font-bold">
            <MapPin className="w-4 h-4 text-[#196d24]" />
            <span>{siteContent.company.location}</span>
          </div>
        </motion.div>

        {/* Compact CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#196d24] hover:bg-[#13551c] text-white text-sm font-bold shadow-lg shadow-emerald-800/20 hover:shadow-xl hover:-translate-y-0.5 transition-all group"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* 24-hr SLA Guarantee */}
        <div className="pt-1 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
          <Clock className="w-3.5 h-3.5 text-[#196d24]" />
          <span>Guaranteed 24-Hour SLA response from our solution architects.</span>
        </div>
      </div>
    </section>
  );
};
