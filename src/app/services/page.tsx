import React from "react";
import type { Metadata } from "next";
import { PageHeroHeader } from "@/components/layout/PageHeroHeader";
import { ServicesHeroVisual } from "@/components/layout/HeroVisuals";
import { DetailedServices } from "@/features/services";

export const metadata: Metadata = {
  title: "Services & Capabilities | EAGLE SORA TRANSCENDENT PRIVATE LIMITED",
  description:
    "Explore enterprise software services, custom web & mobile app engineering, cloud computing, AI integrations, and cybersecurity compliance.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#f8fafc]">
      <PageHeroHeader
        badge="ENTERPRISE SERVICES & CAPABILITIES"
        title="Our Technology"
        highlightText="Services"
        subtitle="From custom software engineering to cloud architecture and cybersecurity compliance, we deliver end-to-end digital capabilities for enterprise success."
        pattern="framing"
        trustChips={["Custom Software", "Cloud DevOps", "AI Integration", "24/7 Support"]}
        visualCustom={<ServicesHeroVisual />}
      />
      <DetailedServices />
    </div>
  );
}
