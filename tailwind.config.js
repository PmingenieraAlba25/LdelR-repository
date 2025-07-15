/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '144': '36rem', // Added for the header logo (3x the original 48)
        '72': '18rem',  // Added for the footer logo (3x the original 24)
      },
    },
  },
  plugins: [],
};