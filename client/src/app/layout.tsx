import type { Metadata } from "next";
import { Geist, Geist_Mono, Tenor_Sans } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import "./globals.css";
import MainLayout from "../components/layout/MainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tenorSans = Tenor_Sans({
  variable: "--font-tenor-sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://intrinsicmind.ai"),
  title: {
    default: "Intrinsic Mind AI Solutions",
    template: "%s | Intrinsic Mind AI Solutions",
  },
  description: "Tailored AI Chat & Automation Agents built for enterprise efficiency. Eliminate AI chaos with structured AI strategic advisory, data readiness, and custom workflows.",
  keywords: ["AI Orchestration", "Enterprise AI Solutions", "AI Strategic Advisory", "AI Governance", "Data Foundation Readiness", "Chat Agents", "Workflow Automation", "Kevin Young"],
  icons: {
    icon: "/assets/favicon.webp",
    shortcut: "/assets/favicon.webp",
    apple: "/assets/favicon.webp",
  },
  openGraph: {
    title: "Intrinsic Mind AI Solutions",
    description: "Tailored AI Chat & Automation Agents built for enterprise efficiency. Eliminate AI chaos with structured AI strategic advisory, data readiness, and custom workflows.",
    url: "https://intrinsicmind.ai",
    siteName: "Intrinsic Mind AI Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/Logo-light.webp",
        width: 800,
        height: 600,
        alt: "Intrinsic Mind AI Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intrinsic Mind AI Solutions",
    description: "Tailored AI Chat & Automation Agents built for enterprise efficiency. Eliminate AI chaos with structured AI strategic advisory, data readiness, and custom workflows.",
    images: ["/assets/Logo-light.webp"],
  },
  alternates: {
    canonical: "https://intrinsicmind.ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const orgAndWebSiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://intrinsicmind.ai/#organization",
      "name": "Intrinsic Mind AI Solutions",
      "url": "https://intrinsicmind.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://intrinsicmind.ai/assets/Logo-light.webp"
      },
      "founder": {
        "@type": "Person",
        "name": "Kevin Young",
        "jobTitle": "Founder"
      },
      "sameAs": [
        "https://www.linkedin.com/company/intrinsic-mind-ai-solutions"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://intrinsicmind.ai/#website",
      "url": "https://intrinsicmind.ai",
      "name": "Intrinsic Mind AI Solutions",
      "publisher": {
        "@id": "https://intrinsicmind.ai/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${tenorSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgAndWebSiteSchema) }}
        />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}


