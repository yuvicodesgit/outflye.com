"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sweatshirtTypes = [
  {
    id: 1,
    name: "Crew Neck",
    description: "Classic & timeless",
    image: "/crew-neck-sweatshirt-beige-classic.jpg",
  },
  {
    id: 2,
    name: "V-Neck",
    description: "Elegant & modern",
    image: "/v-neck-sweatshirt-gray-elegant.jpg",
  },
  {
    id: 3,
    name: "Oversized",
    description: "Comfortable & bold",
    image: "/oversized-sweatshirt-charcoal-relaxed.jpg",
  },
  {
    id: 4,
    name: "Half-Zip",
    description: "Versatile & dynamic",
    image: "/half-zip-sweatshirt-taupe-modern.jpg",
  },
];

const fabricOptions = [
  {
    id: 1,
    name: "100% Cotton",
    properties: ["Breathable", "Soft", "Natural"],
    image: "/cotton-fabric-texture-white-natural.jpg",
  },
  {
    id: 2,
    name: "Cotton Blend",
    properties: ["Durable", "Stretch", "Easy Care"],
    image: "/cotton-blend-fabric-texture-gray.jpg",
  },
  {
    id: 3,
    name: "French Terry",
    properties: ["Plush", "Lightweight", "Premium"],
    image: "/french-terry-fabric-soft-texture.jpg",
  },
  {
    id: 4,
    name: "Fleece",
    properties: ["Warm", "Cozy", "Insulated"],
    image: "/fleece-fabric-texture-warm-cozy.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export function SweatshirtPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-96 md:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100"
      >
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/oversized-sweatshirt-charcoal-relaxed.jpg"
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
            Sweatshirts
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 font-light max-w-2xl mx-auto">
            Discover our curated collection of premium sweatshirts crafted for comfort and style
          </p>
        </motion.div>
      </motion.section>

      {/* Types Section */}
      <section className="py-24 px-6 md:px-12 bg-background">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-16 text-balance"
          >
            Sweatshirt Types
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {sweatshirtTypes.map((type) => (
              <motion.div
                key={type.id}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg h-80 mb-6">
                  <Image
                    src={type.image || "/placeholder.svg"}
                    alt={type.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
                <motion.h3
                  className="text-2xl font-light text-foreground mb-2"
                >
                  {type.name}
                </motion.h3>
                <motion.p className="text-foreground/60 font-light">
                  {type.description}
                </motion.p>
                <motion.div
                  className="w-0 h-0.5 bg-foreground mt-4 group-hover:w-8 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Fabrics Section */}
      <section className="py-24 px-6 md:px-12 bg-neutral-50">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-16 text-balance"
          >
            Premium Fabrics
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {fabricOptions.map((fabric) => (
              <motion.div
                key={fabric.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg h-96 cursor-pointer"
              >
                <Image
                  src={fabric.image || "/placeholder.svg"}
                  alt={fabric.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 group-hover:from-black/80 transition-all duration-300" />

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl font-light text-white mb-4"
                  >
                    {fabric.name}
                  </motion.h3>

                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-2"
                  >
                    {fabric.properties.map((prop, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-light rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                      >
                        {prop}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA section removed per user request */}
    </div>
  );
}
