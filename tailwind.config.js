/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#08080A',
        surface: {
          DEFAULT: '#09090B',
          50: '#18181B',
          100: '#121215',
          200: '#0E0E11',
          300: '#0A0A0C',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          medium: '#27272A',
          strong: '#3F3F46',
        },
        accent: {
          gold: '#E8D2A6',
          bronze: '#C9A876',
          bronzeDark: '#8C6F43',
          cyan: '#38BDF8',
          emerald: '#34D399',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        'mono-brand': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow-gold': '0 0 50px rgba(201, 168, 118, 0.15)',
        'glow-gold-lg': '0 0 70px rgba(201, 168, 118, 0.25)',
        'glow-cyan': '0 0 50px rgba(56, 189, 248, 0.15)',
        'card-dark': '0 8px 32px rgba(0, 0, 0, 0.6)',
        'glass-inset': 'inset 0 1px 1px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}