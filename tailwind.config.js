/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#fff',
        'theme': '#baf6f4',
        'theme-text': '#101920'
      },
      
      boxShadow: {
        'inner': '0px 10px 10px',
      },

      fontSize: {
        xs: '0.75rem',
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

