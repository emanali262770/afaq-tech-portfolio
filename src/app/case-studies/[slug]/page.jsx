import { notFound } from "next/navigation";

import CaseStudyHeroSection from "@/components/caseStudySection/CaseStudyHeroSection";
import CaseStudyDetailSection from "@/components/caseStudySection/CaseStudyDetailSection";
import TestimonialsInfinite from "@/components/sections/TestimonialsInfinite";
import { CASE_STUDIES } from "@/components/caseStudySection/data";

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;

  const data = CASE_STUDIES[slug];
  if (!data) return notFound();

  return (
    <div>
      <CaseStudyHeroSection title={data.title} topBar={data.topBar} />
      <CaseStudyDetailSection data={data} />
      <TestimonialsInfinite />
    </div>
  );
}
