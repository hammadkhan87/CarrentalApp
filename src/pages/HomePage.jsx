import React from 'react'
import HeroSection from '../sections/HeroSection'
import ServiceSection from '../sections/ServiceSection'
import EventTypeSection from '../sections/EventTypeSection'
import CTASection from '../sections/CTASection'
const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <ServiceSection/>
        <EventTypeSection/>
        <CTASection/>
    </div>
  )
}

export default HomePage