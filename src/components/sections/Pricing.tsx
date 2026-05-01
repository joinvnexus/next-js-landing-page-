'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const pricingPlans = [
  {
    name: 'Starter',
    price: {
      monthly: 29,
      yearly: 290
    },
    description: 'Perfect for individuals and small projects',
    features: [
      'Up to 5 projects',
      'Basic components',
      'Community support',
      '1 team member',
      'Basic analytics'
    ],
    buttonText: 'Start Free Trial',
    popular: false,
    gradient: 'from-gray-600 to-gray-700'
  },
  {
    name: 'Professional',
    price: {
      monthly: 79,
      yearly: 790
    },
    description: 'Best for growing teams and businesses',
    features: [
      'Unlimited projects',
      'All premium components',
      'Priority support',
      '5 team members',
      'Advanced analytics',
      'Custom domains',
      'API access'
    ],
    buttonText: 'Get Started',
    popular: true,
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    name: 'Enterprise',
    price: {
      monthly: 199,
      yearly: 1990
    },
    description: 'For large organizations with custom needs',
    features: [
      'Everything in Professional',
      'Unlimited team members',
      '24/7 phone support',
      'SLA guarantee',
      'Custom integrations',
      'Dedicated account manager',
      'On-premise deployment'
    ],
    buttonText: 'Contact Sales',
    popular: false,
    gradient: 'from-blue-600 to-cyan-600'
  }
]

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              Simple Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your
              <span className="gradient-text"> Perfect Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              No hidden fees. Cancel anytime. Start with a 14-day free trial.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative w-16 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-0.5 transition-all duration-300"
              >
                <motion.div
                  className="absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow-md"
                  animate={{ x: isYearly ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                Yearly
                <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pricingPlans.map((plan, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className={`relative rounded-2xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white shadow-2xl ring-2 ring-purple-600 scale-105'
                    : 'bg-white shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-5xl font-bold">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-gray-600">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                    {isYearly && (
                      <div className="text-sm text-green-600 mt-1">
                        Save ${plan.price.monthly * 12 - plan.price.yearly}/year
                      </div>
                    )}
                  </div>

                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="lg"
                    className="w-full mb-8"
                  >
                    {plan.buttonText}
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <p className="text-gray-600">
              All plans include a 14-day free trial. No credit card required.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
