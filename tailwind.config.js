/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background': '#010409',
        'blue': '#74b9ff',
        'gray': '#8C92AC',
        'scrollbar-track': '#2c2c2c',
        'scrollbar-thumb': '#444',
      }
    }
  },
  plugins: []
};
