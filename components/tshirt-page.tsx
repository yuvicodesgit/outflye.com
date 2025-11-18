"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tshirtTypes = [
  {
    id: 1,
    name: "Classic Fit",
    description: "Timeless & versatile",
    image: "/man-wearing-classic-fit-white-tshirt.jpg",
  },
  {
    id: 2,
    name: "Slim Fit",
    description: "Modern & tailored",
    image: "/woman-wearing-slim-fit-navy-tshirt.jpg",
  },
  {
    id: 3,
    name: "Oversized",
    description: "Relaxed & trendy",
    image: "/man-wearing-oversized-gray-tshirt.jpg",
  },
  {
    id: 4,
    name: "Vintage",
    description: "Retro & distressed",
    image: "/woman-wearing-vintage-beige-tshirt.jpg",
  },
];

const fabricOptions = [
  {
    id: 1,
    name: "100% Organic Cotton",
    properties: ["Eco-Friendly", "Soft", "Breathable"],
    image: "/organic-cotton-close-up-texture.jpg",
  },
  {
    id: 2,
    name: "Cotton Poly Blend",
    properties: ["Durable", "Quick-Dry", "Vibrant Colors"],
    image: "/cotton-blend-detailed-weave.jpg",
  },
  {
    id: 3,
    name: "Premium Pima Cotton",
    properties: ["Luxe Feel", "Long-Lasting", "Hypoallergenic"],
    image: "/pima-cotton-luxe-texture.jpg",
  },
  {
    id: 4,
    name: "Recycled Fabric",
    properties: ["Sustainable", "Eco-Conscious", "Quality"],
    image: "/recycled-polyester-detail.jpg",
  },
];

const tshirtStyles = [
  {
    id: 1,
    name: "Round Neck",
    description: "Classic crew neckline",
    image: "/round-neck-tshirt-person.jpg",
  },
  {
    id: 2,
    name: "V-Neck",
    description: "Elegant V-shaped neckline",
    image: "/v-neck-tshirt-person.jpg",
  },
  {
    id: 3,
    name: "Polo T-Shirt",
    description: "Sophisticated polo style",
    image: "/polo-tshirt-person.jpg",
  },
  {
    id: 4,
    name: "Raglan Sleeve",
    description: "Contrasting raglan sleeves",
    image: "/raglan-sleeve-tshirt-person.jpg",
  },
  {
    id: 5,
    name: "Tank Tops",
    description: "Sleeveless essential",
    image: "/tank-top-person.jpg",
  },
  {
    id: 6,
    name: "Full Sleeve Tee",
    description: "Long sleeve versatility",
    image: "/full-sleeve-tshirt-person.jpg",
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

export function TshirtPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-96 md:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-50 to-stone-100"
      >
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-tshirt-lifestyle.jpg"
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
            T-Shirts
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 font-light max-w-2xl mx-auto">
            Essential basics reimagined. Premium quality t-shirts for every occasion
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
            T-Shirt Styles
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {tshirtTypes.map((type) => (
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

      {/* By Style Section */}
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
            By Style
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {tshirtStyles.map((style) => (
              <motion.div
                key={style.id}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg h-96 mb-6">
                  <Image
                    src={style.image || "/placeholder.svg"}
                    alt={style.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
                <motion.h3
                  className="text-2xl font-light text-foreground mb-2"
                >
                  {style.name}
                </motion.h3>
                <motion.p className="text-foreground/60 font-light">
                  {style.description}
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
            Fabric Selection
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
                  priority={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-6 md:px-12 bg-background"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6 text-balance">
            Choose Your Essential
          </h2>
          <p className="text-lg text-foreground/70 font-light mb-12 text-balance">
            Find the perfect t-shirt that matches your style and comfort preferences
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-foreground text-background font-light tracking-tight rounded-sm hover:bg-foreground/90 transition-colors"
          >
            Shop T-Shirts
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}
