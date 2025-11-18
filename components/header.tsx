'use client'

import { Menu, ShoppingCart, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
 
  // local dropdown component placed here to keep header self-contained
  function CollectionsDropdown() {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
      function handleDocClick(e: MouseEvent) {
        if (!ref.current) return
        if (e.target instanceof Node && !ref.current.contains(e.target)) {
          setIsOpen(false)
        }
      }
      document.addEventListener('mousedown', handleDocClick)
      return () => document.removeEventListener('mousedown', handleDocClick)
    }, [])

    return (
      <div className="relative" ref={ref}>
        <button
          onClick={() => setIsOpen((s) => !s)}
          aria-expanded={isOpen}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
        >
          Collections
          <svg className="w-3 h-3 text-muted-foreground" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>

        <div
          className={`absolute left-0 mt-2 w-40 bg-background border border-background/20 rounded-md shadow-md transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          <Link href="/tshirts" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
            T-Shirts
          </Link>
          <Link href="/sweatshirts" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
            Sweatshirts
          </Link>
          <Link href="/hoodies" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
            Hoodies
          </Link>
        </div>
      </div>
    )
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b"
      style={{ borderColor: '#e8e3db' }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-light tracking-tight text-foreground inline-block"
            style={{ transform: 'scale(1.2)', transformOrigin: 'left center' }}
          >
            outflye
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {/* Use a controlled dropdown so it's clickable on all devices */}
            <CollectionsDropdown />
            <Link href="/#custom" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Process
            </Link>
            <Link href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <motion.button
              className="p-2 hover:bg-orange-100 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
            </motion.button>
            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-6 pt-6 border-t space-y-4"
              style={{ borderColor: '#e8e3db' }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground font-medium">Collections</div>
                <Link href="/tshirts" className="block ml-4 text-sm text-muted-foreground hover:text-foreground">
                  T-Shirts
                </Link>
                <Link href="/sweatshirts" className="block ml-4 text-sm text-muted-foreground hover:text-foreground">
                  Sweatshirts
                </Link>
                <Link href="/hoodies" className="block ml-4 text-sm text-muted-foreground hover:text-foreground">
                  Hoodies
                </Link>
              </div>
              <Link href="/#custom" className="block text-sm text-muted-foreground hover:text-foreground">
                Process
              </Link>
              <Link href="/#contact" className="block text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
