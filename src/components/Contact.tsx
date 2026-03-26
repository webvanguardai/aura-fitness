"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">Get in Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-plum font-light">
            Book Your Class
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              action="https://formspree.io/f/xqabpnvw"
              method="POST"
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-plum/60 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-warm-grey bg-white text-plum focus:outline-none focus:border-rose-dust focus:ring-1 focus:ring-rose-dust transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-plum/60 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-warm-grey bg-white text-plum focus:outline-none focus:border-rose-dust focus:ring-1 focus:ring-rose-dust transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm text-plum/60 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-xl border border-warm-grey bg-white text-plum focus:outline-none focus:border-rose-dust focus:ring-1 focus:ring-rose-dust transition"
                  placeholder="+971 XX XXX XXXX"
                />
              </div>
              <div>
                <label htmlFor="class" className="block text-sm text-plum/60 mb-2">
                  Interested In
                </label>
                <select
                  id="class"
                  name="class"
                  className="w-full px-4 py-3 rounded-xl border border-warm-grey bg-white text-plum focus:outline-none focus:border-rose-dust focus:ring-1 focus:ring-rose-dust transition"
                >
                  <option value="">Select a class</option>
                  <option value="pilates">Pilates Reformer</option>
                  <option value="yoga">Yoga Flow</option>
                  <option value="hiit">HIIT Sculpt</option>
                  <option value="pt">Personal Training</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-plum/60 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-warm-grey bg-white text-plum focus:outline-none focus:border-rose-dust focus:ring-1 focus:ring-rose-dust transition resize-none"
                  placeholder="Tell us about your fitness goals..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-plum text-warm-white py-4 rounded-full hover:bg-plum-light transition-colors tracking-wide text-lg"
              >
                Book Your First Class
              </button>
            </form>

            <div className="mt-6 text-center">
              <a
                href="https://wa.me/971XXXXXXXXX?text=Hi!%20I'd%20like%20to%20book%20a%20class%20at%20Aura%20Fitness%20Studio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-plum/70 hover:text-plum transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Or message us on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden shadow-sm h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.098693725766!2d55.19!3d25.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5402c126e3%3A0xb9511e6655c46a7c!2sUmm%20Suqeim%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aura Fitness Studio Location"
              />
            </div>

            <div className="bg-warm-grey rounded-2xl p-8">
              <h3 className="font-serif text-2xl text-plum mb-4">Visit Us</h3>
              <div className="space-y-3 text-plum/70">
                <p className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Umm Suqeim, Dubai, UAE
                </p>
                <p className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@aurafitness.ae
                </p>
                <p className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Mon–Sat: 6:00 AM – 9:00 PM<br />
                  Friday: 7:00 AM – 8:00 PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
