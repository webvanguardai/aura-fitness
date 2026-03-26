"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&q=80"
          alt="Bright, elegant fitness studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-white/90 via-warm-white/70 to-warm-white/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-0">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gold tracking-[0.3em] uppercase text-sm font-sans mb-4"
          >
            Ladies Only · Umm Suqeim, Dubai
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-plum leading-[0.95] mb-6"
          >
            Move.<br />
            Strengthen.<br />
            Transform.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-plum/70 font-light leading-relaxed mb-10 max-w-lg"
          >
            Dubai&apos;s premier ladies-only boutique fitness studio.
            Yoga · Pilates · HIIT · Personal Training.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="bg-plum text-warm-white px-8 py-4 rounded-full text-center hover:bg-plum-light transition-colors tracking-wide"
            >
              Book Your First Class
            </a>
            <a
              href="#schedule"
              className="border-2 border-plum text-plum px-8 py-4 rounded-full text-center hover:bg-plum hover:text-warm-white transition-colors tracking-wide"
            >
              View Schedule
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
