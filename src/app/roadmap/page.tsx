import React from "react";
import type { Metadata } from "next";
import { PageHeroHeader } from "@/components/layout/PageHeroHeader";
import { RoadmapHeroVisual } from "@/components/layout/HeroVisuals";
import {
  RoadmapTimeline,
  STPAnalysis,
  CapitalAllocation,
} from "@/features/roadmap";

export const metadata: Metadata = {
  title: "Strategic Growth Roadmap | EAGLE SORA TRANSCENDENT PRIVATE LIMITED",
  description:
    "Explore EAGLE SORA TRANSCENDENT PRIVATE LIMITED's 2026-2028 strategic roadmap, STP market strategy, and capital allocation structure.",
};

export default function RoadmapPage() {
  return (
    <div className="bg-[#f8fafc]">
      <PageHeroHeader
        badge="STRATEGIC VISION & ALLOCATION"
        title="Growth Roadmap &"
        highlightText="Market Strategy"
        subtitle="Our 3-year strategic growth trajectory (2026–2028), STP market segmentation model, and disciplined talent capital allocation framework."
        pattern="framing"
        trustChips={["Phase 1 Active", "Global Delivery", "Quantum R&D"]}
        visualCustom={<RoadmapHeroVisual />}
      />
      <RoadmapTimeline />
      <STPAnalysis />
      <CapitalAllocation />
    </div>
  );
}
