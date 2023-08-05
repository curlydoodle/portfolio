/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'background': '#000',
        'text': '#d3d3da',
        'header': '#f5f5f6',
        'theme': '#131313',
        'button': '#1a1a1a',
        'cursor': '#d3d3da',
      },

      fontSize: {
        xs: '0.8rem',
        sm: '0.9rem',
        base: '1rem',
        lg: '1.05rem',
        xl: '1.1rem',
        '2xl': '1.2rem',
        '3xl': '2.4rem',
      },
    },
  },
  plugins: [],
}

