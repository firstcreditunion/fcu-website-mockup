'use client'

import { Users, Heart, Award, Leaf, Clock, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import BlurFade from '@/components/magicui/blur-fade'

const features = [
  {
    id: 1,
    icon: Users,
    title: 'Member Owned',
    description:
      "We're owned by our members, not shareholders. Your success is our success.",
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    icon: Heart,
    title: 'Community Focused',
    description:
      'We invest in local communities and support Kiwi families and businesses.',
    color: 'from-red-500 to-pink-600',
  },
  {
    id: 3,
    icon: Award,
    title: 'Award Winning',
    description:
      'Recognized for outstanding customer service and competitive products.',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    id: 4,
    icon: Leaf,
    title: 'Sustainable Banking',
    description:
      'Committed to ethical banking practices and environmental responsibility.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 5,
    icon: Clock,
    title: '24/7 Support',
    description:
      'Access your accounts anytime with online banking and dedicated support.',
    color: 'from-purple-500 to-violet-600',
  },
  {
    id: 6,
    icon: Shield,
    title: 'Secure & Protected',
    description:
      'Your deposits are protected and we use industry-leading security measures.',
    color: 'from-cyan-500 to-blue-600',
  },
]

export default function WhyChooseSection() {
  return (
    <section className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16 space-y-4'>
          <BlurFade delay={0.1}>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
              Why choose{' '}
              <span className='text-fcu-primary-900'>First Credit Union?</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Experience the difference of member-owned banking with competitive
              rates, exceptional service, and a genuine commitment to your
              financial wellbeing.
            </p>
          </BlurFade>
        </div>

        {/* Features Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <BlurFade key={feature.id} delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className='group relative'
              >
                <div className='relative h-full bg-white rounded-3xl p-8 border border-gray-200 hover:border-fcu-primary-200 hover:shadow-xl transition-all duration-300'>
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className='w-7 h-7' />
                  </div>

                  {/* Content */}
                  <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-fcu-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
