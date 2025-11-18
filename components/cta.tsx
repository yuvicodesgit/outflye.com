'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function CTA() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
              Ready to create something extraordinary?
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Join creators worldwide in bringing their visions to life with premium custom apparel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="#"
              className="px-8 py-4 bg-foreground text-background hover:bg-accent hover:text-foreground transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              Start Designing
            </Link>
            <Link
              href="#products"
              className="px-8 py-4 border border-foreground text-foreground hover:bg-foreground/5 transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              Explore Collections
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
