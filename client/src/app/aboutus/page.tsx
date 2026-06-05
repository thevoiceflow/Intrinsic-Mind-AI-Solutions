import type { Metadata } from "next";
import AboutHero from "../../components/sections/aboutus/Hero";

export const metadata: Metadata = {
  title: "Founder Kevin Young & Our AI Mission",
  description: "Meet Kevin Young, Founder of Intrinsic Mind. Backed by 15+ years of enterprise tech experience helping CIOs navigate governance, strategy, and data readiness.",
  alternates: {
    canonical: "/aboutus",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://intrinsicmind.ai/#person-kevin-young",
  "name": "Kevin Young",
  "jobTitle": "Founder",
  "worksFor": {
    "@type": "Organization",
    "name": "Intrinsic Mind AI Solutions",
    "url": "https://intrinsicmind.ai"
  },
  "sameAs": [
    "https://www.linkedin.com/company/intrinsic-mind-ai-solutions"
  ]
};

export default function AboutUsPage() {
  return (
    <div className="flex w-full flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutHero />
    </div>
  );
}


