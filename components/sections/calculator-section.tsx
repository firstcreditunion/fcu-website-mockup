'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator as CalcIcon, TrendingUp } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import BlurFade from '@/components/magicui/blur-fade'

export default function CalculatorSection() {
  // Loan Calculator State
  const [loanAmount, setLoanAmount] = useState(300000)
  const [loanTerm, setLoanTerm] = useState(30)
  const [interestRate, setInterestRate] = useState(6.49)

  // Savings Calculator State
  const [savingsInitial, setSavingsInitial] = useState(10000)
  const [savingsMonthly, setSavingsMonthly] = useState(500)
  const [savingsTerm, setSavingsTerm] = useState(5)
  const [savingsRate, setSavingsRate] = useState(4.25)

  // Loan Calculations
  const monthlyRate = interestRate / 100 / 12
  const numberOfPayments = loanTerm * 12
  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
  const totalRepayment = monthlyPayment * numberOfPayments
  const totalInterest = totalRepayment - loanAmount

  // Savings Calculations
  const savingsMonthlyRate = savingsRate / 100 / 12
  const savingsMonths = savingsTerm * 12
  const futureValue =
    savingsInitial * Math.pow(1 + savingsMonthlyRate, savingsMonths) +
    (savingsMonthly * (Math.pow(1 + savingsMonthlyRate, savingsMonths) - 1)) /
      savingsMonthlyRate
  const totalDeposits = savingsInitial + savingsMonthly * savingsMonths
  const totalSavingsInterest = futureValue - totalDeposits

  return (
    <section id='calculators' className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16 space-y-4'>
          <BlurFade delay={0.1}>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
              Financial{' '}
              <span className='text-fcu-primary-900'>calculators</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Plan your financial future with our easy-to-use calculators.
            </p>
          </BlurFade>
        </div>

        {/* Calculator Tabs */}
        <BlurFade delay={0.3}>
          <Tabs defaultValue='loan' className='w-full'>
            <div className='flex justify-center mb-12'>
              <TabsList>
                <TabsTrigger value='loan' className='flex items-center gap-2'>
                  <CalcIcon className='w-4 h-4' />
                  Loan Calculator
                </TabsTrigger>
                <TabsTrigger
                  value='savings'
                  className='flex items-center gap-2'
                >
                  <TrendingUp className='w-4 h-4' />
                  Savings Calculator
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Loan Calculator */}
            <TabsContent value='loan'>
              <div className='grid lg:grid-cols-2 gap-12'>
                {/* Inputs */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className='space-y-8'
                >
                  {/* Loan Amount */}
                  <div>
                    <label className='flex justify-between text-sm font-medium text-gray-700 mb-3'>
                      <span>Loan Amount</span>
                      <span className='text-fcu-primary-900 font-bold'>
                        ${loanAmount.toLocaleString()}
                      </span>
                    </label>
                    <Slider
                      min={10000}
                      max={1000000}
                      step={10000}
                      value={[loanAmount]}
                      onValueChange={(value) => setLoanAmount(value[0])}
                      className='w-full'
                    />
                  </div>

                  {/* Loan Term */}
                  <div>
                    <label className='flex justify-between text-sm font-medium text-gray-700 mb-3'>
                      <span>Loan Term (years)</span>
                      <span className='text-fcu-primary-900 font-bold'>
                        {loanTerm} years
                      </span>
                    </label>
                    <Slider
                      min={1}
                      max={30}
                      step={1}
                      value={[loanTerm]}
                      onValueChange={(value) => setLoanTerm(value[0])}
                      className='w-full'
                    />
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <label className='flex justify-between text-sm font-medium text-gray-700 mb-3'>
                      <span>Interest Rate (%)</span>
                      <span className='text-fcu-primary-900 font-bold'>
                        {interestRate}%
                      </span>
                    </label>
                    <input
                      type='number'
                      min='1'
                      max='20'
                      step='0.01'
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-fcu-primary-500 focus:border-transparent'
                    />
                  </div>
                </motion.div>

                {/* Results */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className='bg-gradient-to-br from-fcu-primary-900 to-fcu-primary-700 rounded-3xl p-8 text-white'
                >
                  <div className='space-y-8'>
                    <div>
                      <p className='text-sm text-fcu-primary-100 mb-2'>
                        Monthly Repayment
                      </p>
                      <div className='text-5xl font-bold'>
                        $
                        {monthlyPayment
                          .toFixed(2)
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </div>
                    </div>

                    <div className='h-px bg-white/20'></div>

                    <div className='grid grid-cols-2 gap-6'>
                      <div>
                        <p className='text-sm text-fcu-primary-100 mb-1'>
                          Total repayment
                        </p>
                        <p className='text-2xl font-bold'>
                          $
                          {totalRepayment
                            .toFixed(2)
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </p>
                      </div>
                      <div>
                        <p className='text-sm text-fcu-primary-100 mb-1'>
                          Total interest
                        </p>
                        <p className='text-2xl font-bold'>
                          $
                          {totalInterest
                            .toFixed(2)
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </p>
                      </div>
                    </div>

                    {/* <MovingBorder duration={3000} className='w-full'> */}
                    <Button
                      variant='secondary'
                      size='lg'
                      className='w-full bg-fcu-secondary-500 hover:bg-fcu-secondary-600 border-0 cursor-pointer'
                    >
                      Apply for Loan
                    </Button>
                    {/* </MovingBorder> */}
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            {/* Savings Calculator */}
            <TabsContent value='savings'>
              <div className='grid lg:grid-cols-2 gap-12'>
                {/* Inputs */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className='space-y-8'
                >
                  {/* Initial Amount */}
                  <div>
                    <label className='flex justify-between text-sm font-medium text-gray-700 mb-3'>
                      <span>Initial Amount</span>
                      <span className='text-fcu-primary-900 font-bold'>
                        ${savingsInitial.toLocaleString()}
                      </span>
                    </label>
                    <Slider
                      min={0}
                      max={100000}
                      step={1000}
                      value={[savingsInitial]}
                      onValueChange={(value) => setSavingsInitial(value[0])}
                      className='w-full'
                    />
                  </div>

                  {/* Monthly Contribution */}
                  <div>
                    <label className='flex justify-between text-sm font-medium text-gray-700 mb-3'>
                      <span>Monthly Contribution</span>
                      <span className='text-fcu-primary-900 font-bold'>
                        ${savingsMonthly.toLocaleString()}
                      </span>
                    </label>
                    <Slider
                      min={0}
                      max={5000}
                      step={100}
                      value={[savingsMonthly]}
                      onValueChange={(value) => setSavingsMonthly(value[0])}
                      className='w-full'
                    />
                  </div>

                  {/* Savings Term */}
                  <div>
                    <label className='flex justify-between text-sm font-medium text-gray-700 mb-3'>
                      <span>Savings Term (years)</span>
                      <span className='text-fcu-primary-900 font-bold'>
                        {savingsTerm} years
                      </span>
                    </label>
                    <Slider
                      min={1}
                      max={30}
                      step={1}
                      value={[savingsTerm]}
                      onValueChange={(value) => setSavingsTerm(value[0])}
                      className='w-full'
                    />
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <label className='flex justify-between text-sm font-medium text-gray-700 mb-3'>
                      <span>Interest Rate (%)</span>
                      <span className='text-fcu-primary-900 font-bold'>
                        {savingsRate}%
                      </span>
                    </label>
                    <input
                      type='number'
                      min='0'
                      max='15'
                      step='0.01'
                      value={savingsRate}
                      onChange={(e) => setSavingsRate(Number(e.target.value))}
                      className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-fcu-primary-500 focus:border-transparent'
                    />
                  </div>
                </motion.div>

                {/* Results */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className='bg-gradient-to-br from-fcu-secondary-600 to-fcu-secondary-500 rounded-3xl p-8 text-white'
                >
                  <div className='space-y-8'>
                    <div>
                      <p className='text-sm text-fcu-secondary-100 mb-2'>
                        Future Value
                      </p>
                      <div className='text-5xl font-bold'>
                        $
                        {futureValue
                          .toFixed(2)
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </div>
                    </div>

                    <div className='h-px bg-white/20'></div>

                    <div className='grid grid-cols-2 gap-6'>
                      <div>
                        <p className='text-sm text-fcu-secondary-100 mb-1'>
                          Total deposits
                        </p>
                        <p className='text-2xl font-bold'>
                          $
                          {totalDeposits
                            .toFixed(2)
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </p>
                      </div>
                      <div>
                        <p className='text-sm text-fcu-secondary-100 mb-1'>
                          Interest earned
                        </p>
                        <p className='text-2xl font-bold'>
                          $
                          {totalSavingsInterest
                            .toFixed(2)
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </p>
                      </div>
                    </div>

                    {/* <MovingBorder duration={3000} className='w-full'> */}
                    <Button
                      variant='default'
                      size='lg'
                      className='w-full bg-white text-fcu-secondary-500 hover:bg-gray-50 cur border-0'
                    >
                      Open Savings Account
                    </Button>
                    {/* </MovingBorder> */}
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </BlurFade>
      </div>
    </section>
  )
}
