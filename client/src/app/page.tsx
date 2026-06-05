import type { Metadata } from "next";
import AdditionalSection from "../components/sections/homepage/AdditionalSection";
import Content from "../components/sections/homepage/Content";
import FAQ from "../components/sections/homepage/FAQ";
import Hero from "../components/sections/homepage/Hero";
import Services from "../components/sections/homepage/Services";
import StepsSection from "../components/sections/homepage/StepsSection";
import Testimonials from "../components/sections/homepage/Testimonials";

export const metadata: Metadata = {
  title: "AI Orchestration & Enterprise AI Consultants",
  description: "Eliminate AI chaos and achieve operational efficiency. Custom AI Chat & Automation Agents built specifically for your enterprise workflow with proper governance and data readiness.",
  alternates: {
    canonical: "/",
  },
};

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://intrinsicmind.ai/#service-consulting",
    "name": "Intrinsic Mind AI Solutions",
    "image": "https://intrinsicmind.ai/assets/Logo-light.webp",
    "url": "https://intrinsicmind.ai",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "We already have AI tools running. Can you still help?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes - this is the most common situation we walk into. Most enterprises have the tools. What's missing is the governance layer. We assess what's running, identify the gaps, and build the framework to manage it."
        }
      },
      {
        "@type": "Question",
        "name": "What does the AI governance framework cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Three areas: how tools are orchestrated, how risk is managed, and how value from each tool is measured and reported to leadership. Tailored to your org - not a generic template."
        }
      },
      {
        "@type": "Question",
        "name": "How do you assess data readiness?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A structured assessment - how your data is organized, governed, and accessible across systems. We identify what needs to change and build the remediation plan."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mid-market and large enterprises - with deep experience in federal agencies, financial services, and retail. Our frameworks adapt to your regulatory and operational environment."
        }
      },
      {
        "@type": "Question",
        "name": "What does a typical engagement look like?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Discovery and gap assessment in the first two weeks. First AI agents or governance framework live within 60–90 days. We'll map your specific timeline on the call."
        }
      }
    ]
  }
];

export default function Home() {
  return (
    <div className="flex w-full flex-col bg-[#f6f7f8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Hero />
      <Content />
      <Services />
      <AdditionalSection />
      <StepsSection />
      <Testimonials />
      <FAQ />
    </div>
  );
}


