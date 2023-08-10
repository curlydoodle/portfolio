/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'background': '#0e0e0e',
        'pattern': '#090909',
        'text': '#87877a',
        'card': '#131210',
        'header': '#dcc9ad',
        'button': '#131210',
        'cursor': '#dcc9ad',
      },

      fontSize: {
        xxs: '0.75rem',
        xs: '0.8rem',
        sm: '0.9rem',
        base: '1rem',
        lg: '1.1rem',
        xl: '1.15rem',
        '2xl': '1.2rem',
        '3xl': '1.75rem',
        '4xl': '2.15rem',
      },
    },
  },
  plugins: [],
}

