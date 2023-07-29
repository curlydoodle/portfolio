/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'background': '#111317',
        'text': '#97aabf',
        'header': '#b3c3d5',
        'theme': '#171c22',
        'cursor': '#aebfd2',
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

