'use client'

import { motion } from 'framer-motion'
import { Rocket, GitBranch, Link, Mail, MapPin, Send } from 'lucide-react'

const footerLinks = {
  product: ['Features', 'Pricing', 'FAQ', 'Changelog'],
  company: ['About', 'Blog', 'Careers', 'Press'],
  resources: ['Documentation', 'API Reference', 'Support', 'Status'],
  legal: ['Privacy', 'Terms', 'Security', 'Cookies']
}

const socialLinks = [
  { icon: Send, href: '#', color: 'hover:text-blue-400' },
  { icon: Link, href: '#', color: 'hover:text-gray-900' },
  { icon: GitBranch, href: '#', color: 'hover:text-gray-900' },
  { icon: Mail, href: '#', color: 'hover:text-red-500' }
]

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <Rocket className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold gradient-text">Premium</span>
            </motion.div>
            <p className="text-gray-400 mb-4">
              Build premium landing pages that convert. Modern, fast, and production-ready.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">San Francisco, CA</span>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-4 capitalize">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Premium. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ y: -3 }}
                className={`text-gray-400 transition-colors duration-200 ${social.color}`}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
