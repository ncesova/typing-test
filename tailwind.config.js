/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg-color)',
        main: 'var(--main-color)',
        caret: 'var(--caret-color)',
        sub: 'var(--sub-color)',
        subAlt: 'var(--sub-alt-color)',
        text: 'var(--text-color)',
        error: 'var(--error-color)',
        errorExtra: 'var(--error-extra-color)',
        colorfulError: 'var(--colorful-error-color)',
        colorfulErrorExtra: 'var(--colorful-error-extra-color)',
      },
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: ['Geist Mono', 'monospace'],
        body: ['Geist Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
