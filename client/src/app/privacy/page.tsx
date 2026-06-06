import type { Metadata } from "next";
import FadeIn from "../../components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the privacy policy of Intrinsic Mind AI Solutions to understand how we collect, process, and safeguard your enterprise and personal data.",
  alternates: {
    canonical: "/privacy",
  },
};

const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://intrinsicmind.ai/privacy/#webpage",
  "url": "https://intrinsicmind.ai/privacy",
  "name": "Privacy Policy | Intrinsic Mind AI Solutions",
  "description": "Information on data collection, AI training policies, security, and user rights at Intrinsic Mind AI Solutions.",
  "publisher": {
    "@type": "Organization",
    "name": "Intrinsic Mind AI Solutions",
    "url": "https://intrinsicmind.ai"
  }
};

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p>
          Welcome to Intrinsic Mind AI Solutions (“we,” “us,” or “our”). We are committed to protecting the privacy, security, and confidentiality of the data entrusted to us by our website visitors, clients, and partners.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (
          <a href="https://intrinsicmind.ai" className="text-[#2f6ff6] hover:underline font-medium">
            intrinsicmind.ai
          </a>
          ) or engage us for AI consulting, strategic advisory, data readiness assessments, or custom AI agent development. By accessing our website or using our services, you consent to the practices described in this policy.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    content: (
      <>
        <p>
          Depending on how you interact with us, we may collect several types of information:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            <strong>Contact and Consultation Data:</strong> When you book a free AI strategy consultation on our site, we collect your name, email address, company name, phone number, and any project details you share. This scheduling is facilitated by our third-party scheduling partner, Calendly/Cal.com.
          </li>
          <li>
            <strong>Usage Data:</strong> We automatically collect standard diagnostic and technical information, including your IP address, browser type, device type, operating system, referring URL, pages viewed, and the date/time of your visits.
          </li>
          <li>
            <strong>Enterprise and System Metadata:</strong> During consulting engagements, clients may share metadata concerning their data architecture, API structures, workflows, and database layouts. We treat all such business information as highly confidential.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "ai-data-policies",
    title: "3. AI Governance & Model Training Boundaries",
    content: (
      <>
        <p className="font-semibold text-[#101828]">
          At Intrinsic Mind AI Solutions, we adhere to strict enterprise AI governance principles. We recognize the security and legal risks associated with public AI models and have implemented the following policies:
        </p>
        <ul className="list-disc pl-6 space-y-3 mt-3">
          <li>
            <strong>Zero Public Training:</strong> We never use client inputs, proprietary data, proprietary source code, or enterprise information to train, fine-tune, or improve public foundation models (such as those run by OpenAI, Anthropic, or Google) unless explicitly requested and configured under a private, dedicated customer partition.
          </li>
          <li>
            <strong>Secure API Integration:</strong> The custom AI chat and automation agents we build for clients are integrated using enterprise-grade API licenses that explicitly enforce Zero Data Retention (ZDR) and prohibit the provider from using query data for model training.
          </li>
          <li>
            <strong>Data Sandboxing:</strong> All data retrieval (RAG) and workflow automation loops are designed to run within your organization's secure cloud perimeter (AWS, Azure, GCP, or private database networks) to prevent leakage.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "4. How We Use Your Information",
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Deliver our AI advisory, governance, and development services.</li>
          <li>Coordinate, customize, and conduct scheduled consultation calls and strategy sessions.</li>
          <li>Respond to inquiries, send service updates, and manage the client relationship.</li>
          <li>Optimize website performance, analyze web traffic, and improve the user experience.</li>
          <li>Enforce our terms of service and satisfy regulatory compliance obligations.</li>
        </ul>
      </>
    ),
  },
  {
    id: "data-security",
    title: "5. Data Protection & Security",
    content: (
      <>
        <p>
          We implement industry-standard physical, technical, and administrative security measures to protect your information against unauthorized access, loss, alteration, or disclosure.
        </p>
        <p>
          Our site uses Transport Layer Security (TLS/SSL) encryption for all transmitted data. When connecting to client cloud databases or APIs during data foundation assessments, we utilize secure, encrypted VPN tunnels, IAM role-based access controls, and multi-factor authentication (MFA) to isolate audit processes.
        </p>
        <p className="italic text-[#4b5563]">
          Note: No electronic transmission or storage system can be guaranteed to be 100% secure. If you suspect any vulnerability, please contact us immediately.
        </p>
      </>
    ),
  },
  {
    id: "data-retention-sharing",
    title: "6. Data Retention & Sharing",
    content: (
      <>
        <p>
          We do not sell, trade, rent, or lease your personal or enterprise data to third parties. We share information only under the following limited conditions:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            <strong>Service Providers:</strong> We share basic contact and booking data with trusted third-party providers who perform essential services on our behalf (e.g., website hosting, scheduling widgets, and email delivery platforms), subject to strict confidentiality agreements.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose information if required to do so by law, subpoena, or government regulation, or to protect our legal rights, property, and safety.
          </li>
        </ul>
        <p>
          We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy, manage client agreements, or comply with statutory retention laws.
        </p>
      </>
    ),
  },
  {
    id: "your-privacy-rights",
    title: "7. Your Privacy Rights",
    content: (
      <>
        <p>
          Depending on your location (such as the European Economic Area under GDPR, or California under the CCPA/CPRA), you may have certain rights regarding your personal information, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>The right to request access to and a copy of your personal data.</li>
          <li>The right to request rectification of inaccurate or incomplete information.</li>
          <li>The right to request deletion of your data under certain circumstances.</li>
          <li>The right to restrict or object to the processing of your data.</li>
          <li>The right to opt-out of marketing communications.</li>
        </ul>
        <p>
          To exercise any of these rights, please email us at the address provided in Section 8. We will respond to your request within the legally mandated timeframe.
        </p>
      </>
    ),
  },
  {
    id: "contact-us",
    title: "8. Updates & Contact Information",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or regulatory updates. We will post any updates on this page and revise the "Last Updated" date at the top. We encourage you to review this page periodically.
        </p>
        <p className="mt-4 font-semibold text-[#101828]">
          If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
        </p>
        <div className="mt-2 rounded-xl border border-black/5 bg-[#f8f9fa] p-4 text-[15px] space-y-1">
          <p><strong>Company:</strong> Intrinsic Mind AI Solutions</p>
          <p><strong>Attn:</strong> Legal Department</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:legal@intrinsicmind.ai" className="text-[#2f6ff6] hover:underline font-medium">
              legal@intrinsicmind.ai
            </a>
          </p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex w-full flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />
      
      {/* Hero Section */}
      <section className="bg-[#f8f9fa] border-b border-black/5 px-6 pb-12 pt-32 lg:pb-16 lg:pt-40 text-[#101828] lg:px-20">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="flex items-center gap-2 text-[14px] text-[#64748b] mb-4">
            <a href="/" className="hover:text-[#2f6ff6] transition-colors">Home</a>
            <span>/</span>
            <span className="text-[#101828] font-medium">Privacy Policy</span>
          </div>
          <FadeIn className="space-y-4">
            <h1 className="text-[36px] sm:text-[42px] font-bold leading-[1.2] tracking-tight text-[#1e293b]">
              Privacy Policy
            </h1>
            <p className="text-[16px] text-[#64748b]">
              Last updated: June 6, 2026
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 py-16 lg:py-24 lg:px-20 text-[#101828]">
        <div className="mx-auto grid w-full max-w-[1100px] gap-12 lg:grid-cols-[250px_1fr] lg:gap-16">
          {/* Sidebar - Sticky Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-4">
              <p className="text-[12px] font-bold uppercase tracking-[0.05em] text-[#64748b]">
                Table of Contents
              </p>
              <nav className="flex flex-col gap-3 border-l border-black/5 pl-4 text-[14px]">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block text-[#64748b] transition-colors hover:text-[#2f6ff6] leading-snug py-0.5"
                  >
                    {sec.title.split(". ")[1]}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Legal Content */}
          <FadeIn delay={0.1} className="space-y-12 max-w-[720px]">
            {sections.map((sec) => (
              <div key={sec.id} id={sec.id} className="scroll-mt-28 space-y-4">
                <h2 className="text-[20px] md:text-[22px] font-bold tracking-tight text-[#1e293b]">
                  {sec.title}
                </h2>
                <div className="text-[16px] leading-[1.7] text-[#4b5563] space-y-4">
                  {sec.content}
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
