'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import BlurFade from '@/components/magicui/blur-fade'
import ShimmerButton from '@/components/magicui/shimmer-button'

const loanProducts = [
  {
    id: 1,
    name: 'Home Loan',
    rate: '6.49',
    badge: 'Most Popular',
    features: [
      'Competitive fixed and variable rates',
      'Flexible repayment options',
      'Offset account available',
      'No monthly account fees',
      'Free extra repayments',
    ],
  },
  {
    id: 2,
    name: 'Personal Loan',
    rate: '8.95',
    features: [
      'Quick approval process',
      'Borrow $2,000 - $50,000',
      'Fixed interest rates',
      'Flexible terms up to 7 years',
      'No early repayment fees',
    ],
  },
  {
    id: 3,
    name: 'Vehicle Loan',
    rate: '7.95',
    features: [
      'New and used vehicles',
      'Up to 100% finance available',
      'Competitive rates',
      'Flexible repayment terms',
      'Fast online application',
    ],
  },
]

const savingsProducts = [
  {
    id: 1,
    name: 'Savings Account',
    rate: '4.25',
    badge: 'Best Rate',
    features: [
      'High interest on all balances',
      'No minimum balance required',
      'Unlimited transactions',
      'Easy online access',
      'No monthly fees',
    ],
  },
  {
    id: 2,
    name: 'Term Deposit',
    rate: '5.50',
    features: [
      'Fixed rate guaranteed',
      'Terms from 3 to 60 months',
      'Flexible investment amounts',
      'Interest paid monthly or at maturity',
      'Early withdrawal options',
    ],
  },
  {
    id: 3,
    name: 'KiwiSaver',
    rate: '8.20',
    features: [
      'Government contributions',
      'Low fees',
      'Expert fund management',
      'First home buyer assistance',
      'Retirement planning support',
    ],
  },
]

export default function ProductsSection() {
  return (
    <section id='products' className='py-24 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16 space-y-4'>
          <BlurFade delay={0.1}>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
              Our products & <span className='text-fcu-primary-900'>rates</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Competitive rates and flexible terms designed to help you achieve
              your financial goals.
            </p>
          </BlurFade>
        </div>

        {/* Tabs */}
        <BlurFade delay={0.3}>
          <Tabs defaultValue='loans' className='w-full'>
            <div className='flex justify-center mb-12'>
              <TabsList>
                <TabsTrigger value='loans'>Loans</TabsTrigger>
                <TabsTrigger value='savings'>Savings</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value='loans'>
              <div className='grid md:grid-cols-3 gap-6'>
                {loanProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className='relative'
                  >
                    <div className='bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col'>
                      {product.badge && (
                        <div className='absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-fcu-secondary-500 text-white text-sm font-semibold rounded-full'>
                          {product.badge}
                        </div>
                      )}

                      <div className='mb-6'>
                        <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                          {product.name}
                        </h3>
                        <div className='flex items-baseline gap-2'>
                          <span className='text-sm text-gray-600'>From</span>
                          <span className='text-5xl font-bold text-fcu-primary-900'>
                            {product.rate}%
                          </span>
                          <span className='text-sm text-gray-600'>p.a.</span>
                        </div>
                      </div>

                      <ul className='space-y-3 mb-8 flex-1'>
                        {product.features.map((feature, idx) => (
                          <li key={idx} className='flex items-start gap-3'>
                            <Check className='w-5 h-5 text-fcu-secondary-600 flex-shrink-0 mt-0.5' />
                            <span className='text-gray-600'>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <ShimmerButton
                        className='w-full'
                        shimmerColor='#6fd4a8'
                        background='rgb(30, 94, 111)'
                        borderRadius='9999px'
                      >
                        <span className='whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base flex items-center gap-2 justify-center w-full'>
                          Apply Now
                          <ArrowRight className='w-4 h-4' />
                        </span>
                      </ShimmerButton>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value='savings'>
              <div className='grid md:grid-cols-3 gap-6'>
                {savingsProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className='relative'
                  >
                    <div className='bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col'>
                      {product.badge && (
                        <div className='absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-fcu-secondary-500 text-white text-sm font-semibold rounded-full'>
                          {product.badge}
                        </div>
                      )}

                      <div className='mb-6'>
                        <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                          {product.name}
                        </h3>
                        <div className='flex items-baseline gap-2'>
                          <span className='text-sm text-gray-600'>Up to</span>
                          <span className='text-5xl font-bold text-fcu-primary-900'>
                            {product.rate}%
                          </span>
                          <span className='text-sm text-gray-600'>p.a.</span>
                        </div>
                      </div>

                      <ul className='space-y-3 mb-8 flex-1'>
                        {product.features.map((feature, idx) => (
                          <li key={idx} className='flex items-start gap-3'>
                            <Check className='w-5 h-5 text-fcu-secondary-600 flex-shrink-0 mt-0.5' />
                            <span className='text-gray-600'>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        variant='default'
                        size='lg'
                        className='w-full group'
                      >
                        Open Account
                        <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </BlurFade>

        {/* View All Button */}
        <BlurFade delay={0.5}>
          <div className='text-center mt-12'>
            <Button variant='outline' size='lg' asChild>
              <a href='#rates'>View All Rates</a>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
