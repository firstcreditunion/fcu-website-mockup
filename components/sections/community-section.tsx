'use client'

import { TreePine, GraduationCap, Users2, HeartHandshake } from 'lucide-react'
import { motion } from 'framer-motion'
import BlurFade from '@/components/magicui/blur-fade'

const initiatives = [
  {
    id: 1,
    icon: TreePine,
    title: 'Environmental Initiatives',
    description:
      'Partnering with local environmental groups to plant trees and support sustainability projects across New Zealand.',
    stats: '10,000+ Trees Planted',
    color: 'from-green-400 to-emerald-600',
  },
  {
    id: 2,
    icon: GraduationCap,
    title: 'Financial Education',
    description:
      'Free financial literacy workshops for schools and community groups to help Kiwis make informed financial decisions.',
    stats: '5,000+ Students Educated',
    color: 'from-blue-400 to-cyan-600',
  },
  {
    id: 3,
    icon: Users2,
    title: 'Local Business Support',
    description:
      'Dedicated programs to help local businesses grow and thrive with competitive rates and personalized service.',
    stats: '1,500+ Businesses Supported',
    color: 'from-purple-400 to-violet-600',
  },
  {
    id: 4,
    icon: HeartHandshake,
    title: 'Charity Partnerships',
    description:
      'Supporting local charities and community organizations through donations, sponsorships, and volunteer programs.',
    stats: '$500K+ Donated Annually',
    color: 'from-pink-400 to-rose-600',
  },
]

export default function CommunitySection() {
  return (
    <section className='py-24 bg-gradient-to-br from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16 space-y-4'>
          <BlurFade delay={0.1}>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
              Community{' '}
              <span className='text-fcu-primary-900'>involvement</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We believe in giving back to the communities that support us.
              Here&apos;s how we&apos;re making a difference.
            </p>
          </BlurFade>
        </div>

        {/* Initiatives Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {initiatives.map((initiative, index) => (
            <BlurFade key={initiative.id} delay={0.1 * index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className='group relative h-full'
              >
                <div className='relative h-full bg-white rounded-3xl p-8 border border-gray-200 hover:border-fcu-primary-200 hover:shadow-2xl transition-all duration-300 overflow-hidden'>
                  {/* Background Gradient */}
                  <div
                    className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${initiative.color} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity`}
                  ></div>

                  {/* Icon */}
                  <div className='relative'>
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${initiative.color} text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <initiative.icon className='w-8 h-8' />
                    </div>
                  </div>

                  {/* Content */}
                  <div className='relative'>
                    <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                      {initiative.title}
                    </h3>
                    <p className='text-gray-600 leading-relaxed mb-4'>
                      {initiative.description}
                    </p>
                    <div
                      className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${initiative.color} text-white text-sm font-semibold`}
                    >
                      {initiative.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* CTA Banner */}
        <BlurFade delay={0.5}>
          <div className='mt-16 bg-gradient-to-r from-fcu-primary-900 to-fcu-primary-700 rounded-3xl p-12 text-center text-white'>
            <h3 className='text-3xl font-bold mb-4'>Want to get involved?</h3>
            <p className='text-lg text-fcu-primary-100 mb-8 max-w-2xl mx-auto'>
              Join us in making a positive impact on our communities. Together,
              we can create lasting change.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-4 bg-white text-fcu-primary-900 rounded-full font-semibold hover:bg-gray-100 transition-colors'
            >
              Learn More About Our Programs
            </motion.button>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
