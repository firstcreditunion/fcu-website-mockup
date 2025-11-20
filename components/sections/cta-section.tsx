'use client'

import { ArrowRight, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import ShimmerButton from '@/components/magicui/shimmer-button'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { CoolMode } from '@/components/ui/cool-mode'
import BlurFade from '@/components/magicui/blur-fade'

export default function CTASection() {
  return (
    <section className='py-24 bg-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]'></div>

      <div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <BlurFade>
          <div className='bg-gradient-to-br from-fcu-primary-900 via-fcu-primary-800 to-fcu-primary-900 rounded-[2.5rem] p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden'>
            {/* Decorative Elements */}
            <div className='absolute top-0 right-0 w-64 h-64 bg-fcu-secondary-500 rounded-full blur-3xl opacity-20'></div>
            <div className='absolute bottom-0 left-0 w-64 h-64 bg-fcu-primary-600 rounded-full blur-3xl opacity-30'></div>

            <div className='relative z-10 space-y-8'>
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                  Ready to join First Credit Union?
                </h2>
                <p className='text-xl text-fcu-primary-100 max-w-2xl mx-auto'>
                  Experience the difference of member-owned banking. Join over
                  50,000 New Zealanders who trust us with their financial
                  future.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='flex flex-col sm:flex-row gap-4 justify-center items-center'
              >
                <CoolMode>
                  <ShimmerButton
                    className='group px-8'
                    shimmerColor='#ffffff'
                    background='rgb(111, 212, 168)'
                    borderRadius='9999px'
                  >
                    <span className='whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-fcu-primary-900 lg:text-lg flex items-center gap-2'>
                      Become a Member
                      <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </span>
                  </ShimmerButton>
                </CoolMode>

                <HoverBorderGradient
                  containerClassName='rounded-full'
                  as='button'
                  className='bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-6 py-3 text-base font-medium'
                >
                  Contact Us
                </HoverBorderGradient>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='pt-8 border-t border-white/20'
              >
                <p className='text-fcu-primary-100 mb-2'>
                  Have questions? Call us on
                </p>
                <a
                  href='tel:0800123456'
                  className='inline-flex items-center gap-2 text-2xl font-bold hover:text-fcu-secondary-300 transition-colors'
                >
                  <Phone className='w-6 h-6' />
                  0800 123 456
                </a>
              </motion.div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
