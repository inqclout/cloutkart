/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        heading: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        brand: {
          purple: '#A855F7',
          blue: '#3B82F6',
          cyan: '#06B6D4',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #A855F7 0%, #3B82F6 50%, #06B6D4 100%)',
        'dot-grid': 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '28px 28px',
      },
      animation: {
        'float': 'floatY 5s ease-in-out infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
