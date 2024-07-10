import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Screen from './Components/Screen'
import Features from './Components/Features'
import Workflow from './Components/Workflow'
import Pricing from './Components/Pricing'
import Testimonials from './Components/Testimonials'
import FAQ from './Components/FAQ'
import CTA from './Components/CTA'
import Footer from './Components/Footer'
import ContactForm from './Components/Contact'
import { useState } from 'react';

function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full sticky top-0 z-50">
        <Navbar />
      </div>
      <main className="flex-grow w-full">
        <Hero />
        <Screen />
        <Features />
        <Workflow />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <ContactForm />
      </main>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Page