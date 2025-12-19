'use client'

import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b border-background/20 pb-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-light tracking-tight">outfyle</h3>
            <p className="text-sm text-background/70 font-light leading-relaxed">
              Premium custom apparel designed by you, crafted with care.
            </p>
            <div className="flex gap-4 pt-2 items-center">
              <Link href="#" className="text-background/60 hover:text-background transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/917002055731"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp +91 70020 55731"
                title="+91 70020 55731"
                className="text-background/60 hover:text-background transition-colors"
              >
                {/* WhatsApp SVG icon */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M20.52 3.48A11.86 11.86 0 0012 0C5.373 0 .057 5.313.057 11.94c0 2.105.55 4.17 1.597 5.99L0 24l6.247-1.62A11.88 11.88 0 0012 23.88c6.627 0 11.94-5.314 11.94-11.94 0-3.193-1.246-6.193-3.42-8.46zM12 21.88c-1.64 0-3.247-.44-4.64-1.27l-.33-.2-3.708.96.99-3.61-.216-.37A8.01 8.01 0 014 11.94c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8zm4.55-6.66c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.015-.36.11-.48.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.4-.4-.54-.4-.14 0-.3 0-.46 0-.16 0-.42.06-.64.3-.22.24-.86.84-.86 2.04s.88 2.36 1 2.52c.12.16 1.72 2.72 4.18 3.82 2.46 1.1 2.46.74 2.9.7.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Company section removed per request */}

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-light text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors font-light">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors font-light">
                  Terms
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.p
          className="text-center text-sm text-background/60 font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          © 2025 outfyle. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}
