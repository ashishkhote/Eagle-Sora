"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Clock,
  MessageSquare,
  Globe,
  Lock,
  Award,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const faqs = [
  {
    q: "How quickly will I hear back after submitting an inquiry?",
    a: "We guarantee a response within 24 hours on business days. For urgent enterprise requirements, you can call us directly at +91 9307807516 for immediate assistance from our solution architects.",
  },
  {
    q: "Do you sign NDAs before discussing my project?",
    a: "Absolutely. We sign a mutual NDA before any detailed project discussion. Your ideas, requirements, and IP are treated with strict confidentiality from the very first conversation.",
  },
  {
    q: "Can you work with clients outside India?",
    a: "Yes. We work with clients across India, the Middle East, Southeast Asia, and North America. We operate in IST and are flexible with overlap hours for international clients.",
  },
  {
    q: "What information should I prepare before reaching out?",
    a: "A rough idea of your project scope, target timeline, and tech requirements (if any) is enough to get started. You don't need a detailed spec — our team will help you structure the requirements.",
  },
  {
    q: "Do you offer fixed-price or time-and-material engagements?",
    a: "Both. We offer fixed-price delivery for well-defined scopes, and T&M models for exploratory or ongoing engagements. We will recommend the best model after understanding your project.",
  },
];

const trustPoints = [
  { icon: Clock, title: "24-Hour SLA", desc: "Guaranteed response on every inquiry, no exceptions." },
  { icon: Lock, title: "100% NDA Protected", desc: "Your ideas are safe with us from the first call." },
  { icon: ShieldCheck, title: "ISO 27001 Aligned", desc: "Enterprise-grade security in all engagements." },
  { icon: Globe, title: "International Clients", desc: "We work across India, ME, SE Asia & Americas." },
  { icon: MessageSquare, title: "Direct Engineer Access", desc: "You talk to the people building your product." },
  { icon: Award, title: "Source Code Ownership", desc: "All IP and code is transferred fully to you." },
];

export const ContactTrustSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── Trust Signals ── */}
      <section className="py-20 sm:py-24 bg-white border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-[#196d24] text-xs font-black uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" /> WHY CHOOSE US
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f2917] leading-tight mb-4">
              Our Commitment to{" "}
              <span className="text-[#196d24]">Every Client</span>
            </h2>
            <p className="text-base text-slate-600 font-medium leading-relaxed">
              When you engage with Eagle Sora, you get more than a vendor — you get an engineering partner that is fully committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="p-5 rounded-2xl bg-[#f4f9f4] border border-emerald-100 hover:border-[#196d24]/50 hover:shadow-md transition-all text-center group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-emerald-100 text-[#196d24] flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:bg-[#196d24] group-hover:text-white transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <p className="text-[11px] font-black text-[#0f2917] mb-1 leading-tight">{point.title}</p>
                  <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{point.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-20 sm:py-24 bg-[#f4f9f4] border-b border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-[#196d24] text-xs font-black uppercase tracking-wider mb-4">
              <MessageSquare className="w-3.5 h-3.5" /> FREQUENTLY ASKED
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f2917] leading-tight mb-4">
              Common <span className="text-[#196d24]">Questions</span>
            </h2>
            <p className="text-base text-slate-600 font-medium">
              Everything you need to know before reaching out to our team.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white rounded-2xl border border-emerald-100 shadow-sm overflow-hidden"
              >
                <button
                  id={`faq-contact-${i}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                >
                  <span className="text-sm font-bold text-[#0f2917]">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-4 h-4 text-[#196d24] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-emerald-50 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div className="mt-10 p-6 rounded-2xl bg-[#0f2917] text-center">
            <p className="text-sm font-bold text-emerald-100 mb-4">
              Still have questions? Our team is happy to hop on a call.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${siteContent.company.phone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#0f2917] font-bold text-xs transition-all"
              >
                Call Us Now <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all"
              >
                View Open Roles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
