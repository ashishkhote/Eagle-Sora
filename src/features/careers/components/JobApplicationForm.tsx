"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail, Paperclip } from "lucide-react";
import { siteContent } from "@/data/siteContent";

const applicationRoles = [
    "General Application",
    "Full Stack Engineer",
    "Software Engineering Intern",
];

type JobApplicationFormProps = {
    initialRole?: string;
};

export function JobApplicationForm({ initialRole = "" }: JobApplicationFormProps) {
    const [emailDraftOpened, setEmailDraftOpened] = useState(false);
    const selectedRole = applicationRoles.includes(initialRole)
        ? initialRole
        : "General Application";

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const role = String(formData.get("role") ?? selectedRole);
        const fullName = String(formData.get("fullName") ?? "");
        const email = String(formData.get("email") ?? "");
        const phone = String(formData.get("phone") ?? "");
        const resumeUrl = String(formData.get("resumeUrl") ?? "");
        const message = String(formData.get("message") ?? "");
        const body = [
            `Name: ${fullName}`,
            `Email: ${email}`,
            `Phone: ${phone || "Not provided"}`,
            `Role: ${role}`,
            `Resume / portfolio link: ${resumeUrl || "Not provided"}`,
            "",
            "Application message:",
            message || "Not provided",
        ].join("\n");
        const subject = encodeURIComponent(`Job Application - ${role}`);

        window.location.href = `mailto:${siteContent.company.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
        setEmailDraftOpened(true);
    }

    return (
        <main className="min-h-[70vh] bg-[#f4f9f4] px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-5xl">
                <Link
                    href="/careers"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#196d24] transition hover:text-[#13551c]"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Careers
                </Link>

                <div className="grid overflow-hidden rounded-2xl border border-[#dfe9df] bg-white shadow-[0_20px_50px_rgba(15,41,23,0.08)] md:grid-cols-[0.8fr_1.2fr]">
                    <section className="bg-[#0f2917] p-6 text-white sm:p-9">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
                            Careers at Eagle Sora
                        </p>
                        <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                            Make your next move count.
                        </h1>
                        <p className="mt-4 text-sm leading-6 text-emerald-50/80">
                            Tell us a little about yourself and the role you are interested in. We look forward to hearing from you.
                        </p>
                        <div className="mt-8 flex items-start gap-3 border-t border-white/15 pt-5 text-sm leading-6 text-emerald-50/80">
                            <Mail className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                            <span>{siteContent.company.email}</span>
                        </div>
                    </section>

                    <section className="p-6 sm:p-9">
                        <h2 className="text-xl font-bold text-[#0f2917]">Job application</h2>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            Your email app will open with these details prepared. Review the draft, attach your resume, and send it to complete your application.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="block text-sm font-semibold text-[#0f2917]">
                                    Full name <span className="text-rose-600">*</span>
                                    <input
                                        autoComplete="name"
                                        name="fullName"
                                        required
                                        className="mt-2 min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm font-normal outline-none transition focus:border-[#196d24] focus:ring-2 focus:ring-[#196d24]/15"
                                        placeholder="Your name"
                                    />
                                </label>
                                <label className="block text-sm font-semibold text-[#0f2917]">
                                    Email address <span className="text-rose-600">*</span>
                                    <input
                                        autoComplete="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="mt-2 min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm font-normal outline-none transition focus:border-[#196d24] focus:ring-2 focus:ring-[#196d24]/15"
                                        placeholder="you@example.com"
                                    />
                                </label>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="block text-sm font-semibold text-[#0f2917]">
                                    Phone number
                                    <input
                                        autoComplete="tel"
                                        name="phone"
                                        type="tel"
                                        className="mt-2 min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm font-normal outline-none transition focus:border-[#196d24] focus:ring-2 focus:ring-[#196d24]/15"
                                        placeholder="Optional"
                                    />
                                </label>
                                <label className="block text-sm font-semibold text-[#0f2917]">
                                    Applying for <span className="text-rose-600">*</span>
                                    <select
                                        defaultValue={selectedRole}
                                        name="role"
                                        required
                                        className="mt-2 min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm font-normal outline-none transition focus:border-[#196d24] focus:ring-2 focus:ring-[#196d24]/15"
                                    >
                                        {applicationRoles.map((role) => (
                                            <option key={role} value={role}>{role}</option>
                                        ))}
                                    </select>
                                </label>
                            </div>

                            <label className="block text-sm font-semibold text-[#0f2917]">
                                Resume or portfolio link
                                <span className="mt-1 block text-xs font-normal text-slate-500">
                                    Or attach your resume in the email draft before sending.
                                </span>
                                <span className="relative mt-2 block">
                                    <Paperclip className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                    <input
                                        name="resumeUrl"
                                        type="url"
                                        className="min-h-11 w-full rounded-lg border border-slate-300 bg-white pl-9 pr-3 text-sm font-normal outline-none transition focus:border-[#196d24] focus:ring-2 focus:ring-[#196d24]/15"
                                        placeholder="https://..."
                                    />
                                </span>
                            </label>

                            <label className="block text-sm font-semibold text-[#0f2917]">
                                A short note
                                <textarea
                                    name="message"
                                    rows={4}
                                    className="mt-2 w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm font-normal outline-none transition focus:border-[#196d24] focus:ring-2 focus:ring-[#196d24]/15"
                                    placeholder="Share relevant experience or what interests you about this role."
                                />
                            </label>

                            <button
                                type="submit"
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#196d24] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#13551c] sm:w-auto"
                            >
                                Continue in email
                                <ArrowRight className="h-4 w-4" />
                            </button>

                            {emailDraftOpened && (
                                <p aria-live="polite" className="text-sm leading-6 text-[#13551c]">
                                    Your email app should open with the application draft. Review it, attach your resume if needed, and press Send. If it did not open, email {siteContent.company.email} directly.
                                </p>
                            )}
                        </form>
                    </section>
                </div>
            </div>
        </main>
    );
}