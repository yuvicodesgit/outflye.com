"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HoodieTypeCardProps {
  hoodie: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
  delay?: number;
}

export function HoodieTypeCard({ hoodie, delay = 0 }: HoodieTypeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="relative h-56 w-full overflow-hidden bg-secondary/20">
        <Image
          src={hoodie.image || "/placeholder.svg"}
          alt={hoodie.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content section with refined styling */}
      <div className="relative z-10 p-6">
        <h3 className="mb-2 text-lg font-medium tracking-tight text-foreground">
          {hoodie.title}
        </h3>
        <p className="text-sm leading-relaxed text-foreground/60">
          {hoodie.description}
        </p>

        {/* Underline animation */}
        <div className="mt-4 h-0.5 w-0 bg-primary/40 transition-all duration-300 group-hover:w-8" />
      </div>
    </motion.div>
  );
}
