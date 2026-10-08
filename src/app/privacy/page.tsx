"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PageHeroHeader, OrbitalBadge } from "@/components/layout/PageHeroHeader";
import { siteContent } from "@/data/siteContent";
import {
  ShieldCheck,
  Lock,
  Database,
  Cpu,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronRight,
  Printer,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("scope");

  const lastUpdated = "October 2026";
  const effectiveDate = "October 1, 2026";

  const privacyOrbitalBadges: OrbitalBadge[] = [
    { label: "DPDP Act 2023 Compliant", iconName: "ShieldCheck", position: "top-left" },
    { label: "Zero AI Model Training", iconName: "Lock", position: "top-right" },
    { label: "AES-256 Vault Encryption", iconName: "Database", position: "bottom-left" },
    { label: "ISO 27001 Standards", iconName: "Award", position: "bottom-right" },
  ];

  const sections = [
    { id: "scope", title: "1. Scope & Legal Entity" },
    { id: "dual-role", title: "2. Dual-Role Fiduciary Architecture" },
    { id: "data-collected", title: "3. Categories of Data Collected" },
    { id: "lawful-basis", title: "4. Lawful Grounds & Purpose" },
    { id: "ai-safeguards", title: "5. SoraAI™ & Client IP Protection" },
    { id: "principal-rights", title: "6. Data Principal Rights (DPDP & GDPR)" },
    { id: "retention", title: "7. Data Retention & Erasure Schedule" },
    { id: "transfers", title: "8. Cross-Border Transfers & Sub-Processors" },
    { id: "security", title: "9. Technical & Cryptographic Safeguards" },
    { id: "cookies", title: "10. Cookies & Telemetry Governance" },
    { id: "grievance", title: "11. Grievance Redressal Officer & Inquiries" },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 antialiased">
      {/* 1. Page Hero Header */}
      <PageHeroHeader
        badge="STATUTORY DATA GOVERNANCE & PRIVACY"
        title="Enterprise Data &"
        highlightText="Privacy Policy"
        subtitle="How EAGLE SORA TRANSCENDENT PRIVATE LIMITED protects your personal information, proprietary enterprise code, and AI workloads under the Digital Personal Data Protection Act, 2023 (DPDP Act, India) and international security standards."
        pattern="cityscape"
        trustChips={[
          "DPDP Act 2023 Aligned",
          "Zero AI Data Training",
          "ISO/IEC 27001 Standards",
          "100% Client IP Isolation",
        ]}
        orbitalBadges={privacyOrbitalBadges}
      />

      {/* 2. Top Summary Highlights Bar */}
      <section className="bg-white border-b border-emerald-100 py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-[#f4f9f4] border border-emerald-200/80 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#196d24] text-white flex items-center justify-center shrink-0 shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase text-[#0f2917] tracking-wider">
                  DPDP Act 2023
                </h4>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                  Full compliance with Indian statutory privacy rights & consent mandates.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#f4f9f4] border border-emerald-200/80 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#196d24] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase text-[#0f2917] tracking-wider">
                  Zero AI Model Training
                </h4>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                  Client code & data are never used to train SoraAI™ or public foundational models.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#f4f9f4] border border-emerald-200/80 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#196d24] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase text-[#0f2917] tracking-wider">
                  AES-256 Vault Isolation
                </h4>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                  Air-gapped VPC options, encrypted at rest (AES-256) and in transit (TLS 1.3).
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#f4f9f4] border border-emerald-200/80 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#196d24] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase text-[#0f2917] tracking-wider">
                  SLA Grievance Resolution
                </h4>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                  Statutory Grievance Redressal Officer with &lt; 48-hour acknowledgment guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Body Container with Interactive Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Sticky Table of Contents */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 p-6 rounded-3xl bg-white border border-emerald-100 shadow-xl shadow-emerald-950/5 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-sm font-extrabold text-[#0f2917]">Policy Directory</h3>
                  <p className="text-[11px] text-slate-500 font-mono">Last revised: {lastUpdated}</p>
                </div>
                <button
                  onClick={handlePrint}
                  className="p-2 rounded-xl text-slate-500 hover:text-[#196d24] hover:bg-emerald-50 transition-colors"
                  title="Print or Save PDF"
                >
                  <Printer className="w-4 h-4" />
                </button>
              </div>

              <nav className="space-y-1">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollTo(sec.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                      activeSection === sec.id
                        ? "bg-[#196d24] text-white shadow-md shadow-emerald-900/20"
                        : "text-slate-600 hover:text-[#0f2917] hover:bg-emerald-50/70"
                    }`}
                  >
                    <span className="truncate">{sec.title}</span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                        activeSection === sec.id ? "rotate-90 text-emerald-200" : "text-slate-400"
                      }`}
                    />
                  </button>
                ))}
              </nav>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="p-3.5 rounded-2xl bg-[#eef6f0] border border-emerald-200/70 text-xs">
                  <span className="font-extrabold text-[#0f2917] block mb-1">
                    Need Custom Enterprise DPA?
                  </span>
                  <p className="text-[11px] text-slate-600 leading-relaxed mb-2.5">
                    We execute bespoke bilateral Data Processing Agreements (DPAs) with Standard Contractual Clauses (SCCs).
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#196d24] hover:underline"
                  >
                    <span>Request Legal Team Contact</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Column: Detailed Policy Clauses */}
          <main className="lg:col-span-8 space-y-12 bg-white border border-emerald-100/90 rounded-3xl p-6 sm:p-10 shadow-sm leading-relaxed text-slate-700">
            
            {/* Meta Banner */}
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <span className="font-mono font-bold text-emerald-800 uppercase tracking-wider block">
                  GOVERNING NOTICE: V2.4 (2026 RELEASE)
                </span>
                <span className="text-slate-600">
                  Effective Date: <strong className="text-slate-900">{effectiveDate}</strong> &bull; Jurisdiction: <strong className="text-slate-900">Republic of India</strong>
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#196d24] font-black border border-emerald-200 shadow-xs shrink-0 self-start sm:self-auto">
                <CheckCircle2 className="w-3.5 h-3.5" /> Legally Enacted
              </span>
            </div>

            {/* Section 1 */}
            <section id="scope" className="space-y-4 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 1.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                1. Scope & Legal Entity Overview
              </h2>
              <p>
                This Enterprise Privacy Notice (&quot;Privacy Policy&quot;) applies to all websites, web platforms, APIs, software products (including <strong>SoraAI™</strong>, <strong>SoraCommerce™</strong>, and custom enterprise deployments), and digital services operated by:
              </p>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-slate-400 font-mono uppercase text-[10px] block font-bold">Legal Name</span>
                    <strong className="text-[#0f2917] text-sm">{siteContent.company.legalName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono uppercase text-[10px] block font-bold">Incorporation & Jurisdiction</span>
                    <span className="text-[#0f2917] font-semibold">Registered under the Companies Act, 2013 (Ministry of Corporate Affairs, India)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono uppercase text-[10px] block font-bold">Corporate Registered Office</span>
                    <span className="text-slate-700">{siteContent.company.address}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono uppercase text-[10px] block font-bold">Corporate Email & Legal Inquiries</span>
                    <span className="text-slate-700">{siteContent.company.email}</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600">
                By accessing our websites, contracting our custom software engineering teams, or deploying our software-as-a-service frameworks, you confirm that you have read, understood, and consented to the data collection and processing practices described herein.
              </p>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 2 */}
            <section id="dual-role" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 2.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                2. Dual-Role Architecture: Data Fiduciary vs. Data Processor
              </h2>
              <p>
                In compliance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and the European Union General Data Protection Regulation (GDPR), EAGLE SORA TRANSCENDENT operates under two distinct legal capacities:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white border-2 border-emerald-200/90 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-[#196d24] font-black text-sm uppercase tracking-wide">
                    <ShieldCheck className="w-5 h-5" />
                    <span>When We Act as Data Fiduciary</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We determine the purpose and means of processing when you interact directly with us—such as when you browse <code>eagle-sora.com</code>, submit partnership inquiry forms, apply for open careers, or communicate with our executive leadership team.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                    <li>Contact form submissions and meeting telemetry</li>
                    <li>Job applicant resumes and employment evaluations</li>
                    <li>Direct billing, invoice history, and corporate contracts</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-[#f4faf6] border-2 border-[#196d24]/40 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-[#196d24] font-black text-sm uppercase tracking-wide">
                    <Cpu className="w-5 h-5" />
                    <span>When We Act as Data Processor</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When you license our SaaS platforms (e.g., SoraAI™ or SoraCommerce™) or engage our developers for custom code deployment, <strong>our client is the Data Fiduciary</strong>, and EAGLE SORA acts strictly as the <strong>Data Processor</strong> under a contractual Data Processing Agreement (DPA).
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                    <li>Client customer data stored in multi-tenant databases</li>
                    <li>Enterprise document vector embeddings</li>
                    <li>Zero ownership claims over client end-user records</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 3 */}
            <section id="data-collected" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 3.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                3. Categories of Personal Data Collected
              </h2>
              <p>
                We adhere strictly to the principle of <em>Data Minimization</em> under Section 6 of the DPDP Act. We only collect information essential for fulfilling business engagements and software performance:
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-sm mb-1">A. Information Provided Voluntarily by You</strong>
                  <p className="text-slate-600">
                    Includes your full name, work email address, phone number, company/organization name, job title, project requirements, budget parameters, and any resume attachments uploaded during recruitment inquiries.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-sm mb-1">B. System & Technical Diagnostic Telemetry</strong>
                  <p className="text-slate-600">
                    Includes IP address (anonymized at subnet level), browser type and version, device hardware specifications, operating system, API request headers, response latencies, and error stack logs for cyber threat prevention.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block text-sm mb-1">C. What We Never Collect (Strictly Excluded)</strong>
                  <p className="text-slate-600">
                    We do not collect government identity card numbers (such as Aadhaar, PAN, SSN) via public websites, nor do we ever process biometric information, health records (outside dedicated HIPAA-isolated VPC instances), or religious/political affiliations.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 4 */}
            <section id="lawful-basis" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 4.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                4. Lawful Grounds & Specific Purposes of Processing
              </h2>
              <p>
                Under Section 4 and Section 7 of the DPDP Act 2023, data is processed solely on explicit, informed consent or legitimate contractual uses:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-emerald-100">
                  <thead>
                    <tr className="bg-emerald-50 text-[#0f2917] font-black border-b border-emerald-200">
                      <th className="p-3">Processing Purpose</th>
                      <th className="p-3">Lawful Basis (DPDP Act)</th>
                      <th className="p-3">Retention Trigger</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Custom Software Architecture Scoping & Quotes</td>
                      <td className="p-3 text-emerald-800 font-medium">Explicit Consent / Pre-contractual steps</td>
                      <td className="p-3 text-slate-500">Duration of sales cycle or upon withdrawal</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Delivery of SoraAI™ & SoraCommerce™ SaaS APIs</td>
                      <td className="p-3 text-emerald-800 font-medium">Contractual Performance (SLA agreement)</td>
                      <td className="p-3 text-slate-500">Active subscription term + 30 days buffer</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Infrastructure Security & DDoS Defense</td>
                      <td className="p-3 text-emerald-800 font-medium">Legitimate Use (Cybersecurity & Lawful Defense)</td>
                      <td className="p-3 text-slate-500">Rolling 90-day server access logs</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Engineering Talent Hiring & Interviews</td>
                      <td className="p-3 text-emerald-800 font-medium">Candidate Consent</td>
                      <td className="p-3 text-slate-500">180 days post-recruitment evaluation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 5 */}
            <section id="ai-safeguards" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 5.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                5. SoraAI™ & Enterprise Intelligence Privacy Safeguards
              </h2>
              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
                <div className="flex items-center gap-2 text-[#196d24] font-black text-sm">
                  <Sparkles className="w-5 h-5" />
                  <span>The Eagle Sora Zero-Model-Training Guarantee</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  We recognize that proprietary business intelligence and source code are our clients&apos; core competitive assets. We operate under an ironclad technical and legal commitment:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-emerald-200">
                    <strong className="text-[#0f2917] block mb-1">1. No Third-Party Training</strong>
                    <span className="text-slate-600">
                      Your query prompts, database records, and vector embeddings are never sold, shared, or used to fine-tune public LLMs or external artificial intelligence models.
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-emerald-200">
                    <strong className="text-[#0f2917] block mb-1">2. Dedicated Private Embeddings</strong>
                    <span className="text-slate-600">
                      Each enterprise SoraAI™ deployment uses cryptographically isolated tenant indices. Client A can never access or infer vectors belonging to Client B.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 6 */}
            <section id="principal-rights" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 6.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                6. Data Principal Rights (Under DPDP Act 2023 & GDPR)
              </h2>
              <p>
                You possess absolute autonomy over your personal information. Under Chapter III of the DPDP Act, you can exercise the following statutory rights at zero cost:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <strong className="text-slate-900 block">Right to Access Summary (Section 11)</strong>
                  <p className="text-slate-600">
                    Request an intelligible summary of all personal data being processed by us, including categories and identities of all sub-processors.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <strong className="text-slate-900 block">Right to Correction & Erasure (Section 12)</strong>
                  <p className="text-slate-600">
                    Correct misleading, outdated, or incomplete data, and demand the complete permanent deletion of data no longer required for statutory purposes.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <strong className="text-slate-900 block">Right to Grievance Redressal (Section 13)</strong>
                  <p className="text-slate-600">
                    File a direct grievance with our designated Resident Grievance Officer, with guaranteed statutory resolution timelines before approaching the Data Protection Board of India.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <strong className="text-slate-900 block">Right to Withdraw Consent (Section 6)</strong>
                  <p className="text-slate-600">
                    Withdraw previously granted consent at any time via an email to <code>Ajaygorle886@gmail.com</code> with immediate effect on future processing.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 7 */}
            <section id="retention" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 7.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                7. Data Retention & Cryptographic Erasure Schedule
              </h2>
              <p>
                We do not maintain &quot;indefinite data lakes&quot;. Personal and business data is subject to automated time-to-live (TTL) lifecycle schedules:
              </p>
              <ul className="text-xs space-y-2 list-disc list-inside text-slate-700">
                <li><strong>Website Leads & Scoping Records:</strong> Deleted or anonymized within <strong>90 days</strong> if no active commercial engagement proceeds.</li>
                <li><strong>Active Enterprise Client Backups:</strong> Retained for the contract duration and securely overwritten via NIST 800-88 cryptographic wipe protocols within <strong>30 days</strong> of contract conclusion.</li>
                <li><strong>Financial & Statutory Invoices:</strong> Retained for <strong>8 years</strong> strictly as mandated by the Indian Companies Act, 2013 and Goods & Services Tax (GST) laws.</li>
              </ul>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 8 */}
            <section id="transfers" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 8.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                8. Cross-Border Transfers & Sub-Processors
              </h2>
              <p>
                Under Section 16 of the DPDP Act 2023, data may be transferred outside India only to jurisdictions not specifically restricted by the Central Government of India, subject to stringent security equivalence.
              </p>
              <p className="text-xs text-slate-600">
                Our infrastructure sub-processors include SOC-2 certified cloud providers (AWS Mumbai Region, Google Cloud Mumbai/Delhi regions) for domestic hosting, and dedicated isolated client VPCs for overseas enterprise partners. All third-party sub-processors are bound by strict bilateral non-disclosure agreements and Data Processing Addendums.
              </p>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 9 */}
            <section id="security" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 9.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                9. Technical & Cryptographic Safeguards
              </h2>
              <p>
                In compliance with ISO/IEC 27001 information security standards and Rule 8 of the Information Technology (Reasonable Security Practices) Rules, 2011, we employ industry-grade physical and digital defenses:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-[#0f2917] block font-bold mb-1">In Transit Encryption</strong>
                  <p className="text-slate-600">TLS 1.3 encryption with strict HTTP Strict Transport Security (HSTS) headers across all endpoints.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-[#0f2917] block font-bold mb-1">At Rest Vaulting</strong>
                  <p className="text-slate-600">AES-256 bit encryption applied to all relational databases, cache clusters, and file archives.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-[#0f2917] block font-bold mb-1">Access Control & MFA</strong>
                  <p className="text-slate-600">Mandatory hardware key/MFA authentication, zero-trust perimeter, and ephemeral bastion access.</p>
                </div>
              </div>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 10 */}
            <section id="cookies" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 10.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                10. Cookies & Telemetry Governance
              </h2>
              <p>
                We do not employ intrusive behavioral tracking or commercial ad retargeting cookies. We use only:
              </p>
              <ul className="text-xs space-y-1.5 list-disc list-inside text-slate-700">
                <li><strong>Strictly Necessary Cookies:</strong> Required to maintain CSRF token security and load-balancer route persistence.</li>
                <li><strong>Telemetry & Performance:</strong> Privacy-first, cookieless aggregated metrics to identify API latency and broken hyperlinks without storing identifying cookies.</li>
              </ul>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 11: Grievance Officer */}
            <section id="grievance" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#196d24] text-white text-[11px] font-black uppercase tracking-wider">
                STATUTORY COMPLIANCE
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                11. Grievance Redressal Officer & Corporate Contact Details
              </h2>
              <p>
                In strict adherence to <strong>Section 13 of the Digital Personal Data Protection Act, 2023</strong> and Rule 5(9) of the Information Technology Rules, 2011, EAGLE SORA TRANSCENDENT PRIVATE LIMITED has designated a resident Grievance Redressal Officer:
              </p>

              <div className="p-6 rounded-3xl bg-[#f4faf6] border-2 border-emerald-200 shadow-md space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-emerald-200/80">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#196d24] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                      AG
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-[#0f2917]">Ajay Sanjayrao Gorle</h4>
                      <p className="text-xs text-emerald-800 font-semibold">
                        Designated Grievance Redressal Officer & Director
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#196d24] text-xs font-black uppercase tracking-wider">
                    Statutory DPO
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-[#196d24] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block font-bold uppercase text-[10px]">Email (Statutory SLA)</span>
                      <a href={`mailto:${siteContent.company.email}`} className="text-[#0f2917] font-bold hover:underline">
                        {siteContent.company.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[#196d24] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block font-bold uppercase text-[10px]">Direct Phone Line</span>
                      <a href={`tel:${siteContent.company.phone}`} className="text-[#0f2917] font-bold hover:underline">
                        {siteContent.company.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#196d24] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block font-bold uppercase text-[10px]">Registered HQ Address</span>
                      <span className="text-slate-700 leading-snug block">
                        {siteContent.company.address}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs text-slate-600">
                  <strong className="text-[#0f2917] block mb-0.5">Statutory Redressal Timeline:</strong>
                  All grievances submitted to the Grievance Officer will receive a formal acknowledgment ticket within <strong>48 hours</strong> and substantive resolution within <strong>30 days</strong>. If not resolved satisfactorily, you may file an appeal before the <em>Data Protection Board of India</em>.
                </div>
              </div>

              {/* Bottom Navigation CTAs */}
              <div className="pt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#196d24] hover:bg-[#13551c] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Submit Data Subject Request</span>
                </Link>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all"
                >
                  <Printer className="w-4 h-4" />
                  <span>Download / Print Policy PDF</span>
                </button>
              </div>

            </section>

          </main>

        </div>
      </div>
    </div>
  );
}
