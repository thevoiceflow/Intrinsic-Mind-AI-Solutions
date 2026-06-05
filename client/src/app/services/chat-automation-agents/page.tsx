import type { Metadata } from "next";
import ServicePageTemplate from "../../../components/sections/servicespage/ServicePageTemplate";
import { getServicePageContent } from "../../../components/sections/servicespage/servicePageRegistry";

export const metadata: Metadata = {
  title: "Custom AI Chat & Workflow Automation Agents",
  description: "Automate high-friction tasks, approvals, service requests, and triage. Bring live-system answers directly into teams' existing tools with workflow automation agents.",
  alternates: {
    canonical: "/services/chat-automation-agents",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://intrinsicmind.ai/#service-chat-automation",
  "name": "Chat & Automation Agents",
  "provider": {
    "@type": "Organization",
    "name": "Intrinsic Mind AI Solutions",
    "url": "https://intrinsicmind.ai"
  },
  "serviceType": "AI Development & Automation Consulting",
  "description": "We identify high-friction manual processes and develop custom AI chat and workflow automation agents that integrate directly into existing enterprise tools."
};

export default function ChatAutomationAgentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageTemplate
        content={getServicePageContent("chat-automation-agents")}
      />
    </>
  );
}


