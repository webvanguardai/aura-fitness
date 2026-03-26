"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "500+", label: "Members" },
  { value: "20+", label: "Weekly Classes" },
  { value: "2019", label: "Established" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-warm-grey">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-plum font-light mb-8 leading-tight">
              A space built for women,&nbsp;by&nbsp;women.
            </h2>
            <div className="space-y-4 text-plum/70 leading-relaxed">
              <p>
                Aura was born from a simple belief: every woman deserves a space where she can move freely, 
                train with focus, and leave feeling stronger than when she walked in.
              </p>
              <p>
                Founded in 2019, our boutique studio in Umm Suqeim has become a sanctuary for women across 
                Dubai. From Pilates Reformer to high-intensity training, every class is designed to challenge 
                and inspire — led by world-class trainers who understand the female body.
              </p>
              <p>
                This isn&apos;t just a gym. It&apos;s a community. A place where ambition meets elegance, 
                and where your fitness journey is honoured at every stage.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80"
                alt="Women in a fitness class at Aura Studio"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-plum text-warm-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="font-serif text-3xl font-light">Empowering</p>
              <p className="font-serif text-3xl font-light">women since</p>
              <p className="font-serif text-5xl text-gold mt-1">2019</p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 grid grid-cols-3 gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-plum font-light">{stat.value}</p>
              <p className="text-plum/50 tracking-wider uppercase text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
