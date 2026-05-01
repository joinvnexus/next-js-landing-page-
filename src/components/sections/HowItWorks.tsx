'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { FileCode, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Clone & Install',
    description: 'Get the template and install dependencies in minutes.',
    icon: FileCode,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: '02',
    title: 'Customize Content',
    description: 'Edit components, add your branding, and customize colors.',
    icon: Rocket,
    color: 'from-purple-500 to-pink-500'
  },
  {
    number: '03',
    title: 'Launch & Grow',
    description: 'Deploy to production and start converting visitors.',
    icon: TrendingUp,
    color: 'from-green-500 to-teal-500'
  }
]

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It
              <span className="gradient-text"> Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to launch your premium landing page
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2" />
          
          {steps.map((step, index) => (
            <ScrollReveal key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative text-center"
              >
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 relative z-10`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-6xl font-bold text-gray-200 absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-3 mt-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}