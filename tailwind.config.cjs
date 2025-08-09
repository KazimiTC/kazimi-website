/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonPink: '#FF2EF5',
        neonBlue: '#2EF5FF',
      },
      fontFamily: {
        sans: ['Oswald', 'sans-serif'],
      },
      keyframes: {
        neonPulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
      animation: {
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} 