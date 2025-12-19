'use client'

import { motion } from 'framer-motion'
import { Mail, MessageSquare, Phone } from 'lucide-react'

export function Questions() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Get in touch with us via email',
      contact: 'hello@outfyle.com',
      href: 'mailto:hello@outfyle.com'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our team in real-time',
      contact: 'Available 9AM-6PM EST',
      href: '#'
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'Call us for immediate assistance',
      contact: '+91 7002055731 ',
      href: ''
    }
  ]

  return (
    <section className="bg-white text-foreground py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            We're Open for Your Questions
          </h2>
          <p className="text-lg text-foreground/60 font-light max-w-2xl mx-auto">
            Have questions about our custom apparel? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a
                key={index}
                href={method.href}
                className="group p-8 border border-foreground/10 rounded-lg hover:border-foreground/30 transition-colors duration-300 bg-white hover:bg-foreground/[0.02]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-foreground/5 group-hover:bg-foreground/10 flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-6 h-6 text-foreground/70" />
                  </div>
                </div>
                <h3 className="text-lg font-light mb-2">{method.title}</h3>
                <p className="text-sm text-foreground/60 font-light mb-4">{method.description}</p>
                <p className="text-sm font-light text-foreground group-hover:text-foreground/80 transition-colors">
                  {method.contact}
                </p>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-foreground/50 font-light">
            Response time: Usually within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  )
}
