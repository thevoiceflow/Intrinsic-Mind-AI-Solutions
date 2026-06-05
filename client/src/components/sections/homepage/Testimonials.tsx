"use client";

import FadeIn from "../../ui/FadeIn";
import MarqueeSwiper from "../../ui/MarqueeSwiper";

const caseStudies = [
  {
    sector: "Technology Sector",
    description: "Six GRC functions. No shared framework. Coordination breaking down across every team. We rebuilt the operating model and streamlined development into three defined paths.",
    result: "20–30% reduction in GRC program costs.",
  },
  {
    sector: "Global Manufacturing (Fortune 100)",
    description: "Security transformation across 80+ countries. Small teams, massive operational overhead. We automated the full GRC stack — dashboards, role provisioning, integrations, reporting.",
    result: "6 levels of KPIs and KRIs fully automated. CISO scorecards running without manual input.",
  },
  {
    sector: "Financial Services",
    description: "GRC strategy complete. Implementation stalled. 300+ requirements with no execution path. We ran the vendor evaluation, designed future-state processes, and stood up the delivery framework.",
    result: "Agile GRC implementation live across all three lines of defense.",
  },
  {
    sector: "Food Industry",
    description: "Disconnected IT, GRC, and Security systems. No board-level visibility. Everything manual. We built the risk framework, compliance structure, and incident response model from scratch.",
    result: "Single integrated platform. Automated processes. Board-ready reporting.",
  },
];

export default function Testimonials() {
  // Keep all 4 case studies in every row
  const topRow = [...caseStudies, ...caseStudies, ...caseStudies, ...caseStudies];
  const bottomRow = [...caseStudies, ...caseStudies, ...caseStudies, ...caseStudies];

  return (
    <section className="bg-[#f7f8fb] py-16 md:py-24 text-[#0a1314]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10">
        <FadeIn className="text-center">
          <p className="text-[16px] md:text-[20px] text-[#5d5e63] uppercase tracking-wider font-semibold">Case Studies</p>
          <h2 className="text-[28px] md:text-[36px] font-medium text-[#0a1314] mt-2">
            Where We&apos;ve <span className="text-[#0036d6]">Worked</span>
          </h2>
        </FadeIn>
      </div>
      <div className="mt-12 w-full space-y-8">
        <MarqueeSwiper
          items={topRow}
          speed={12000}
          slideClassName="px-3"
          renderItem={(item) => (
            <div className="h-[420px] w-[350px] max-w-[350px] rounded-[12px] border border-[rgba(0,54,214,0.12)] bg-white p-6 shadow-[0px_10px_30px_rgba(15,23,42,0.06)]">
              <div className="flex h-full flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <p className="text-[18px] font-medium text-black leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-[18px] font-medium text-black leading-relaxed">
                    <strong>Result:</strong> {item.result}
                  </p>
                </div>
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="h-px w-full bg-[#d8dce3]" />
                  <p className="text-[16px] font-medium text-black">{item.sector}</p>
                </div>
              </div>
            </div>
          )}
        />
        <MarqueeSwiper
          items={bottomRow}
          speed={12000}
          reverseDirection
          slideClassName="px-3"
          renderItem={(item) => (
            <div className="h-[420px] w-[350px] max-w-[350px] rounded-[12px] border border-[rgba(0,54,214,0.12)] bg-white p-6 shadow-[0px_10px_30px_rgba(15,23,42,0.06)]">
              <div className="flex h-full flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <p className="text-[18px] font-medium text-black leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-[18px] font-medium text-black leading-relaxed">
                    <strong>Result:</strong> {item.result}
                  </p>
                </div>
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="h-px w-full bg-[#d8dce3]" />
                  <p className="text-[16px] font-medium text-black">{item.sector}</p>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}
