"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Classes from "@/components/Classes";
import About from "@/components/About";
import Trainers from "@/components/Trainers";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Classes />
      <About />
      <Trainers />
      <Schedule />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
