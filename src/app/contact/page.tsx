import React from "react";
import type { Metadata } from "next";
import { PageHeroHeader } from "@/components/layout/PageHeroHeader";
import { ContactHeroVisual } from "@/components/layout/HeroVisuals";
import { ContactFormSection, ContactTrustSection } from "@/features/contact";

export const metadata: Metadata = {
  title: "Contact & Inquiries | EAGLE SORA TRANSCENDENT PRIVATE LIMITED",
  description:
    "Get in touch with EAGLE SORA TRANSCENDENT PRIVATE LIMITED. Contact our engineering team for custom software development, enterprise inquiries, and consulting.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#f8fafc]">
      <PageHeroHeader
        badge="GET IN TOUCH WITH OUR TEAM"
        title="Contact & Strategic"
        highlightText="Inquiries"
        subtitle="Have a project requirement or enterprise consulting request? Reach out to our engineering team and corporate leadership."
        pattern="cityscape"
        trustChips={["24-Hour SLA Response", "Yavatmal, Maharashtra", "Direct Consultation"]}
        visualCustom={<ContactHeroVisual />}
      />
      <ContactFormSection />
      <ContactTrustSection />
    </div>
  );
}
