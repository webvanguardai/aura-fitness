"use client";

const footerLinks = [
  { label: "Classes", href: "#classes" },
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-warm-grey border-t border-warm-grey">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="flex items-baseline gap-1.5 justify-center md:justify-start">
              <span className="font-serif text-2xl font-semibold tracking-wider text-plum">AURA</span>
              <span className="font-sans text-xs tracking-[0.2em] text-plum/60 uppercase">Studio</span>
            </a>
            <p className="text-plum/40 text-sm mt-2">
              Dubai&apos;s premier ladies-only boutique fitness studio.
            </p>
          </div>

          <div className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-plum/50 hover:text-plum transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-plum/10 text-center">
          <p className="text-plum/30 text-sm">
            © 2026 Aura Fitness Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
