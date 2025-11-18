'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'T-Shirts',
    slug: 'tshirts',
    description: 'Classic comfort with infinite design possibilities',
    image: '/custom-black-white-colorful-tshirts-display.jpg',
  },
  {
    id: 2,
    name: 'Hoodies',
    slug: 'hoodies',
    description: 'Cozy premium apparel for any season',
    image: '/premium-custom-hoodies-street-style-fashion.jpg',
  },
  {
    id: 3,
    name: 'Sweatshirts',
    slug: 'sweatshirts',
    description: 'Elevated quality that feels incredible',
    image: '/modern-custom-sweatshirts-minimalist-design.jpg',
  },
]

export function Products() {
  return (
    <section id="products" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground tracking-widest uppercase">Collections</p>
          <h2 className="text-5xl md:text-6xl font-light text-foreground">Our Range</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/${product.slug}`} className="group">
                <div className="space-y-6">
                  <div className="overflow-hidden bg-card aspect-square">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-light text-foreground">{product.name}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">{product.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
