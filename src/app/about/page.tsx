import React from "react";
import type { Metadata } from "next";
import { PageHeroHeader } from "@/components/layout/PageHeroHeader";
import { AboutHeroVisual } from "@/components/layout/HeroVisuals";
import {
  CompanyOverview,
  CoreValues,
  CorporateGovernance,
  LeadershipTeam,
} from "@/features/about";

export const metadata: Metadata = {
  title: "About Us | EAGLE SORA TRANSCENDENT PRIVATE LIMITED",
  description:
    "Learn about EAGLE SORA TRANSCENDENT PRIVATE LIMITED, our leadership team (Sanjay Gorle & Ajay Sanjayrao Gorle), mission, vision, corporate governance, and core engineering philosophy.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#f8fafc]">
      <PageHeroHeader
        badge="COMPANY OVERVIEW & LEADERSHIP"
        title="About EAGLE SORA"
        highlightText="TRANSCENDENT"
        subtitle="We are a technology innovation firm engineering custom software, cloud architectures, AI integrations, and enterprise digital infrastructure designed for scalable growth."
        pattern="cityscape"
        trustChips={["Executive Leadership", "ISO 27001 Certified", "100% Custom Code"]}
        visualCustom={<AboutHeroVisual />}
      />
      <CompanyOverview />
      <CoreValues />
      <CorporateGovernance />
      <LeadershipTeam />
    </div>
  );
}
