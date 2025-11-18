"use client";

import { motion } from "framer-motion";
import { HoodieTypeCard } from "./hoodie-type-card";
import { FabricCard } from "./fabric-card";

export function HoodieCategories() {
  const hoodieTypes = [
    {
      id: 1,
      title: "Classic Hoodie",
      description: "Timeless design with front pocket and adjustable drawstrings",
      image: "/classic-hoodie-beige-neutral-minimalist.jpg",
    },
    {
      id: 2,
      title: "Oversized Hoodie",
      description: "Relaxed fit with extra comfort and contemporary silhouette",
      image: "/oversized-hoodie-gray-relaxed-fit.jpg",
    },
    {
      id: 3,
      title: "Fitted Hoodie",
      description: "Tailored cut for a sleek, modern look",
      image: "/fitted-hoodie-tapered-modern-design.jpg",
    },
    {
      id: 4,
      title: "Zip-Up Hoodie",
      description: "Full front zipper with dual pockets and hood",
      image: "/zip-up-hoodie-with-zipper-charcoal.jpg",
    },
  ];

  const fabrics = [
    {
      id: 1,
      name: "100% Cotton",
      description: "Pure comfort. Breathable and soft for everyday wear.",
      properties: ["Breathable", "Soft", "Easy Care"],
      image: "/cotton-fabric-texture-white-natural.jpg",
    },
    {
      id: 2,
      name: "Cotton Blend",
      description: "Classic mix of cotton and polyester for durability.",
      properties: ["Durable", "Moisture-Wicking", "Form-Fitting"],
      image: "/cotton-blend-fabric-texture-gray.jpg",
    },
    {
      id: 3,
      name: "Premium French Terry",
      description: "Luxurious texture with superior softness and weight.",
      properties: ["Luxurious", "Warm", "Long-Lasting"],
      image: "/french-terry-fabric-soft-texture.jpg",
    },
    {
      id: 4,
      name: "Fleece Lined",
      description: "Interior fleece lining for warmth without bulk.",
      properties: ["Insulated", "Cozy", "Lightweight"],
      image: "/fleece-fabric-texture-warm-cozy.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h1 className="mb-4 text-4xl font-light tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Hoodie Collections
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-foreground/60">
            Explore our curated selection of hoodie styles and premium fabric options
          </p>
        </motion.div>

        {/* Types Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="mb-12">
            <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
              Hoodie Types
            </h2>
            <div className="mt-2 h-1 w-16 bg-primary/40"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {hoodieTypes.map((type, index) => (
              <HoodieTypeCard key={type.id} hoodie={type} delay={index * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Fabrics Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="mb-12">
            <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
              Fabric Options
            </h2>
            <div className="mt-2 h-1 w-16 bg-primary/40"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {fabrics.map((fabric, index) => (
              <FabricCard key={fabric.id} fabric={fabric} delay={index * 0.1} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
