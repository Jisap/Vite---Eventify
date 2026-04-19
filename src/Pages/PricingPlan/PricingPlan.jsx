import React from 'react'
import PageHeader from '../../Components/PageHeader/PageHeader'
import Pricing from '../../Components/Index/Pricing/Pricing'
import Events from '../../Components/Index/Events/Events'
import Benefits from '../../Components/Index/Benefits/Benefits'
import Faqs from '../../Components/Index/Faqs/Faqs'

const PricingPlan = () => {
  return (
    <>
      <PageHeader
        title="Pricing Plan"
        breadcrumbTitle="Pricing Plan"
        bgImage="/Images/section-banner.jpg"
      />

      <Pricing />
      <Events />
      <Benefits />
      <Faqs />
    </>
  )
}

export default PricingPlan