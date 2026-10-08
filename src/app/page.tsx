import React from "react";
import {
  Hero,
  QuickCapabilities,
  FeaturedServices,
  FeaturedProducts,
  IndustrySolutions,
  WhyChooseUs,
  HomeContactCta,
} from "@/features/home";
import { ChallengesSection } from "@/components/sections/ChallengesSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickCapabilities />
      <FeaturedServices />
      <ChallengesSection />
      <FeaturedProducts />
      <IndustrySolutions />
      <WhyChooseUs />
      <HomeContactCta />
    </>
  );
}
