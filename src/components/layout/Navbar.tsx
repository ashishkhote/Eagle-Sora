"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { ArrowRight, Menu, X } from "lucide-react";

import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-1.5 border-b border-gray-200/80"
          : "bg-white/90 backdrop-blur-sm py-2 border-b border-gray-100"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo with Responsive Scaling */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-44 min-[360px]:w-52 min-[400px]:w-60 sm:w-72 h-11 sm:h-14 lg:h-16 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/assets/logo-leaf-emblem.webp"
                alt={siteContent.company.legalName}
                fill
                sizes="(max-width: 640px) 240px, 288px"
                className="object-contain object-left mix-blend-multiply"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links matching exact 6 tabs in user images */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {siteContent.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors relative py-1 ${isActive
                      ? "text-[#196d24]"
                      : "text-[#334155] hover:text-[#196d24]"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#196d24] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button matching reference */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 xl:px-6 py-2.5 rounded-full bg-[#196d24] hover:bg-[#13551c] text-white text-sm font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button (44px touch target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-h-[44px] min-w-[44px] p-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 active:scale-95 transition-all flex items-center justify-center shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 sm:px-6 py-6 animate-in slide-in-from-top-4 duration-200 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {siteContent.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold py-3 min-h-[44px] flex items-center border-b border-slate-100 transition-colors ${isActive ? "text-[#196d24]" : "text-slate-800 hover:text-[#196d24]"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[46px] flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#196d24] text-white text-sm font-bold shadow-md hover:bg-[#13551c] transition-colors"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
