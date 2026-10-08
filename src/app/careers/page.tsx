import React from "react";
import type { Metadata } from "next";
import { PageHeroHeader } from "@/components/layout/PageHeroHeader";
import { CareersHeroVisual } from "@/components/layout/HeroVisuals";
import { CareersPage } from "@/features/careers";

export const metadata: Metadata = {
  title: "Careers | EAGLE SORA TRANSCENDENT PRIVATE LIMITED",
  description:
    "Join EAGLE SORA TRANSCENDENT. We are hiring Full Stack Engineers, AI/ML Engineers, Cloud & DevOps Engineers, and more. Build the future of enterprise technology with us.",
};

export default function CareersPageRoute() {
  return (
    <div className="bg-[#f8fafc]">
      <PageHeroHeader
        badge="JOIN OUR TEAM"
        title="Build the Future of"
        highlightText="Enterprise Technology"
        subtitle="We are a fast-moving engineering company building enterprise-grade software, AI platforms, and cloud infrastructure. Come build something meaningful."
        pattern="cityscape"
        trustChips={["Remote-Friendly", "Yavatmal HQ", "Fast Growth"]}
        visualCustom={<CareersHeroVisual />}
      />
      <CareersPage />
    </div>
  );
}
