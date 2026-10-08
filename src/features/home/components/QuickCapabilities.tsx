"use client";

import React from "react";
import Image from "next/image";
import { Lightbulb, ShieldCheck, BarChart3, Users } from "lucide-react";
import { motion } from "framer-motion";

const quickPillars = [
  {
    id: "digital-innovation",
    title: "Digital Innovation",
    subtitle: "Ideas into scalable software",
    icon: Lightbulb,
  },
  {
    id: "secure-design",
    title: "Secure by Design",
    subtitle: "ISO 27001 & Zero-Trust rigor",
    icon: ShieldCheck,
  },
  {
    id: "scalable-solutions",
    title: "Scalable Solutions",
    subtitle: "Built for infinite growth",
    icon: BarChart3,
  },
  {
    id: "client-centric",
    title: "Client Centric",
    subtitle: "100% custom code & full IP",
    icon: Users,
  },
];

export const QuickCapabilities: React.FC = () => {
  return (
    <section className="relative bg-white pt-6 pb-12 sm:pb-16 z-20 overflow-hidden">
      {/* Background Artwork Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Image
          src="/assets/green-wave-bg.webp"
          alt="Green Wave Line Background"
          fill
          quality={100}
          className="object-cover object-center contrast-[1.2] brightness-[1.02] mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Floating White Stadium Pill Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-2xl border border-emerald-100/90 shadow-md sm:shadow-lg p-2.5 sm:p-4 transition-all duration-300 hover:shadow-xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
            {quickPillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 px-3 sm:px-5 py-2.5 sm:py-3 group bg-white/70 hover:bg-emerald-50/60 rounded-xl sm:rounded-2xl border border-emerald-100/60 hover:border-emerald-200/90 transition-all duration-200 shadow-xs"
                >
                  {/* Light Green Circular Icon Badge */}
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-full bg-emerald-100/70 text-[#196d24] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#196d24] group-hover:text-white transition-all duration-200">
                    <IconComponent className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.2]" />
                  </div>

                  {/* Text Column */}
                  <div className="flex flex-col text-left min-w-0 w-full">
                    <span className="text-xs sm:text-base font-bold text-[#0f2917] tracking-tight group-hover:text-[#196d24] transition-colors truncate">
                      {pillar.title}
                    </span>
                    <span className="text-[10px] sm:text-xs text-slate-500 font-medium leading-snug line-clamp-1">
                      {pillar.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
