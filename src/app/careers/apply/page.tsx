import type { Metadata } from "next";
import { JobApplicationForm } from "@/features/careers/components/JobApplicationForm";

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

    return <JobApplicationForm initialRole={role} />;
}