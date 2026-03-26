"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const classes = [
  {
    name: "Pilates Reformer",
    description: "Sculpt and lengthen with precision-guided Reformer sessions. Build core strength, improve posture, and move with grace.",
    duration: "55 min",
    price: "AED 120",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80",
  },
  {
    name: "Yoga Flow",
    description: "Find your flow in mindful vinyasa sequences that connect breath to movement. Flexibility, balance, and inner calm.",
    duration: "60 min",
    price: "AED 95",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
  },
  {
    name: "HIIT Sculpt",
    description: "High-intensity intervals that torch calories and build lean muscle. Efficient, empowering, and never boring.",
    duration: "45 min",
    price: "AED 80",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
  },
  {
    name: "Personal Training",
    description: "One-on-one sessions tailored to your goals. Expert guidance, accountability, and results you can see and feel.",
    duration: "60 min",
    price: "AED 350",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

export default function Classes() {
  return (
    <section id="classes" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">What We Offer</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-plum font-light">
            Our Classes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={cls.image}
                  alt={cls.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/40 to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-2xl md:text-3xl text-plum">{cls.name}</h3>
                  <span className="text-gold font-semibold text-lg whitespace-nowrap ml-4">{cls.price}</span>
                </div>
                <p className="text-plum/60 leading-relaxed mb-4">{cls.description}</p>
                <div className="flex items-center gap-2 text-sm text-plum/50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {cls.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
