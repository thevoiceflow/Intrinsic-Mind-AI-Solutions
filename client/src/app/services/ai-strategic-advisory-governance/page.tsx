import type { Metadata } from "next";
import ServicePageTemplate from "../../../components/sections/servicespage/ServicePageTemplate";
import { getServicePageContent } from "../../../components/sections/servicespage/servicePageRegistry";

export const metadata: Metadata = {
  title: "AI Strategic Advisory & Governance for Enterprises",
  description: "Establish clear ownership, risk controls, and ROI dashboards for enterprise AI tools. Implement custom AI policies and scale integrations safely.",
  alternates: {
    canonical: "/services/ai-strategic-advisory-governance",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://intrinsicmind.ai/#service-advisory-governance",
  "name": "AI Strategic Advisory & Governance",
  "provider": {
    "@type": "Organization",
    "name": "Intrinsic Mind AI Solutions",
    "url": "https://intrinsicmind.ai"
  },
  "serviceType": "AI Consulting",
  "description": "We assess active AI deployments, design risk controls, and build ROI dashboards to give enterprise leadership complete visibility into their AI environments."
};

export default function AIStrategicAdvisoryGovernancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageTemplate
        content={getServicePageContent("ai-strategic-advisory-governance")}
      />
    </>
  );
}


