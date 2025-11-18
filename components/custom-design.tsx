'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const privileges = [
  {
    icon: '⚡',
    title: 'Fast Order Fulfillment',
    description: 'We fulfill urgent orders in 24 hours',
  },
  {
    icon: '✨',
    title: 'Only Premium Quality',
    description: 'Using modern production equipment',
  },
  {
    icon: '⭐',
    title: 'Many Satisfied Customers',
    description: 'More than 10,000 satisfied customers',
  },
]

export function CustomDesign() {
  return (
    <section id="custom" className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-foreground/20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/20" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-light text-foreground leading-tight">
                Privileges
                <br />
                of our
                <br />
                studio
              </h2>
              
              <div className="text-4xl text-muted-foreground">↙</div>

              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-md">
                Extensive experience in printing your photos, inscriptions or drawings on apparel. Our professional equipment makes it possible to print inexpensively, with high quality and in a short time.
              </p>

              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-md">
                We offer digital printing services. Images can be applied to t-shirts, hoodies, sweatshirts, and more.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {privileges.map((privilege, index) => (
                <motion.div
                  key={index}
                  className="flex gap-6 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-lg bg-card border border-border">
                    {privilege.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-foreground">{privilege.title}</h3>
                    <p className="text-muted-foreground font-light">{privilege.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 space-y-6">
              <div>
                <h3 className="text-2xl font-light text-foreground mb-2">
                  Bring your Brand to
                  <br />
                  Life Today!
                </h3>
              </div>
              <Link
                href="#"
                className="inline-block px-8 py-4 bg-foreground text-background hover:bg-accent hover:text-foreground transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                CREATE DESIGN
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
