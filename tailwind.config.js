/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'background': '#000',
        'pattern': '#090909',
        'text': '#dddddd',
        'header': '#fff',
        'theme': '#101010',
        'button': '#151515',
        'cursor': '#dddddd',
      },

      fontSize: {
        xxs: '0.85rem',
        xs: '0.85rem',
        sm: '0.9rem',
        base: '1rem',
        lg: '1rem',
        xl: '1.15rem',
        '2xl': '1.25rem',
        '3xl': '1.4rem',
      },
    },
  },
  plugins: [],
}

