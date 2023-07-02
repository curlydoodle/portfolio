/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'gray': '#e8e8e8',
        'white': '#fff',
        'theme': '#b5f5f3',
        'theme-text': '#101920'
      },
      
      boxShadow: {
        'inner': '0px 6px 6px',
      },

      fontSize: {
        xs: '0.7rem',
        sm: '0.8rem',
        base: '1rem',
        lg: '1.1rem',
        xl: '1.15rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}

