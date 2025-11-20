import Navbar from '@/components/navbar'
import HeroSection from '@/components/sections/hero-section'
import ServicesSection from '@/components/sections/services-section'
import ProductsSection from '@/components/sections/products-section'
import WhyChooseSection from '@/components/sections/why-choose-section'
import CalculatorSection from '@/components/sections/calculator-section'
import TestimonialsSection from '@/components/sections/testimonials-section'
import CommunitySection from '@/components/sections/community-section'
import CTASection from '@/components/sections/cta-section'
import Footer from '@/components/sections/footer'

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <WhyChooseSection />
        <CalculatorSection />
        <TestimonialsSection />
        <CommunitySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
