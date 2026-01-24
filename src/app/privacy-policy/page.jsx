import PrivacyPolicyContentSection from '@/components/PrviacyPolicySection/PrivacyPolicyContentsection'
import PrivacyPolicyHeroSection from '@/components/PrviacyPolicySection/PrivacyPolicyHeroSection'
import TestimonialsInfinite from '@/components/sections/TestimonialsInfinite'
import React from 'react'

const PrivacyPolicyPage = () => {
  return (
    <div>
        <PrivacyPolicyHeroSection/>
        <PrivacyPolicyContentSection/>
        <TestimonialsInfinite/>
    </div>
  )
}

export default PrivacyPolicyPage