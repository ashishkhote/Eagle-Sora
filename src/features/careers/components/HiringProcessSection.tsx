"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const hiringSteps = [
    { step: "01", title: "Apply Online", desc: "Submit your resume via our contact form or email us directly. No cover letter required." },
    { step: "02", title: "Screening Call", desc: "A 20-min intro call with our HR or a senior engineer to understand your background." },
    { step: "03", title: "Technical Round", desc: "A practical, role-relevant assessment — not trick questions or leetcode marathons." },
    { step: "04", title: "Director Interaction", desc: "Final conversation with our Directors. Offer rolled out within 48 hours if selected." },
];

export function HiringProcessSection() {
    return (
        <section className="border-b border-emerald-100 bg-[#f4f9f4] py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#196d24]">
                        <CheckCircle2 className="h-3.5 w-3.5" /> OUR PROCESS
                    </div>
                    <h2 className="mb-4 text-3xl font-black leading-tight text-[#0f2917] sm:text-4xl">
                        Simple, Transparent{" "}
                        <span className="text-[#196d24]">Hiring Process</span>
                    </h2>
                    <p className="text-base font-medium text-slate-600">
                        No endless loops or mystery boxes. We move fast and respect your time.
                    </p>
                </div>

                <div className="mx-auto max-w-4xl">
                    <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="absolute left-[12.5%] right-[12.5%] top-8 z-0 hidden h-0.5 bg-emerald-200 lg:block" />

                        {hiringSteps.map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative z-10 rounded-2xl border border-emerald-100 bg-white p-6 text-center shadow-sm"
                            >
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#196d24] text-sm font-black text-white shadow-md">
                                    {item.step}
                                </div>
                                <h3 className="mb-2 text-sm font-black text-[#0f2917]">{item.title}</h3>
                                <p className="text-xs font-medium leading-relaxed text-slate-500">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}