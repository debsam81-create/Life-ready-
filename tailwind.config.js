/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: '#0D7377',
        'teal-light': '#E0F4F4',
        coral: '#FF6B4A',
        'coral-soft': '#FFE4D6',
        navy: '#1B2A4A',
        'warm-white': '#FDF8F4',
        slate: '#5A6B7C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Source Serif 4', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
