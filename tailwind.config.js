/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'card-in': 'cardIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
        'avatar-in': 'avatarIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s forwards',
        'fade-up': 'fadeUp 0.5s ease forwards',
        'pulse-ring': 'pulseRing 3s ease-in-out infinite',
        'dot-pulse': 'dotPulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out 2s infinite',
        'ripple': 'rippleAnim 0.7s ease-out forwards',
        'check-in': 'checkIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        cardIn: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        avatarIn: {
          to: { opacity: '1', transform: 'scale(1)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.4' },
          '50%': { transform: 'scale(1.05)', opacity: '0.1' },
        },
        dotPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        },
        shimmer: {
          '0%': { left: '-60%' },
          '100%': { left: '160%' },
        },
        rippleAnim: {
          to: { transform: 'scale(60)', opacity: '0' },
        },
        checkIn: {
          from: { transform: 'scale(0) rotate(-20deg)' },
          to: { transform: 'scale(1) rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}
