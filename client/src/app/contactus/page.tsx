import type { Metadata } from "next";
import ContactHero from "../../components/sections/contactus/hero";

export const metadata: Metadata = {
  title: "Book Your Free AI Strategy Session",
  description: "Schedule a free consult session with Kevin Young to assess your AI environment, map critical gaps, and outline a prioritized governance and strategy action plan.",
  alternates: {
    canonical: "/contactus",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://intrinsicmind.ai/#contact-page",
  "url": "https://intrinsicmind.ai/contactus",
  "name": "Contact Intrinsic Mind AI Solutions",
  "description": "Book a free AI strategy and consultation session with Kevin Young.",
  "mainEntity": {
    "@type": "Organization",
    "name": "Intrinsic Mind AI Solutions",
    "url": "https://intrinsicmind.ai"
  }
};

export default function ContactUsPage() {
  return (
    <div className="flex w-full flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactHero />
    </div>
  );
}


