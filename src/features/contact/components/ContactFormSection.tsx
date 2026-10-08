"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import { siteContent } from "@/data/siteContent";
import { Mail, Phone, MapPin, Globe, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Zod Schema for strict validation
const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name is required"),
  serviceInterest: z.string().min(1, "Please select a service interest"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactFormSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
    });
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-[#e9f4eb] relative overflow-hidden">
      {/* Background Artwork Overlay */}
      <div className="absolute inset-0 z-0 opacity-85 pointer-events-none">
        <Image
          src="/assets/framing-wave-bg.webp"
          alt="Framing Wave Background"
          fill
          quality={100}
          className="object-cover object-center contrast-[1.25] brightness-[1.02] mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Direct Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-200/70 text-[#196d24] text-xs font-bold uppercase tracking-wider mb-4">
                GET IN TOUCH
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2917] leading-tight">
                Any Questions??{" "}
                <span className="text-[#196d24]">
                  Ask Us!
                </span>
              </h2>
              <p className="text-base text-slate-600 font-medium mt-4 leading-relaxed">
                Have a project in mind or need enterprise software consulting? Connect directly with our team to discuss custom solutions.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              <a
                href={`mailto:${siteContent.company.email}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm hover:border-[#196d24] hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#196d24] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Email Direct</span>
                  <p className="text-sm font-bold text-[#0f2917] group-hover:text-[#196d24] transition-colors">
                    {siteContent.company.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${siteContent.company.phone}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm hover:border-[#196d24] hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#196d24] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Phone Hotline</span>
                  <p className="text-sm font-bold text-[#0f2917] group-hover:text-[#196d24] transition-colors">
                    {siteContent.company.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#196d24] text-white flex items-center justify-center shrink-0 shadow-md mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Registered Office</span>
                  <p className="text-xs sm:text-sm font-bold text-[#0f2917] leading-relaxed">
                    {siteContent.company.address}
                  </p>
                  <p className="text-[11px] text-[#196d24] font-semibold mt-1">
                    Yavatmal, Maharashtra 445001
                  </p>
                </div>
              </div>

            </div>

            {/* SLA Trust Badge */}
            <div className="p-4 rounded-2xl bg-emerald-100/70 border border-emerald-200 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#196d24] shrink-0" />
              <p className="text-xs text-slate-700 font-semibold">
                Guaranteed 24-hour response SLA from our solution architects.
              </p>
            </div>

          </motion.div>

          {/* Right Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-emerald-100/90 shadow-xl"
          >
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#196d24] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#0f2917]">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-slate-600 font-medium max-w-md mx-auto">
                  Thank you for reaching out to EAGLE SORA TRANSCENDENT. Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#196d24] hover:bg-[#13551c] text-white text-xs font-bold transition-all shadow-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h3 className="text-xl font-black text-[#0f2917] mb-2">
                  Request a Solution Consultation
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-extrabold text-[#0f2917] mb-1">
                      Full Name *
                    </label>
                    <input
                      {...register("fullName")}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-emerald-100 text-xs text-[#0f2917] font-medium focus:outline-none focus:border-[#196d24] focus:bg-white transition-colors"
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-500 mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-extrabold text-[#0f2917] mb-1">
                      Business Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-emerald-100 text-xs text-[#0f2917] font-medium focus:outline-none focus:border-[#196d24] focus:bg-white transition-colors"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-extrabold text-[#0f2917] mb-1">
                      Phone Number *
                    </label>
                    <input
                      {...register("phone")}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-emerald-100 text-xs text-[#0f2917] font-medium focus:outline-none focus:border-[#196d24] focus:bg-white transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-500 mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-extrabold text-[#0f2917] mb-1">
                      Company / Organization *
                    </label>
                    <input
                      {...register("company")}
                      placeholder="e.g. Acme Tech Pvt Ltd"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-emerald-100 text-xs text-[#0f2917] font-medium focus:outline-none focus:border-[#196d24] focus:bg-white transition-colors"
                    />
                    {errors.company && (
                      <p className="text-[11px] text-rose-500 mt-1">{errors.company.message}</p>
                    )}
                  </div>
                </div>

                {/* Service Select */}
                <div>
                  <label className="block text-xs font-extrabold text-[#0f2917] mb-1">
                    Service Interest *
                  </label>
                  <select
                    {...register("serviceInterest")}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-emerald-100 text-xs text-[#0f2917] font-medium focus:outline-none focus:border-[#196d24] focus:bg-white transition-colors"
                  >
                    <option value="">Select a service category...</option>
                    <option value="custom-software">Custom Software Development</option>
                    <option value="web-mobile">Web & Mobile App Development</option>
                    <option value="cloud-infra">Cloud & Infrastructure Services</option>
                    <option value="ai-tech">AI & Emerging Tech Integration</option>
                    <option value="compliance-security">Compliance & Security Solutions</option>
                    <option value="sora-ai">SoraAI™ Enterprise Platform</option>
                    <option value="sora-commerce">SoraCommerce™ Platform</option>
                  </select>
                  {errors.serviceInterest && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.serviceInterest.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-extrabold text-[#0f2917] mb-1">
                    Project Requirements / Message *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Briefly describe your project scope, timeline, and goals..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-emerald-100 text-xs text-[#0f2917] font-medium focus:outline-none focus:border-[#196d24] focus:bg-white transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#196d24] hover:bg-[#13551c] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Submit Project Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
