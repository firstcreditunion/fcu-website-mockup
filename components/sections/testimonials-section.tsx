'use client'

import { Star } from 'lucide-react'
import Marquee from '@/components/magicui/marquee'
import BlurFade from '@/components/magicui/blur-fade'
import { cn } from '@/lib/cn'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'First Home Buyer',
    content:
      'First Credit Union made buying my first home so easy. The team was supportive throughout the entire process and their rates were very competitive.',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Small Business Owner',
    content:
      'As a business owner, I appreciate the personalized service and flexibility. They truly understand the needs of local businesses.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Retired Member',
    content:
      "I've been with First Credit Union for over 20 years. Their savings rates are excellent and the staff always go above and beyond to help.",
    rating: 5,
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Young Professional',
    content:
      'The personal loan process was straightforward and quick. I got approved within days and the rates beat all the major banks.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Maria Rodriguez',
    role: 'Family Banking Customer',
    content:
      "We've used FCU for our home loan, car loans, and savings accounts. It's great having everything in one place with people who actually care.",
    rating: 5,
  },
  {
    id: 6,
    name: 'Tom Anderson',
    role: 'Member for 10 Years',
    content:
      "The difference between FCU and a regular bank is night and day. They're focused on helping members, not maximizing profits.",
    rating: 5,
  },
]

const TestimonialCard = ({
  name,
  role,
  content,
  rating,
}: {
  name: string
  role: string
  content: string
  rating: number
}) => {
  return (
    <div className='relative w-[350px] cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300'>
      <div className='flex items-center gap-1 mb-4'>
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className='w-5 h-5 fill-fcu-secondary-500 text-fcu-secondary-500'
          />
        ))}
      </div>
      <p className='text-gray-700 mb-6 leading-relaxed'>
        &quot;{content}&quot;
      </p>
      <div className='flex items-center gap-4'>
        <div className='w-12 h-12 rounded-full bg-gradient-to-br from-fcu-primary-500 to-fcu-secondary-500 flex items-center justify-center text-white font-bold text-lg'>
          {name.charAt(0)}
        </div>
        <div>
          <p className='font-semibold text-gray-900'>{name}</p>
          <p className='text-sm text-gray-600'>{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const firstRow = testimonials.slice(0, 3)
  const secondRow = testimonials.slice(3, 6)

  return (
    <section className='py-24 bg-gray-50 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16 space-y-4'>
          <BlurFade delay={0.1}>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
              What our members <span className='text-fcu-primary-900'>say</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Don&apos;t just take our word for it - hear from our members about
              their experience.
            </p>
          </BlurFade>
        </div>

        {/* Marquee */}
        <div className='relative flex flex-col gap-6'>
          <Marquee pauseOnHover className='[--duration:40s]'>
            {firstRow.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className='[--duration:40s]'>
            {secondRow.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </Marquee>
          <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-50'></div>
          <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-50'></div>
        </div>
      </div>
    </section>
  )
}
