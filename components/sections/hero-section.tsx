'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LightRays } from '@/components/ui/light-rays'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { CardSpotlight } from '@/components/ui/card-spotlight'
import { CoolMode } from '@/components/ui/cool-mode'
import ShimmerButton from '@/components/magicui/shimmer-button'
import NumberTicker from '@/components/magicui/number-ticker'
import BlurFade from '@/components/magicui/blur-fade'
import BlurText from '../BlurText'

export default function HeroSection() {
  return (
    <section className='relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-white via-fcu-primary-50/30 to-white'>
      {/* Light Rays Background */}
      <LightRays
        className='absolute inset-0'
        count={8}
        color='rgba(30, 94, 111, 0.15)'
        blur={40}
        speed={12}
        length='80vh'
      />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Content */}
          <div className='space-y-8'>
            {/* Trust Badge */}
            <BlurFade delay={0.1}>
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fcu-secondary-500 border border-fcu-secondary-500/20'>
                <Check className='w-4 h-4 text-white' />
                <span className='text-sm font-medium text-white'>
                  Trusted by over 50,000 New Zealanders
                </span>
              </div>
            </BlurFade>

            {/* Heading */}
            <div className='space-y-4'>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                <BlurText
                  text='Banking that puts people first'
                  delay={150}
                  animateBy='words'
                  direction='top'
                  className='text-5xl font-bold leading-tight text-fcu-primary-900'
                />
              </h1>

              <BlurFade delay={0.3}>
                <p className='text-xl text-gray-600 max-w-xl'>
                  As a member-owned credit union, we&apos;re committed to
                  providing fair rates, exceptional service, and banking
                  solutions that help you achieve your financial goals.
                </p>
              </BlurFade>
            </div>

            {/* CTA Buttons */}
            <BlurFade delay={0.4}>
              <div className='flex flex-col sm:flex-row gap-4 items-center sm:items-start'>
                <CoolMode>
                  <ShimmerButton
                    className='group h-11 px-8'
                    shimmerColor='#6fd4a8'
                    background='rgb(30, 94, 111)'
                    borderRadius='9999px'
                  >
                    <span className='whitespace-pre-wrap text-center text-base font-medium leading-none tracking-tight text-white flex items-center gap-2'>
                      Become a Member
                      <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                    </span>
                  </ShimmerButton>
                </CoolMode>
                <Button
                  variant='outline'
                  size='lg'
                  asChild
                  className='h-11 px-8'
                >
                  <Link href='#services'>Explore Services</Link>
                </Button>
              </div>
            </BlurFade>

            {/* Stats */}
            <BlurFade delay={0.5}>
              <div className='grid grid-cols-3 gap-8 pt-8'>
                <div>
                  <div className='flex items-baseline gap-1'>
                    <NumberTicker
                      value={50}
                      className='text-4xl font-bold text-fcu-primary-900'
                    />
                    <span className='text-3xl font-bold text-fcu-primary-900'>
                      K+
                    </span>
                  </div>
                  <p className='text-sm text-gray-600 mt-1'>Members</p>
                </div>
                <div>
                  <div className='flex items-baseline gap-1'>
                    <span className='text-4xl font-bold text-fcu-primary-900'>
                      $
                    </span>
                    <NumberTicker
                      value={2.5}
                      decimalPlaces={1}
                      className='text-4xl font-bold text-fcu-primary-900'
                    />
                    <span className='text-3xl font-bold text-fcu-primary-900'>
                      B+
                    </span>
                  </div>
                  <p className='text-sm text-gray-600 mt-1'>Assets</p>
                </div>
                <div>
                  <div className='flex items-baseline gap-1'>
                    <NumberTicker
                      value={75}
                      className='text-4xl font-bold text-fcu-primary-900'
                    />
                    <span className='text-3xl font-bold text-fcu-primary-900'>
                      +
                    </span>
                  </div>
                  <p className='text-sm text-gray-600 mt-1'>Years</p>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right Column - Image/Visual */}
          <BlurFade delay={0.6}>
            <motion.div
              className='relative'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <CardSpotlight className='rounded-3xl'>
                <div className='relative rounded-3xl overflow-hidden shadow-2xl'>
                  {/* Hero Image */}
                  <div className='aspect-4/3 relative'>
                    <Image
                      src='/photo-1522202176988-66273c2fd55f.jpg'
                      alt='Happy team collaborating on financial planning'
                      fill
                      className='object-cover'
                      priority
                    />
                  </div>
                  {/* Decorative Elements */}
                  <div className='absolute -top-4 -right-4 w-24 h-24 bg-fcu-secondary-400 rounded-full blur-3xl opacity-50'></div>
                  <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-fcu-primary-400 rounded-full blur-3xl opacity-50'></div>
                </div>
              </CardSpotlight>
            </motion.div>
          </BlurFade>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className='absolute bottom-0 left-0 right-0 h-20 bg-white transform translate-y-1/2 rounded-t-[50%]'></div>
    </section>
  )
}
