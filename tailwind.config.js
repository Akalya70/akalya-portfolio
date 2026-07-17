/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        secondary: '#F8FAFC',
        card: '#FFFFFF',
        primary: '#6366F1',
        'primary-dark': '#4F46E5',
        accent: '#111827',
        heading: '#111827',
        body: '#4B5563',
        borderc: '#E5E7EB',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
        'card-sm': '16px',
        blob: '42% 58% 65% 35% / 45% 40% 60% 55%',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      boxShadow: {
        soft: '0 4px 24px rgba(17, 24, 39, 0.06)',
        'soft-lg': '0 12px 40px rgba(17, 24, 39, 0.10)',
        glow: '0 8px 30px rgba(99, 102, 241, 0.18)',
        'glow-purple': '0 8px 30px rgba(99, 102, 241, 0.12)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(6deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blob: {
          '0%, 100%': { borderRadius: '42% 58% 65% 35% / 45% 40% 60% 55%' },
          '50%': { borderRadius: '58% 42% 35% 65% / 55% 60% 40% 45%' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        blob: 'blob 10s ease-in-out infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
      },
    },
  },
  plugins: [],
}
