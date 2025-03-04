/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        danger: {
          DEFAULT: '#dc2626',
          hover: '#b91c1c',
        },
        success: {
          DEFAULT: '#22c55e',
          hover: '#16a34a',
        },
        warning: {
          DEFAULT: '#facc15',
          hover: '#eab308',
        },
        purple: {
          DEFAULT: '#7b78ff',
          hover: '#6867d7',
        },
        blue: {
          DEFAULT: '#007aff',
          hover: '#0066cc',
        },
        gray: {
          DEFAULT: '#626161',
          hover: '#4f4e4e',
        },
      },
    },
  },
  plugins: [],
};
