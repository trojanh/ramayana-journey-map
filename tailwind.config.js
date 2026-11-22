/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff8f0',
          100: '#ffeed9',
          200: '#fed7ad',
          300: '#fdb777',
          400: '#fc8e3f',
          500: '#f96815',
          600: '#ea4d0c',
          700: '#c2370c',
          800: '#9a2d12',
          900: '#7c2712',
        },
        ancient: {
          parchment: '#fcf8ee',
          border: '#d7c4a3',
          ink: '#2b2318',
          gold: '#d4af37',
          crimson: '#8b1e0f',
          deepBlue: '#15293e',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sanskrit: ['Yatra One', 'Rozha One', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
