"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Ajay Gorle",
    role: "CEO & Founder",
    image: "/assets/Ajay Gorle.jpeg",
  },
  {
    name: "Satyam Rathod",
    role: "Financial Manager",
    image: "/assets/Satyam_Rathod.jpeg",
  },
  {
    name: "Ashish Khote",
    role: "Team Lead",
    image: "/assets/Ashish_Khote.jpeg",
  },
  {
    name: "Tushar Bondre",
    role: "Senior Tester",
    image: "/assets/Tushar Bondre.png",
  },
  {
    name: "Atharva Deshmukh",
    role: "Software Engineer",
    image: "/assets/Atharva Deshmukh.jpeg",
  },
  {
    name: "Rohan Khadse",
    role: "Associate Tester",
    image: "/assets/Rohan_Khadse.png",
  },
  {
    name: "Parikshit Pawade",
    role: "Sr. HR Executive",
    image: "/assets/Parikshit_Pawade.jpeg",
  },
  {
    name: "Mithilesh Darne",
    role: "Content Creator",
    image: "/assets/Mithilesh Darne.jpeg",
  },
];

const marqueeMembers = [...teamMembers, ...teamMembers];

const legalTeam = [
  {
    name: "Jeet Pawar",
    role: "Legal Counsel",
    image: "/assets/Jeet_Pawar.jpeg",
  },
];

export const LeadershipTeam: React.FC = () => {
  return (
    <section id="leadership" className="bg-[#f6f7f6] py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2917] leading-tight tracking-tight">
            Meet Our <span className="text-[#196d24]">Team</span>
          </h2>
        </motion.div>

        <div className="relative overflow-hidden rounded-[30px]">
          <div className="animate-marquee flex w-max gap-4 sm:gap-5">
            {marqueeMembers.map((member, index) => (
              <motion.div
                key={`${member.name}-${index}`}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative h-[340px] w-[220px] shrink-0 overflow-hidden rounded-[26px] border border-white/70 bg-white shadow-[0_16px_32px_rgba(15,23,42,0.08)] min-[360px]:w-[230px] sm:h-[360px] sm:w-[240px] lg:h-[390px] lg:w-[260px]"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    background:
                      index % 3 === 0
                        ? "linear-gradient(135deg, rgba(247,199,214,0.98), rgba(223,232,246,0.9), rgba(211,233,255,0.96))"
                        : index % 3 === 1
                          ? "linear-gradient(135deg, rgba(236,230,212,0.92), rgba(214,228,244,0.9), rgba(221,238,242,0.94))"
                          : "linear-gradient(135deg, rgba(208,229,255,0.9), rgba(247,220,228,0.78), rgba(239,241,247,0.96))",
                  }}
                />

                <motion.img
                  src={member.image}
                  alt={member.name}
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0 h-full w-full object-cover grayscale contrast-125 brightness-[1.08] transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.04 + 0.12 }}
                  className="absolute inset-x-0 bottom-0 p-4 text-white md:p-5"
                >
                  <h3 className="whitespace-pre-line text-2xl font-semibold leading-[1.1] tracking-[-0.04em] text-white">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-base font-medium text-white/90">{member.role}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-16"
        >
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2917] leading-tight tracking-tight">
              Legal <span className="text-[#196d24]">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:max-w-[58rem]">
            {legalTeam.map((member, index) => (
              <motion.div
                key={`${member.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative flex h-[280px] overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-[0_16px_32px_rgba(15,23,42,0.08)] sm:h-[330px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#e8edf8] via-[#f6e7ec] to-[#dfeaf6]" />

                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 h-full w-full object-cover object-top grayscale contrast-125 brightness-[1.08]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-2xl font-semibold leading-[1.1] tracking-[-0.04em] text-white">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-base font-medium text-white/90">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-10 rounded-[20px] border border-[#e5e7eb] bg-[#f0f1ee] px-4 py-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:px-8 sm:py-7"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <h3 className="flex flex-wrap items-center gap-2 text-2xl font-medium leading-tight text-[#2b2f3a] sm:gap-3 sm:text-3xl md:text-[2.3rem]">
                Want to Be a Part of the Team?
                <span className="inline-flex items-center rounded-full bg-[#f7d7d9] px-3 py-1 text-xs font-semibold text-[#d2595a] sm:text-sm">
                  2 Openings
                </span>
              </h3>
              <p className="mt-3 text-base text-[#4b5563] md:text-xl">
                We are looking for visionary people who want to grow alongside a team that values collaboration and innovation.
              </p>
            </div>

            <Link
              href="/careers/apply"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#1f2430] px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#121821] md:w-auto"
            >
              Apply Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
