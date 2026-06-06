import type { Metadata } from "next";
import FadeIn from "../../components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Terms of Service for Intrinsic Mind AI Solutions to understand the legal terms governing our AI consulting, strategic advisory, and custom agent development.",
  alternates: {
    canonical: "/terms",
  },
};

const termsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://intrinsicmind.ai/terms/#webpage",
  "url": "https://intrinsicmind.ai/terms",
  "name": "Terms of Service | Intrinsic Mind AI Solutions",
  "description": "Legal terms and conditions governing the use of the Intrinsic Mind AI website and consulting services.",
  "publisher": {
    "@type": "Organization",
    "name": "Intrinsic Mind AI Solutions",
    "url": "https://intrinsicmind.ai"
  }
};

const sections = [
  {
    id: "acceptance-of-terms",
    title: "1. Acceptance of Terms",
    content: (
      <>
        <p>
          Welcome to the website of Intrinsic Mind AI Solutions (“we,” “us,” or “our”). By accessing our website (
          <a href="https://intrinsicmind.ai" className="text-[#2f6ff6] hover:underline font-medium">
            intrinsicmind.ai
          </a>
          ) or by scheduling a consultation, booking a session, or purchasing/engaging our consulting, advisory, or development services, you agree to comply with and be bound by these Terms of Service.
        </p>
        <p>
          If you do not agree with any part of these terms, you must immediately cease using our website and services.
        </p>
      </>
    ),
  },
  {
    id: "scope-of-services",
    title: "2. Scope of Services",
    content: (
      <>
        <p>
          Intrinsic Mind AI Solutions provides specialized enterprise technology consulting and custom AI integration services, which include:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>AI Strategic Advisory &amp; Governance:</strong> Developing custom risk management, measurement, and orchestration frameworks for enterprise AI tools.</li>
          <li><strong>Data Foundation Readiness:</strong> Auditing databases, evaluating data schemas, resolving reference integrity, mapping dependency chains, and preparing enterprise repositories for AI agent training/retrieval.</li>
          <li><strong>Custom AI Chat &amp; Automation Agents:</strong> Designing, programming, and deploying customized AI software agents and automation systems.</li>
        </ul>
        <p>
          Any consulting engagement is subject to a separate, mutually signed Master Services Agreement (MSA) or Statement of Work (SOW) that details specific timelines, pricing, milestones, deliverables, and service levels. In the event of a conflict between these website Terms of Service and an executed MSA/SOW, the terms of the MSA/SOW will govern.
        </p>
      </>
    ),
  },
  {
    id: "consultations-and-booking",
    title: "3. Consultations & Booking",
    content: (
      <>
        <p>
          Our website offers visitors the ability to schedule free, initial consultation sessions to discuss enterprise AI objectives. When booking a session, you agree to:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Provide accurate, current, and complete details about yourself and your company.</li>
          <li>Ensure that you are authorized to represent your business entity in making scheduling requests.</li>
          <li>Notify us at least 24 hours in advance if you need to reschedule or cancel a booked appointment.</li>
        </ul>
        <p>
          We reserve the right to decline, reschedule, or cancel any consultation booking at our sole discretion, including bookings that appear fraudulent or outside our target enterprise scope.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property Rights",
    content: (
      <>
        <p>
          <strong>Website Content:</strong> All content, designs, code, graphics, copy, logos, and materials on the Intrinsic Mind website are the intellectual property of Intrinsic Mind AI Solutions, protected by US and international copyright, trademark, and intellectual property laws.
        </p>
        <p>
          <strong>Consulting Methodologies:</strong> We retain all rights, titles, and interests in our pre-existing proprietary methodologies, tools, framework architectures, template files, and general consulting expertise.
        </p>
        <p>
          <strong>Deliverables:</strong> Ownership of custom software components, prompt templates, database mappings, or custom AI agents built specifically for a client will be governed by the applicable MSA or SOW. Generally, upon full payment of all fees due under the SOW, ownership of such custom client deliverables is transferred to the client.
        </p>
      </>
    ),
  },
  {
    id: "ai-systems-disclaimer",
    title: "5. AI Outputs & Performance Disclaimer",
    content: (
      <>
        <p className="font-semibold text-[#101828]">
          Please read this section carefully, as it details the nature of generative AI technologies:
        </p>
        <ul className="list-disc pl-6 space-y-3 mt-3">
          <li>
            <strong>Probabilistic Nature:</strong> AI models, large language models (LLMs), and autonomous agents operate on probabilistic calculations. While we build robust verification boundaries, sandboxes, and safety rules, AI outputs cannot be guaranteed to be 100% accurate, complete, or consistent.
          </li>
          <li>
            <strong>Human-in-the-Loop Oversight:</strong> Clients are solely responsible for reviewing and verifying the outputs of any custom AI agents before automating actions that have operational, financial, medical, legal, or brand impact.
          </li>
          <li>
            <strong>No Third-Party Warranty:</strong> We make no warranties regarding the uptime, behavior, availability, or pricing of third-party foundation models (e.g., OpenAI API, Anthropic Claude API) or cloud services.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "6. Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, in no event shall Intrinsic Mind AI Solutions or its affiliates, officers, employees, or agents be liable for any special, incidental, indirect, punitive, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, business interruption, or loss of privacy) arising out of or in any way related to the use of or inability to use this website, our consultation bookings, or our services.
        </p>
        <p>
          Our total aggregate liability for all claims arising out of or related to these Terms of Service or our website will not exceed one hundred US Dollars ($100.00 USD). For active consulting engagements, liability caps will be strictly governed by the signed MSA/SOW.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "7. Governing Law & Dispute Resolution",
    content: (
      <>
        <p>
          These Terms of Service and any disputes arising out of or related to them shall be governed by, and construed in accordance with, the laws of the State of Delaware, United States, without regard to its conflict of law rules.
        </p>
        <p>
          Any legal action, suit, or proceeding arising out of these terms shall be instituted exclusively in the federal or state courts located in Delaware, and both parties consent to the personal jurisdiction and venue of such courts.
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
          We reserve the right to modify these Terms of Service at any time. We will post modified terms on this page and revise the "Last Updated" date at the top. Your continued use of our website or services after changes are posted constitutes acceptance of the updated terms.
        </p>
        <p className="mt-4 font-semibold text-[#101828]">
          For questions, notices, or concerns regarding these Terms of Service, please contact us at:
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

export default function TermsOfServicePage() {
  return (
    <div className="flex w-full flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      
      {/* Hero Section */}
      <section className="bg-[#f8f9fa] border-b border-black/5 px-6 pb-12 pt-32 lg:pb-16 lg:pt-40 text-[#101828] lg:px-20">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="flex items-center gap-2 text-[14px] text-[#64748b] mb-4">
            <a href="/" className="hover:text-[#2f6ff6] transition-colors">Home</a>
            <span>/</span>
            <span className="text-[#101828] font-medium">Terms of Service</span>
          </div>
          <FadeIn className="space-y-4">
            <h1 className="text-[36px] sm:text-[42px] font-bold leading-[1.2] tracking-tight text-[#1e293b]">
              Terms of Service
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
