import React from "react";
import type { Metadata } from "next";
import { PageHeroHeader } from "@/components/layout/PageHeroHeader";
import { SolutionsHeroVisual } from "@/components/layout/HeroVisuals";
import {
  ProductsCatalog,
  ChallengesSolutions,
} from "@/features/solutions";

export const metadata: Metadata = {
  title: "Solutions & Products | EAGLE SORA TRANSCENDENT PRIVATE LIMITED",
  description:
    "Discover SoraAI™ and SoraCommerce™ enterprise SaaS platforms, market comparison matrices, and technology solution frameworks.",
};

export default function SolutionsPage() {
  return (
    <div className="bg-[#f8fafc]">
      <PageHeroHeader
        badge="FLAGSHIP PLATFORMS & SOLUTIONS"
        title="Enterprise Solutions &"
        highlightText="SaaS Platforms"
        subtitle="Powering business transformation with our proprietary SoraAI™ intelligence engine, SoraCommerce™ multi-tenant engine, and custom solution frameworks."
        pattern="cityscape"
        trustChips={["SoraAI™ Powered", "SoraCommerce™ Platform", "High Performance"]}
        visualCustom={<SolutionsHeroVisual />}
      />
      <ProductsCatalog />
      <ChallengesSolutions />
    </div>
  );
}
