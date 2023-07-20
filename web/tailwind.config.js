/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-dekko)',
        alt: 'var(--font-overpass)',
      },

      colors: {
        blue: {
          50: '#e9ebef',
          75: '#a5adbf',
          100: '#808ba5',
          200: '#49597e',
          300: '#243763',
          400: '#192745',
          500: '#16223c',
        },
        brown: {
          50: '#faf7f3',
          75: '#e8decf',
          100: '#dfd1bb',
          200: '#d1bd9d',
          300: '#c8af89',
          400: '#8c7a60',
          500: '#7a6b54',
        },
        orange: {
          50: '#fff1ea',
          75: '#ffc4ab',
          100: '#ffab88',
          200: '#ff8754',
          300: '#ff6e31',
          400: '#b34d22',
          500: '#9c431e',
        },
        yellow: {
          50: '#fffdf8',
          75: '#fff7e1',
          100: '#fff3d5',
          200: '#ffeec3',
          300: '#ffebb7',
          400: '#b3a580',
          500: '#9c8f70',
        },
      },
    },
  },
  plugins: [],
}
