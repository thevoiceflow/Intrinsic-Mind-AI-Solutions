import type { Metadata } from "next";
import ServicePageTemplate from "../../../components/sections/servicespage/ServicePageTemplate";
import { getServicePageContent } from "../../../components/sections/servicespage/servicePageRegistry";

export const metadata: Metadata = {
  title: "Data Foundation Readiness & AI Data Architecture",
  description: "Prepare your enterprise data for AI integration. Assess data quality, map dependencies, sequence loads, and implement cross-layer governance rules.",
  alternates: {
    canonical: "/services/data-foundation-readiness",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://intrinsicmind.ai/#service-data-readiness",
  "name": "Data Foundation Readiness",
  "provider": {
    "@type": "Organization",
    "name": "Intrinsic Mind AI Solutions",
    "url": "https://intrinsicmind.ai"
  },
  "serviceType": "Data Architecture Consulting",
  "description": "We audit enterprise data environments, resolve reference integrity issues, and map load sequences to prepare databases for AI agent deployments."
};

export default function DataFoundationReadinessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageTemplate
        content={getServicePageContent("data-foundation-readiness")}
      />
    </>
  );
}


