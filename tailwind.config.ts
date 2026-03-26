import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          dust: '#E8C4C4',
        },
        plum: {
          DEFAULT: '#2D1B2E',
          light: '#3D2B3E',
        },
        gold: {
          DEFAULT: '#C9974A',
        },
        warm: {
          white: '#FAF8F5',
          grey: '#F0EBE8',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
