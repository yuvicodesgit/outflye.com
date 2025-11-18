"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FabricCardProps {
  fabric: {
    id: number;
    name: string;
    description: string;
    properties: string[];
    image: string;
  };
  delay?: number;
}

export function FabricCard({ fabric, delay = 0 }: FabricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ x: 5 }}
      className="group relative overflow-hidden rounded-lg border border-border transition-all duration-300"
    >
      <div className="relative h-64 w-full overflow-hidden bg-secondary/20">
        <Image
          src={fabric.image || "/placeholder.svg"}
          alt={fabric.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Content overlaid on image */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="mb-2 text-xl font-medium tracking-tight text-white">
            {fabric.name}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-white/80">
            {fabric.description}
          </p>

          {/* Properties */}
          <div className="flex flex-wrap gap-2">
            {fabric.properties.map((prop) => (
              <span
                key={prop}
                className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/30"
              >
                {prop}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Accent line animation */}
      <div className="absolute left-0 top-0 h-1 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
    </motion.div>
  );
}
