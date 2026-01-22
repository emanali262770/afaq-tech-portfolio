import CaseStudyHeroSection from '@/components/caseStudySection/CaseStudyHeroSection'
import CaseStudyIndustriesGrid from '@/components/caseStudySection/CaseStudyIndustriesGrid'
import TestimonialsInfinite from '@/components/sections/TestimonialsInfinite'
import React from 'react'

const CaseStudypage = () => {
  return (
    <div>
      <CaseStudyHeroSection/>
      <CaseStudyIndustriesGrid/>
       <TestimonialsInfinite/>
    </div>
  )
}

export default CaseStudypage