"use client";

import React from "react";
import { siteContent } from "@/data/siteContent";
import { Quote, UserCheck, Shield } from "lucide-react";
import { motion } from "framer-motion";

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-24 bg-[#f4faf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-[#196d24] text-xs font-bold uppercase tracking-wider">
            EXECUTIVE DIRECTORS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2917]">
            Meet Our Leadership{" "}
            <span className="text-[#196d24]">
              Team.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Guided by strategic business operations and visionary technology leadership to engineer impactful digital transformation.
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteContent.leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-emerald-100/90 hover:border-[#196d24] transition-all duration-300 shadow-md hover:shadow-2xl relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {/* Avatar Icon / Circle */}
                    <div className="w-16 h-16 rounded-2xl bg-[#196d24] text-white flex items-center justify-center font-black text-2xl shadow-md border-2 border-emerald-400/30">
                      {leader.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-[#0f2917]">
                        {leader.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-bold text-[#196d24]">
                        <span>({leader.role})</span>
                        <span className="w-1 h-1 rounded-full bg-slate-400" />
                        <span className="uppercase tracking-wide text-slate-500">{leader.nationality}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-emerald-100 text-[#196d24]">
                    <UserCheck className="w-6 h-6" />
                  </div>
                </div>

                {/* Quote Box */}
                <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 mb-6 flex items-start gap-3">
                  <Quote className="w-5 h-5 text-[#196d24] shrink-0 mt-0.5" />
                  <p className="text-xs italic text-slate-700 font-semibold leading-relaxed">
                    "{leader.quote}"
                  </p>
                </div>

                {/* Full Bio */}
                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">
                  {leader.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-emerald-100 flex items-center justify-between text-xs font-bold text-slate-500">
                <span className="flex items-center gap-1.5 text-[#196d24]">
                  <Shield className="w-4 h-4" /> Board of Directors
                </span>
                <span>EAGLE SORA TRANSCENDENT</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
