"use client";

import { motion } from "framer-motion";

const schedule = [
  { day: "Monday", morning: "Pilates Reformer — 7:00 AM", evening: "HIIT Sculpt — 6:30 PM" },
  { day: "Tuesday", morning: "Yoga Flow — 7:30 AM", evening: "Personal Training — 5:00 PM" },
  { day: "Wednesday", morning: "HIIT Sculpt — 7:00 AM", evening: "Pilates Reformer — 7:00 PM" },
  { day: "Thursday", morning: "Yoga Flow — 7:30 AM", evening: "HIIT Sculpt — 6:30 PM" },
  { day: "Friday", morning: "Pilates Reformer — 8:00 AM", evening: "Yoga Flow — 5:00 PM" },
  { day: "Saturday", morning: "HIIT Sculpt — 8:00 AM", evening: "Pilates Reformer — 4:00 PM" },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 md:py-32 bg-warm-grey">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">Plan Your Week</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-plum font-light">
            Class Schedule
          </h2>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden md:block"
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-plum text-warm-white">
                  <th className="py-4 px-6 text-left font-sans font-medium text-sm tracking-wider uppercase">Day</th>
                  <th className="py-4 px-6 text-left font-sans font-medium text-sm tracking-wider uppercase">Morning</th>
                  <th className="py-4 px-6 text-left font-sans font-medium text-sm tracking-wider uppercase">Evening</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <tr key={row.day} className={i % 2 === 0 ? "bg-white" : "bg-warm-white"}>
                    <td className="py-4 px-6 font-serif text-lg text-plum">{row.day}</td>
                    <td className="py-4 px-6 text-plum/70">{row.morning}</td>
                    <td className="py-4 px-6 text-plum/70">{row.evening}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {schedule.map((row, i) => (
            <motion.div
              key={row.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white rounded-xl p-5 shadow-sm"
            >
              <h3 className="font-serif text-xl text-plum mb-3">{row.day}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-gold font-medium min-w-[60px]">AM</span>
                  <span className="text-plum/70">{row.morning}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold font-medium min-w-[60px]">PM</span>
                  <span className="text-plum/70">{row.evening}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-plum/40 text-sm mt-8"
        >
          Sunday closed · Personal training available by appointment all week
        </motion.p>
      </div>
    </section>
  );
}
