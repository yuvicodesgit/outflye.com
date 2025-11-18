"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HoodieHero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-96 md:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100"
    >
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/premium-custom-hoodie-taupe-minimalist.jpg"
          alt="Hero background"
          fill
          className="object-cover"
        />
      </div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground mb-4 text-balance">
          Hoodies
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 font-light max-w-2xl mx-auto">
          Cozy premium apparel for any season — our hoodies are soft, warm, and built to last.
        </p>
      </motion.div>
    </motion.section>
  );
}


