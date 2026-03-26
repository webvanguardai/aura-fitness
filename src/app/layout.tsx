import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Aura Fitness Studio — Ladies Only Gym Dubai | Pilates, Yoga & HIIT Umm Suqeim",
  description: "Dubai's premier ladies-only boutique fitness studio in Umm Suqeim. Pilates Reformer, Yoga Flow, HIIT Sculpt & Personal Training. Book your first class today.",
  keywords: "ladies only gym Dubai, women fitness studio, pilates Dubai, yoga Dubai, HIIT Dubai, Umm Suqeim gym, boutique fitness Dubai, personal training women Dubai",
  openGraph: {
    title: "Aura Fitness Studio — Ladies Only Gym Dubai",
    description: "Dubai's premier ladies-only boutique fitness studio. Yoga · Pilates · HIIT · Personal Training.",
    url: "https://aura-fitness.vercel.app",
    siteName: "Aura Fitness Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Aura Fitness Studio Dubai",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Fitness Studio — Ladies Only Gym Dubai",
    description: "Dubai's premier ladies-only boutique fitness studio. Yoga · Pilates · HIIT · Personal Training.",
    images: ["https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation"],
  name: "Aura Fitness Studio",
  description: "Dubai's premier ladies-only boutique fitness studio offering Pilates, Yoga, HIIT and Personal Training.",
  url: "https://aura-fitness.vercel.app",
  telephone: "+971XXXXXXXXX",
  email: "hello@aurafitness.ae",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Umm Suqeim",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.1416,
    longitude: 55.1986,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
      opens: "06:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "07:00",
      closes: "20:00",
    },
  ],
  priceRange: "AED 80 - AED 350",
  image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PLACEHOLDER');
          `}
        </Script>
      </body>
    </html>
  );
}
