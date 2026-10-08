"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PageHeroHeader, OrbitalBadge } from "@/components/layout/PageHeroHeader";
import { siteContent } from "@/data/siteContent";
import {
  FileText,
  ShieldCheck,
  Scale,
  Code2,
  Cpu,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Mail,
  Phone,
  Building2,
  ChevronRight,
  Printer,
  ExternalLink,
} from "lucide-react";

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState("acceptance");

  const lastUpdated = "October 2026";
  const effectiveDate = "October 1, 2026";

  const termsOrbitalBadges: OrbitalBadge[] = [
    { label: "Indian Contract Act 1872", iconName: "Scale", position: "top-left" },
    { label: "100% Client IP Transfer", iconName: "ShieldCheck", position: "top-right" },
    { label: "99.9% SaaS SLA", iconName: "Cpu", position: "bottom-left" },
    { label: "Standard Commercial Terms", iconName: "FileText", position: "bottom-right" },
  ];

  const sections = [
    { id: "acceptance", title: "1. Acceptance & Contract Formation" },
    { id: "services-scope", title: "2. Scope of Services & SaaS Platforms" },
    { id: "ip-ownership", title: "3. Intellectual Property & Code Transfer" },
    { id: "client-data", title: "4. Client Data & Confidentiality" },
    { id: "sla-commitments", title: "5. Service Level Agreement (SLA)" },
    { id: "payments-billing", title: "6. Commercial Fees, Billing & GST" },
    { id: "acceptable-use", title: "7. Acceptable Use & Security Protocols" },
    { id: "warranties", title: "8. Warranties & Disclaimer" },
    { id: "liability", title: "9. Limitation of Liability & Indemnity" },
    { id: "termination", title: "10. Term, Termination & Data Offboarding" },
    { id: "disputes", title: "11. Governing Law & Arbitration Seat" },
    { id: "corporate-contact", title: "12. Corporate Inquiries & Notices" },
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
        badge="MASTER SERVICES & COMMERCIAL TERMS"
        title="Terms &"
        highlightText="Conditions of Service"
        subtitle="The legal framework governing our custom software engineering engagements, proprietary SaaS licenses (SoraAI™ & SoraCommerce™), and enterprise IT infrastructure under the Indian Contract Act, 1872."
        pattern="framing"
        trustChips={[
          "Indian Contract Act 1872",
          "100% Client Code Ownership",
          "99.9% Uptime Guarantee",
          "Mutual Non-Disclosure Protection",
        ]}
        orbitalBadges={termsOrbitalBadges}
      />

      {/* 2. Key Pillars Highlights Bar */}
      <section className="bg-white border-b border-emerald-100 py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-[#f4f9f4] border border-emerald-200/80 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#196d24] text-white flex items-center justify-center shrink-0 shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase text-[#0f2917] tracking-wider">
                  Full IP Assignment
                </h4>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                  100% transfer of custom software source code, assets & databases to client upon milestone sign-off.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#f4f9f4] border border-emerald-200/80 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#196d24] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase text-[#0f2917] tracking-wider">
                  99.9% Cloud SLA
                </h4>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                  Contractually bound uptime and sub-2-hour critical severity response protocols.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#f4f9f4] border border-emerald-200/80 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#196d24] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase text-[#0f2917] tracking-wider">
                  Equitable Liability
                </h4>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                  Capped aggregate liability aligned with standard Indian IT & enterprise SaaS conventions.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#f4f9f4] border border-emerald-200/80 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#196d24] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase text-[#0f2917] tracking-wider">
                  Indian Arbitration
                </h4>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                  Governed under Maharashtra legal jurisdiction with expedited arbitration procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Body Container with Sticky Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Sticky Table of Contents */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 p-6 rounded-3xl bg-white border border-emerald-100 shadow-xl shadow-emerald-950/5 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-sm font-extrabold text-[#0f2917]">Terms Directory</h3>
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
                    Bespoke Enterprise MSA
                  </span>
                  <p className="text-[11px] text-slate-600 leading-relaxed mb-2.5">
                    For customized Statements of Work (SOWs), enterprise SLA extensions, or government procurement frameworks, consult our legal team.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#196d24] hover:underline"
                  >
                    <span>Talk to Legal & Contracts Team</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Column: Detailed Clauses */}
          <main className="lg:col-span-8 space-y-12 bg-white border border-emerald-100/90 rounded-3xl p-6 sm:p-10 shadow-sm leading-relaxed text-slate-700">
            
            {/* Meta Banner */}
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <span className="font-mono font-bold text-emerald-800 uppercase tracking-wider block">
                  COMMERCIAL CONTRACT RELEASE: V2.4 (2026)
                </span>
                <span className="text-slate-600">
                  Effective Date: <strong className="text-slate-900">{effectiveDate}</strong> &bull; Governing Law: <strong className="text-slate-900">Republic of India</strong>
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#196d24] font-black border border-emerald-200 shadow-xs shrink-0 self-start sm:self-auto">
                <CheckCircle2 className="w-3.5 h-3.5" /> Legally Binding
              </span>
            </div>

            {/* Section 1 */}
            <section id="acceptance" className="space-y-4 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 1.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                1. Acceptance & Contract Formation
              </h2>
              <p>
                These Terms and Conditions of Service (&quot;Agreement&quot;, &quot;Terms&quot;) constitute a legally binding commercial contract between you (either an individual business representative, proprietary enterprise, partnership firm, or corporate entity, hereinafter &quot;Client&quot;) and <strong>{siteContent.company.legalName}</strong> (&quot;Company&quot;, &quot;Eagle Sora&quot;, &quot;we&quot;, &quot;us&quot;), incorporated under the Companies Act, 2013 (Ministry of Corporate Affairs, Government of India).
              </p>
              <p className="text-xs text-slate-600">
                By signing a Statement of Work (SOW), issuing a Purchase Order, registering for our SaaS platforms (including SoraAI™ and SoraCommerce™), or browsing our digital ecosystem, you acknowledge that you have read, understood, and agreed to be governed by these Terms and our companion Privacy Policy.
              </p>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 2 */}
            <section id="services-scope" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 2.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                2. Scope of Services & SaaS Platforms
              </h2>
              <p>
                Eagle Sora delivers high-performance technology capabilities structured into three primary commercial tiers:
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-[#0f2917] block text-sm mb-1">A. Custom Software Engineering (Work-for-Hire)</strong>
                  <p className="text-slate-600">
                    Bespoke web applications, cross-platform mobile systems, microservices architectures, custom databases, and legacy code modernisation tailored to Client&apos;s exact functional specifications.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-[#0f2917] block text-sm mb-1">B. Proprietary Enterprise SaaS Platforms</strong>
                  <p className="text-slate-600">
                    Licensing of our proprietary platforms: <strong>SoraAI™</strong> (enterprise AI orchestration, vector retrieval, and autonomous workflow engine) and <strong>SoraCommerce™</strong> (headless, high-throughput multi-tenant digital commerce infrastructure).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-[#0f2917] block text-sm mb-1">C. Cloud DevOps & Cybersecurity Advisory</strong>
                  <p className="text-slate-600">
                    Cloud deployment (AWS, GCP, Azure, Sovereign Indian VPCs), automated CI/CD pipelines, ISO 27001 data audit readiness, and 24/7 infrastructure monitoring.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 3 */}
            <section id="ip-ownership" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 3.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                3. Intellectual Property Rights & Code Assignment
              </h2>
              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
                <div className="flex items-center gap-2 text-[#196d24] font-black text-sm">
                  <Code2 className="w-5 h-5" />
                  <span>Transparent, Zero-Lock-In IP Governance</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                  <div className="p-4 rounded-xl bg-white border border-emerald-200 space-y-1.5">
                    <strong className="text-[#0f2917] block font-extrabold text-sm">
                      1. Custom Code = 100% Client Property
                    </strong>
                    <p className="text-slate-600 leading-relaxed">
                      All custom software, schemas, UI components, and API integrations developed specifically for the Client under a paid Statement of Work are treated as work-for-hire. Full copyright and exclusive intellectual property rights are automatically assigned to the Client upon settlement of corresponding milestone fees.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-emerald-200 space-y-1.5">
                    <strong className="text-[#0f2917] block font-extrabold text-sm">
                      2. Proprietary Core Frameworks
                    </strong>
                    <p className="text-slate-600 leading-relaxed">
                      Pre-existing algorithms, foundational engines, and SDKs powering SoraAI™ and SoraCommerce™ remain the exclusive intellectual property of Eagle Sora. Clients receive a perpetual, non-exclusive, worldwide commercial license to deploy and utilize these engines for their operations with zero recurring royalty claims.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 4 */}
            <section id="client-data" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 4.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                4. Client Data & Mutual Non-Disclosure
              </h2>
              <p>
                Client retains complete, unencumbered ownership of all data, trade secrets, customer records, database contents, and operational files uploaded to or processed through our systems.
              </p>
              <ul className="text-xs space-y-2 list-disc list-inside text-slate-700">
                <li><strong>Strict Confidentiality:</strong> Both parties agree to protect proprietary information with the same degree of care as their own trade secrets (and in no event less than reasonable technical care).</li>
                <li><strong>No Commercial Data Mining:</strong> Eagle Sora shall never monetize, sell, advertise against, or inspect Client data except as strictly necessary to fulfill technical support obligations under an authorized ticket.</li>
                <li><strong>Mutual NDA Incorporation:</strong> Where a bilateral Non-Disclosure Agreement (NDA) has been formally executed, its provisions shall supersede any conflicting language herein regarding confidentiality.</li>
              </ul>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 5 */}
            <section id="sla-commitments" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 5.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                5. Service Level Agreement (SLA) & Uptime Commitments
              </h2>
              <p>
                For our cloud-hosted SaaS offerings and managed cloud retainers, we commit to the following performance benchmarks:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-emerald-100">
                  <thead>
                    <tr className="bg-emerald-50 text-[#0f2917] font-black border-b border-emerald-200">
                      <th className="p-3">Severity Tier</th>
                      <th className="p-3">Definition & Impact</th>
                      <th className="p-3">Initial Response SLA</th>
                      <th className="p-3">Target Workaround</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-3 font-bold text-red-600">P1 - Critical</td>
                      <td className="p-3 text-slate-700">Complete production outage; business operations halted</td>
                      <td className="p-3 font-semibold text-slate-900">&lt; 1 Hour</td>
                      <td className="p-3 text-slate-600">&lt; 4 Hours</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-600">P2 - Major</td>
                      <td className="p-3 text-slate-700">Core functional impairment with no direct workaround</td>
                      <td className="p-3 font-semibold text-slate-900">&lt; 4 Hours</td>
                      <td className="p-3 text-slate-600">&lt; 12 Hours</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-emerald-700">P3 - Minor</td>
                      <td className="p-3 text-slate-700">Non-critical bug or UI discrepancy with workaround</td>
                      <td className="p-3 font-semibold text-slate-900">&lt; 8 Hours</td>
                      <td className="p-3 text-slate-600">Next Sprint Cycle</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500">
                Uptime is calculated on a monthly basis, excluding planned maintenance windows announced with at least 48 hours advance electronic notice.
              </p>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 6 */}
            <section id="payments-billing" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 6.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                6. Commercial Fees, Invoicing & Indian Taxation
              </h2>
              <p>
                Fees are specified in the applicable Statement of Work or SaaS subscription agreement:
              </p>
              <ul className="text-xs space-y-2 list-disc list-inside text-slate-700">
                <li><strong>Milestone Invoicing:</strong> Development projects are billed against agreed sprint milestones. Payment terms are Net-15 days from invoice issuance unless agreed otherwise in writing.</li>
                <li><strong>Goods & Services Tax (GST):</strong> All quoted rates are exclusive of applicable Indian GST (currently 18%), which will be billed separately in compliance with Indian tax law. For international clients, services qualify as export of services under zero-rated GST rules upon receipt of foreign inward remittance (FIRC).</li>
                <li><strong>Late Payment:</strong> Outstanding dues exceeding 30 calendar days past due date may incur interest at 1.5% per month or the maximum rate permissible under Indian law.</li>
              </ul>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 7 */}
            <section id="acceptable-use" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 7.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                7. Acceptable Use & Security Protocols
              </h2>
              <p>
                Client agrees to use Eagle Sora platforms and APIs in strict compliance with all applicable cyber and corporate laws (including the Information Technology Act, 2000). Client shall not:
              </p>
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs space-y-1.5 text-amber-900">
                <p>• Attempt unauthorized penetration testing, vulnerability scanning, or denial-of-service (DDoS) simulations without express prior written consent.</p>
                <p>• Decompile, reverse engineer, or extract foundational model weights from SoraAI™ core orchestration libraries.</p>
                <p>• Utilize our infrastructure to transmit malware, phishing schemes, illegal content, or activities violating Section 66F of the Information Technology Act (cyber terrorism).</p>
              </div>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 8 */}
            <section id="warranties" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 8.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                8. Warranties & 30-Day Defect Warranty
              </h2>
              <p>
                We warrant that all custom software delivered under a Statement of Work will perform in material conformity with the written functional specifications for a period of <strong>30 calendar days</strong> following User Acceptance Testing (UAT) sign-off. During this warranty window, Eagle Sora will rectify any verifiable reproducible defects at zero additional fee.
              </p>
              <p className="text-xs text-slate-500">
                EXCEPT AS EXPRESSLY SET FORTH HEREIN, ALL SERVICES AND PLATFORMS ARE PROVIDED ON AN &quot;AS-IS&quot; AND &quot;AS-AVAILABLE&quot; BASIS TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE INDIAN LAW.
              </p>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 9 */}
            <section id="liability" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 9.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                9. Limitation of Liability & Indemnification
              </h2>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs leading-relaxed">
                <p>
                  <strong>A. Liability Cap:</strong> To the fullest extent permitted by the Indian Contract Act, 1872, the total aggregate liability of either party arising out of or related to this Agreement (whether in contract, tort, negligence, or otherwise) shall not exceed the total fees actually paid by the Client to Eagle Sora in the twelve (12) months immediately preceding the incident giving rise to liability.
                </p>
                <p>
                  <strong>B. Consequential Damages Waiver:</strong> In no event shall either party be liable for any indirect, incidental, punitive, or consequential damages, loss of business revenue, loss of anticipated savings, or data corruption.
                </p>
                <p>
                  <strong>C. Absolute Carve-Outs:</strong> The liability limitations above shall not apply to damages arising from willful misconduct, gross negligence, breach of confidentiality, or indemnification obligations under third-party IP infringement claims.
                </p>
              </div>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 10 */}
            <section id="termination" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 10.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                10. Term, Termination & Cryptographic Offboarding
              </h2>
              <p>
                Either party may terminate a Statement of Work for convenience with thirty (30) days prior written notice, or immediately for material breach if the breaching party fails to cure within fifteen (15) days of receipt of written notice.
              </p>
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs text-slate-700 space-y-1">
                <strong className="text-[#0f2917] block">Offboarding & Data Portability Guarantee:</strong>
                <span>
                  Upon contract termination, Client has thirty (30) days to export all production databases, schemas, and assets in standard industry formats (SQL, JSON, CSV). Following the 30-day export window, Eagle Sora executes verifiable cryptographic data wipes (NIST 800-88 standard) across all staging and backup nodes.
                </span>
              </div>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 11 */}
            <section id="disputes" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-[#196d24] text-[11px] font-black uppercase tracking-wider">
                CLAUSE 11.0
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                11. Governing Law & Arbitration Seat
              </h2>
              <p>
                This Agreement shall be construed, interpreted, and governed in accordance with the substantive laws of the <strong>Republic of India</strong> without reference to conflict of laws principles.
              </p>
              <p className="text-xs text-slate-600">
                Any dispute, controversy, or claim arising out of or relating to this Agreement, including its existence, validity, or termination, shall be resolved through binding arbitration in accordance with the <strong>Arbitration and Conciliation Act, 1996</strong>. The arbitration shall be conducted before a sole arbitrator mutually appointed by the parties. The seat and venue of arbitration shall be <strong>Yavatmal / Nagpur, Maharashtra, India</strong>, and the proceedings shall be conducted in the English language.
              </p>
            </section>

            <hr className="border-emerald-100" />

            {/* Section 12: Corporate Inquiries & Notices */}
            <section id="corporate-contact" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#196d24] text-white text-[11px] font-black uppercase tracking-wider">
                LEGAL NOTICES & CONTRACTS
              </div>
              <h2 className="text-2xl font-black text-[#0f2917] tracking-tight">
                12. Corporate Inquiries & Contract Administration
              </h2>
              <p>
                All legal notices, Statements of Work, and official contractual communications shall be served in writing to our designated corporate officers:
              </p>

              <div className="p-6 rounded-3xl bg-[#f4faf6] border-2 border-emerald-200 shadow-md space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-emerald-200/80">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#196d24] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                      ES
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-[#0f2917]">{siteContent.company.legalName}</h4>
                      <p className="text-xs text-emerald-800 font-semibold">
                        Corporate Contracts & Technology Administration
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#196d24] text-xs font-black uppercase tracking-wider">
                    Official
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-[#196d24] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block font-bold uppercase text-[10px]">Contracts Email</span>
                      <a href={`mailto:${siteContent.company.email}`} className="text-[#0f2917] font-bold hover:underline">
                        {siteContent.company.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[#196d24] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block font-bold uppercase text-[10px]">Corporate Phone</span>
                      <a href={`tel:${siteContent.company.phone}`} className="text-[#0f2917] font-bold hover:underline">
                        {siteContent.company.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-[#196d24] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block font-bold uppercase text-[10px]">Registered HQ Address</span>
                      <span className="text-slate-700 leading-snug block">
                        {siteContent.company.address}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTAs */}
              <div className="pt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#196d24] hover:bg-[#13551c] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Execute Custom Statement of Work (SOW)</span>
                </Link>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all"
                >
                  <Printer className="w-4 h-4" />
                  <span>Download / Print Terms PDF</span>
                </button>
              </div>

            </section>

          </main>

        </div>
      </div>
    </div>
  );
}
