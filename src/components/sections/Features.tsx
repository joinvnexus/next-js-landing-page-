'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Cloud, Sparkles, Rocket, Users } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built with Next.js for optimal performance and fastest page loads.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Enterprise-grade security with TypeScript and best practices.',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: Cloud,
    title: 'Cloud Ready',
    description: 'Deploy anywhere - Vercel, Netlify, or your own server.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Sparkles,
    title: 'Beautiful Animations',
    description: 'Smooth, professional animations with Framer Motion.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Rocket,
    title: 'SEO Optimized',
    description: 'Built-in SEO best practices for better rankings.',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Perfect for teams with component-based architecture.',
    color: 'from-indigo-500 to-purple-500'
  }
]

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              Powerful Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to
              <span className="gradient-text"> Succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Production-ready features that save weeks of development time
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-6`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
