'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-28 overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-muted-foreground rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left content */}
          <motion.div
            className="space-y-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h1 className="text-7xl md:text-8xl font-light tracking-tight text-foreground leading-tight">
                Design Custom Apparel
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl leading-relaxed">
                Transform your vision into premium custom t-shirts, hoodies, and sweatshirts. Simple, minimal, and beautifully crafted.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="#custom"
                className="inline-block px-10 py-5 bg-foreground text-background hover:bg-accent hover:text-foreground transition-all duration-300 text-base font-medium tracking-wide"
              >
                Start Designing
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative h-80 bg-card rounded-lg overflow-hidden group cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/minimal-custom-cream-t-shirt-design.jpg"
                alt="Custom t-shirt"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            <motion.div
              className="relative h-80 bg-card rounded-lg overflow-hidden group cursor-pointer mt-8"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/hoodie-outfit-ideas-for-women.webp"
                alt="Custom hoodie"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            <motion.div
              className="relative h-80 bg-card rounded-lg overflow-hidden group cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/elegant-custom-sweatshirt-neutral-tones.jpg"
                alt="Custom sweatshirt"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            <motion.div
              className="relative h-80 bg-card rounded-lg overflow-hidden group cursor-pointer mt-8"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/custom-design-apparel-aesthetic-minimal.jpg"
                alt="Custom apparel collection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
