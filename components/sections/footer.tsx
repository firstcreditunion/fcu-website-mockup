'use client'

import Link from 'next/link'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react'

const footerLinks = {
  banking: [
    { name: 'Everyday Banking', href: '#' },
    { name: 'Savings Accounts', href: '#' },
    { name: 'Term Deposits', href: '#' },
    { name: 'KiwiSaver', href: '#' },
  ],
  loans: [
    { name: 'Home Loans', href: '#' },
    { name: 'Personal Loans', href: '#' },
    { name: 'Vehicle Loans', href: '#' },
    { name: 'Business Loans', href: '#' },
  ],
  insurance: [
    { name: 'Home Insurance', href: '#' },
    { name: 'Contents Insurance', href: '#' },
    { name: 'Vehicle Insurance', href: '#' },
    { name: 'Life Insurance', href: '#' },
  ],
  support: [
    { name: 'Contact Us', href: '#' },
    { name: 'Find a Branch', href: '#' },
    { name: 'Online Banking', href: '#' },
    { name: 'FAQs', href: '#' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12'>
          {/* Brand Column */}
          <div className='lg:col-span-2'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-12 bg-fcu-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl'>
                FCU
              </div>
              <div>
                <div className='text-xl font-bold text-white'>
                  First Credit Union
                </div>
                <div className='text-xs text-fcu-secondary-400'>
                  Banking for your future
                </div>
              </div>
            </div>
            <p className='text-sm leading-relaxed mb-6'>
              A member-owned financial cooperative providing banking services to
              New Zealanders since 1950.
            </p>
            <div className='flex gap-4'>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-fcu-primary-600 transition-colors'
                  aria-label={social.label}
                >
                  <social.icon className='w-5 h-5' />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Banking</h3>
            <ul className='space-y-3'>
              {footerLinks.banking.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-sm hover:text-fcu-secondary-400 transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-white font-semibold mb-4'>Loans</h3>
            <ul className='space-y-3'>
              {footerLinks.loans.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-sm hover:text-fcu-secondary-400 transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-white font-semibold mb-4'>Insurance</h3>
            <ul className='space-y-3'>
              {footerLinks.insurance.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-sm hover:text-fcu-secondary-400 transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-white font-semibold mb-4'>Support</h3>
            <ul className='space-y-3'>
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-sm hover:text-fcu-secondary-400 transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className='grid md:grid-cols-3 gap-8 py-8 border-t border-gray-800'>
          <div className='flex items-start gap-3'>
            <div className='w-10 h-10 rounded-lg bg-fcu-primary-900 flex items-center justify-center flex-shrink-0'>
              <Phone className='w-5 h-5 text-white' />
            </div>
            <div>
              <p className='text-sm text-gray-400 mb-1'>Phone</p>
              <a
                href='tel:0800123456'
                className='text-white hover:text-fcu-secondary-400 transition-colors'
              >
                0800 123 456
              </a>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <div className='w-10 h-10 rounded-lg bg-fcu-primary-900 flex items-center justify-center flex-shrink-0'>
              <Mail className='w-5 h-5 text-white' />
            </div>
            <div>
              <p className='text-sm text-gray-400 mb-1'>Email</p>
              <a
                href='mailto:info@firstcreditunion.co.nz'
                className='text-white hover:text-fcu-secondary-400 transition-colors break-all'
              >
                info@firstcreditunion.co.nz
              </a>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <div className='w-10 h-10 rounded-lg bg-fcu-primary-900 flex items-center justify-center flex-shrink-0'>
              <MapPin className='w-5 h-5 text-white' />
            </div>
            <div>
              <p className='text-sm text-gray-400 mb-1'>Address</p>
              <p className='text-white'>123 Main Street, Wellington</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-sm text-gray-400'>
            © {new Date().getFullYear()} First Credit Union. All rights
            reserved.
          </p>
          <div className='flex flex-wrap gap-6 text-sm'>
            <Link
              href='#'
              className='text-gray-400 hover:text-fcu-secondary-400 transition-colors'
            >
              Privacy Policy
            </Link>
            <Link
              href='#'
              className='text-gray-400 hover:text-fcu-secondary-400 transition-colors'
            >
              Terms of Service
            </Link>
            <Link
              href='#'
              className='text-gray-400 hover:text-fcu-secondary-400 transition-colors'
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
