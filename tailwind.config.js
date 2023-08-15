/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'background': '#0e0e0e',
        'text': '#827b6d',
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
        '2xl': '1.5rem',
        '3xl': '1.7rem',
        '4xl': '2.15rem',
      },

      backdropBlur: {
        xs: '3px',
      }
    },
  },
  plugins: [],
}

