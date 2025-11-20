'use client'

import { motion } from 'framer-motion'
import { Wallet, PiggyBank, Home, Car, Shield, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import BlurFade from '@/components/magicui/blur-fade'
import ShineBorder from '@/components/magicui/shine-border'

const services = [
  {
    id: 1,
    title: 'Personal Loans',
    description:
      'Finance your goals with our low-rate personal and vehicle loans.',
    icon: Wallet,
    href: '#',
    featured: true,
    gradient: 'from-fcu-primary-100 to-fcu-primary-50',
  },
  {
    id: 2,
    title: 'Everyday Banking',
    description:
      'Manage your daily finances with our flexible transaction accounts and debit cards.',
    icon: Wallet,
    href: '#',
    gradient: 'from-cyan-100 to-cyan-50',
  },
  {
    id: 3,
    title: 'Savings & Investments',
    description:
      'Grow your wealth with competitive savings rates and term deposit options.',
    icon: PiggyBank,
    href: '#',
    gradient: 'from-blue-100 to-blue-50',
  },
  {
    id: 4,
    title: 'Home Loans',
    description:
      'Competitive rates and flexible terms to help you buy your dream home.',
    icon: Home,
    href: '#',
    gradient: 'from-purple-100 to-purple-50',
  },
  {
    id: 5,
    title: 'Vehicle Loans',
    description:
      'Finance your next car with competitive rates and flexible terms.',
    icon: Car,
    href: '#',
    gradient: 'from-orange-100 to-orange-50',
  },
  {
    id: 6,
    title: 'Insurance',
    description:
      'Protect what matters most with comprehensive insurance solutions.',
    icon: Shield,
    href: '#',
    gradient: 'from-green-100 to-green-50',
  },
]

export default function ServicesSection() {
  return (
    <section id='services' className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16 space-y-4'>
          <BlurFade delay={0.1}>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
              Banking services designed for{' '}
              <span className='text-fcu-primary-900'>you</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              From everyday banking to achieving your biggest financial goals,
              we offer a complete range of products and services to support you
              at every stage of life.
            </p>
          </BlurFade>
        </div>

        {/* Bento Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service, index) => (
            <BlurFade key={service.id} delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className='h-full'
              >
                {service.featured ? (
                  <ShineBorder
                    className={`h-full rounded-3xl bg-linear-to-br ${service.gradient} hover:shadow-xl transition-all duration-300 cursor-pointer group`}
                    color={['#1e5e6f', '#6fd4a8']}
                    borderRadius={24}
                  >
                    <div className='p-8 space-y-4'>
                      <div className='inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-fcu-primary-900 text-white group-hover:scale-110 transition-transform'>
                        <service.icon className='w-7 h-7' />
                      </div>
                      <div>
                        <div className='flex items-center justify-between mb-2'>
                          <h3 className='text-2xl font-bold text-gray-900'>
                            {service.title}
                          </h3>
                          <span className='inline-block px-3 py-1 text-xs font-semibold bg-fcu-secondary-500 text-white rounded-full'>
                            Featured
                          </span>
                        </div>
                        <p className='text-gray-600 leading-relaxed'>
                          {service.description}
                        </p>
                      </div>
                      <Link
                        href={service.href}
                        className='inline-flex items-center gap-2 text-fcu-primary-900 font-semibold group-hover:gap-3 transition-all'
                      >
                        Learn more
                        <ArrowRight className='w-5 h-5' />
                      </Link>
                    </div>
                  </ShineBorder>
                ) : (
                  <div
                    className={`h-full p-8 rounded-3xl bg-gradient-to-br ${service.gradient} hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100`}
                  >
                    <div className='space-y-4'>
                      <div className='inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white text-gray-700 group-hover:scale-110 transition-transform shadow-sm'>
                        <service.icon className='w-7 h-7' />
                      </div>
                      <div>
                        <h3 className='text-xl font-bold text-gray-900 mb-2'>
                          {service.title}
                        </h3>
                        <p className='text-gray-600 leading-relaxed'>
                          {service.description}
                        </p>
                      </div>
                      <Link
                        href={service.href}
                        className='inline-flex items-center gap-2 text-gray-700 font-semibold group-hover:gap-3 transition-all'
                      >
                        Learn more
                        <ArrowRight className='w-5 h-5' />
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
