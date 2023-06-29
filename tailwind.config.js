/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ['Rajdhani']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#fff',
        'background': '#fff',
        'theme': '#b8f5ff',
        'theme-text': '#0d1420'
      },
      
      boxShadow: {
        'inner': '0px 8px 8px',
      },

      fontSize: {
        xs: '0.78rem',
        sm: '0.9rem',
        base: '1rem',
        lg: '1.1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
      },
    },
  },
  plugins: [],
}

