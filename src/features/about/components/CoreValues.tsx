"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Zap,
  Code2,
  Users2,
  Lock,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const valuesList = [
  {
    icon: Code2,
    title: "100% Custom Architecture",
    description:
      "We reject bloated cookie-cutter templates. Every line of code, database schema, and microservice is purpose-engineered to fit your exact operational workflows.",
    highlight: "Zero vendor lock-in",
  },
  {
    icon: ShieldCheck,
    title: "Security by Design",
    description:
      "Security is not an afterthought. We implement zero-trust access, strict encryption at rest and in transit, and ISO 27001-aligned operational compliance.",
    highlight: "Bank-grade data safety",
  },
  {
    icon: Zap,
    title: "Infinite Scalability",
    description:
      "Our cloud-native architectures handle traffic spikes effortlessly, utilizing distributed caching, container orchestration, and serverless compute.",
    highlight: "99.99% SLA reliability",
  },
  {
    icon: Users2,
    title: "Client-Centric Co-Creation",
    description:
      "We operate as an embedded extension of your executive and engineering teams, delivering weekly sprints, transparent demos, and measurable business ROI.",
    highlight: "Radical transparency",
  },
  {
    icon: Lock,
    title: "Full IP Ownership",
    description:
      "Upon completion, 100% of proprietary source code, architectural documentation, CI/CD scripts, and deployment environments belong solely to our clients.",
    highlight: "Complete client rights",
  },
  {
    icon: Sparkles,
    title: "Continuous Modernization",
    description:
      "We continuously integrate state-of-the-art AI models, modern edge runtimes, and automated test suites to keep your business ahead of market disruptions.",
    highlight: "Future-proof systems",
  },
];

export const CoreValues: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background artwork overlay */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/assets/framing-wave-bg.webp"
          alt="Framing Background"
          fill
          quality={100}
          className="object-cover object-center contrast-[1.2] brightness-[1.02] mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-[#196d24] text-xs font-bold uppercase tracking-wider">
            FOUNDATIONAL ETHOS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2917] leading-tight">
            Our Core Engineering{" "}
            <span className="text-[#196d24]">Principles.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            The unshakeable values that guide every system architecture, client relationship, and product deployment at EAGLE SORA.
          </p>
        </div>

        {/* 6-Grid Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuesList.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[#f8fbf9] border border-emerald-200/80 hover:border-[#196d24] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-emerald-200 text-[#196d24] flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#196d24] group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-black text-[#0f2917] mb-3">
                    {val.title}
                  </h3>

                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">
                    {val.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-emerald-200/60 flex items-center gap-2 text-xs font-bold text-[#196d24]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{val.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
