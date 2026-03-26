"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const trainers = [
  {
    name: "Sara Al Mansoori",
    specialty: "Pilates & Barre",
    certifications: "STOTT Pilates Certified · ACE Personal Trainer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    name: "Elena Kovach",
    specialty: "Yoga & Mindfulness",
    certifications: "RYT-500 · Yoga Alliance · Prenatal Yoga",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
  },
  {
    name: "Priya Sharma",
    specialty: "HIIT & Strength",
    certifications: "NASM Certified · CrossFit L2 · Nutrition Coach",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80",
  },
];

export default function Trainers() {
  return (
    <section className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">Meet the Team</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-plum font-light">
            Our Trainers
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group text-center"
            >
              <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-serif text-2xl text-plum mb-1">{trainer.name}</h3>
              <p className="text-gold font-medium text-sm tracking-wider uppercase mb-3">
                {trainer.specialty}
              </p>
              <p className="text-plum/50 text-sm">{trainer.certifications}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
