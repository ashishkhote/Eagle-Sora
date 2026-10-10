import type { Metadata } from "next";
import { CareersHeroVisual } from "@/components/layout/HeroVisuals";
import { PageHeroHeader } from "@/components/layout/PageHeroHeader";
import { JobApplicationForm } from "@/features/careers/components/JobApplicationForm";
import { HiringProcessSection } from "@/features/careers/components/HiringProcessSection";

export const metadata: Metadata = {
    title: "Apply for a Job | EAGLE SORA TRANSCENDENT PRIVATE LIMITED",
    description:
        "Apply to join EAGLE SORA TRANSCENDENT PRIVATE LIMITED. Share your details and apply for an open role or send a general application.",
};

type ApplyPageProps = {
    searchParams: Promise<{ role?: string | string[] }>;
};

export default async function ApplyPage({ searchParams }: ApplyPageProps) {
    const params = await searchParams;
    const role = Array.isArray(params.role) ? params.role[0] : params.role;

    return (
        <div className="bg-[#f8fafc]">
            <PageHeroHeader
                badge="JOIN OUR TEAM"
                title="Take the Next Step in Your"
                highlightText="Career"
                subtitle="Share your experience with us and explore opportunities to build meaningful technology with the Eagle Sora team."
                pattern="cityscape"
                trustChips={["Remote-Friendly", "Yavatmal HQ", "Fast Growth"]}
                visualCustom={<CareersHeroVisual />}
            />
            <JobApplicationForm initialRole={role} />
            <HiringProcessSection />
        </div>
    );
}