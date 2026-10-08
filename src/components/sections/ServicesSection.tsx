"use client";

import React from "react";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { NotchedServiceCard } from "@/components/ui/NotchedServiceCard";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const ServicesSection: React.FC = () => {

  return (
    <section id="services" className="py-24 bg-[#f4faf6] relative overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Information Column matching reference image 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Tag with Accent Bar */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#196d24]">
                OUR SOLUTIONS
              </span>
              <span className="w-10 h-0.5 bg-[#196d24] rounded-full" />
            </div>

            {/* Headline matching image 1 */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2917] leading-[1.15]">
              Technology that moves{" "}
              <span className="text-[#196d24]">
                business forward.
              </span>
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              We design and deliver custom software, digital platforms and intelligent solutions that help businesses innovate, scale, and stay ahead in a rapidly evolving digital world.
            </p>

            {/* CTA Button matching image 1 */}
            <div className="pt-2">
              <a
                href="/services"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#196d24] hover:bg-[#0f2917] text-white font-bold text-sm shadow-xl shadow-emerald-800/20 hover:shadow-2xl transition-all group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Cards Column - Notched Service Cards redirecting to /services */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch pt-2">
            {siteContent.services.slice(0, 3).map((srv, index) => (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="flex flex-col h-full"
              >
                <NotchedServiceCard
                  service={srv}
                  href="/services"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

