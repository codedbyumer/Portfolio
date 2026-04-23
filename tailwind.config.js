/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: '#050508',
          2: '#0a0a10',
          3: '#0f0f18',
        },
        surface: {
          DEFAULT: '#12121e',
          2: '#1a1a28',
        },
        accent: {
          DEFAULT: '#7c6dfa',
          2: '#a855f7',
          3: '#06b6d4',
        },
        success: '#10d97a',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite 2s',
        'pulse-dot': 'pulse-dot 2s infinite',
        blink: 'blink 0.8s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        'pulse-dot': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(16,217,122,0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(16,217,122,0)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
