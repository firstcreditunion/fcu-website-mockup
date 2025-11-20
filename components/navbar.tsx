'use client'

import CardNav, { CardNavItem } from '@/components/CardNav'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

// Map existing navigation items to CardNav format
const cardNavItems: CardNavItem[] = [
  {
    label: 'Banking',
    bgColor: '#1e5e6f', // fcu-primary-900
    textColor: '#ffffff',
    links: [
      {
        label: 'Everyday Banking',
        href: '#services',
        ariaLabel: 'View everyday banking services',
      },
      {
        label: 'Savings Accounts',
        href: '#products',
        ariaLabel: 'Explore savings accounts',
      },
      {
        label: 'Term Deposits',
        href: '#products',
        ariaLabel: 'Learn about term deposits',
      },
      {
        label: 'KiwiSaver',
        href: '#services',
        ariaLabel: 'Discover KiwiSaver options',
      },
    ],
  },
  {
    label: 'Loans',
    bgColor: '#6fd4a8', // fcu-secondary-500
    textColor: '#1e5e6f',
    links: [
      {
        label: 'Personal Loans',
        href: '#services',
        ariaLabel: 'Apply for personal loans',
      },
      {
        label: 'Home Loans',
        href: '#services',
        ariaLabel: 'Get home loan information',
      },
      {
        label: 'Vehicle Loans',
        href: '#services',
        ariaLabel: 'Finance your vehicle',
      },
      {
        label: 'Business Loans',
        href: '#services',
        ariaLabel: 'Business loan options',
      },
    ],
  },
  {
    label: 'Insurance',
    bgColor: '#f0f9ff', // Light blue for contrast
    textColor: '#1e5e6f',
    links: [
      {
        label: 'Home Insurance',
        href: '#services',
        ariaLabel: 'Protect your home',
      },
      {
        label: 'Contents Insurance',
        href: '#services',
        ariaLabel: 'Insure your contents',
      },
      {
        label: 'Vehicle Insurance',
        href: '#services',
        ariaLabel: 'Vehicle insurance coverage',
      },
      {
        label: 'Life Insurance',
        href: '#services',
        ariaLabel: 'Life insurance plans',
      },
    ],
  },
]

export default function Navbar() {
  return (
    <>
      {/* Top Contact Bar */}
      <div className='bg-fcu-primary-900 text-white py-2 px-4'>
        <div className='max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm'>
          <div className='flex items-center gap-6'>
            <a
              href='tel:0800123456'
              className='flex items-center gap-2 hover:text-fcu-secondary-500 transition-colors'
            >
              <Phone className='w-4 h-4' />
              <span className='hidden sm:inline'>0800 123 456</span>
            </a>
            <a
              href='mailto:info@firstcreditunion.co.nz'
              className='flex items-center gap-2 hover:text-fcu-secondary-500 transition-colors'
            >
              <Mail className='w-4 h-4' />
              <span className='hidden md:inline'>
                info@firstcreditunion.co.nz
              </span>
            </a>
          </div>
          <Link
            href='#'
            className='flex items-center gap-2 hover:text-fcu-secondary-500 transition-colors'
          >
            <MapPin className='w-4 h-4' />
            <span className='hidden sm:inline'>Find a Branch</span>
          </Link>
        </div>
      </div>

      {/* CardNav from React Bits */}
      <CardNav
        logo='/fcu-logo.svg'
        logoAlt='First Credit Union'
        items={cardNavItems}
        baseColor='#ffffff'
        menuColor='#1e5e6f'
        buttonBgColor='#1e5e6f'
        buttonTextColor='#ffffff'
        ease='power3.out'
      />
    </>
  )
}
