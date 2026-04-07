/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#E8ECF1',
          100: '#D1D9E6',
          200: '#B0BEC5',
          300: '#7F9FB3',
          400: '#5C7C99',
          500: '#3A5A80',
          600: '#2E4761',
          700: '#23364A',
          800: '#1B2B3B',
          900: '#121C2C',
          950: '#0A0F1A',
        },
        'coffee': {
          50: '#F5F0EB',
          100: '#E8DFD7',
          200: '#D1C7BF',
          300: '#B8AFA8',
          400: '#9C8E85',
          500: '#806F64',
          600: '#6B5C52',
          700: '#514941',
          800: '#403730',
          900: '#3A3028',
          950: '#26221F',
        },
        'cream': {
          50: '#FDFCF9',
          100: '#F9F5ED',
          200: '#F5F0E4',
          300: '#EDE5D4',
        },
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
