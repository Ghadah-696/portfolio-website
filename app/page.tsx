"use client"

import { LanguageProvider } from '@/lib/i18n'
import { Header } from '@/components/portfolio/header'
import { Hero } from '@/components/portfolio/hero'
import { Services } from '@/components/portfolio/services'
import { Projects } from '@/components/portfolio/projects'
import { Testimonials } from '@/components/portfolio/testimonials'
import { TechStack } from '@/components/portfolio/tech-stack'
import { About } from '@/components/portfolio/about'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <Projects />
          <Testimonials />
          <TechStack />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
