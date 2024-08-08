/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        //colors from monkey-type aether theme
        bg: '#101820',
        main: '#eedaea',
        caret: '#eedaea',
        sub: '#cf6bdd',
        subAlt: '#292136',
        text: '#eedaea',
        error: '#ff5253',
        errorExtra: '#e3002b',
        colorfulError: '#ff5253',
        colorfulErrorExtra: '#e3002b',
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
        heading: ['Geist', 'monospace'],
        body: ['Geist', 'monospace'],
      },
    },
  },
  plugins: [],
};
