"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer suppressHydrationWarning className="bg-[#0b140e] text-slate-300 relative border-t border-emerald-950/80">

      {/* MAIN FOOTER NAVIGATION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="relative w-44 h-11">
              <Image
                src="/assets/logo.webp"
                alt={siteContent.company.legalName}
                fill
                sizes="176px"
                className="object-contain object-left brightness-0 invert"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              <span className="text-slate-200 font-medium">{siteContent.company.legalName}</span>{" "}
              delivers enterprise software engineering, scalable cloud systems, and intelligent digital products tailored for modern growth.
            </p>

            <div className="pt-2">
              <p className="text-xs text-emerald-400/90 font-medium italic">
                &ldquo;{siteContent.company.motto}&rdquo;
              </p>
            </div>
          </div>

          {/* Column 1: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Web & Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  AI & ML Integration
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Legacy Modernization
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions & Products (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Solutions & Tech
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  SoraAI™ Assistant
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  SoraCommerce™ Platform
                </Link>
              </li>
              <li>
                <Link href="/solutions#fintech" className="hover:text-white transition-colors">
                  FinTech & Banking Architectures
                </Link>
              </li>
              <li>
                <Link href="/solutions#healthcare" className="hover:text-white transition-colors">
                  Healthcare & Telehealth Systems
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="hover:text-white transition-colors">
                  Engineering Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Office & Inquiries
            </h4>

            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href={`mailto:${siteContent.company.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteContent.company.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href={`tel:${siteContent.company.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {siteContent.company.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {siteContent.company.address}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. BOTTOM CLEAN LEGAL BAR */}
      <div className="border-t border-emerald-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">

            <p>{siteContent.company.copyright}</p>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
              <Link
                href="/privacy"
                className="hover:text-slate-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-slate-300 transition-colors"
              >
                Terms & Conditions
              </Link>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors pl-1 sm:pl-2"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};
