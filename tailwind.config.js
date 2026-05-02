/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          royal: '#5B2D8E',
          light: '#7B3DBE',
          dark: '#3D1D6B',
        },
        blue: {
          sapphire: '#0F52BA',
          light: '#1A6FE0',
          dark: '#0A3A8A',
        },
        silver: {
          platinum: '#E5E4E2',
          light: '#F0EFED',
          dark: '#BDBCBA',
        },
        charcoal: {
          DEFAULT: '#0D0D0D',
          card: '#1A1A2E',
          mid: '#111122',
        },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-royal': 'linear-gradient(135deg, #5B2D8E 0%, #0F52BA 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1A1A2E 0%, #0D0D0D 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
