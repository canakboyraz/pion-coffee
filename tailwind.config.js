/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Pion lacivert (logo rengi) — koyu tonlar
        ink: {
          DEFAULT: '#0F1B2D',
          50: '#EEF1F6',
          100: '#D6DDE8',
          200: '#AEBACE',
          300: '#7F92B0',
          400: '#536A8E',
          500: '#344C70',
          600: '#243A5A',
          700: '#1A2C47',
          800: '#132238',
          900: '#0F1B2D',
          950: '#09111D',
        },
        // Sıcak vurgu: karamel / crema
        caramel: {
          50: '#FBF4EC',
          100: '#F5E4CF',
          200: '#EBC9A0',
          300: '#DFAB72',
          400: '#D4934F',
          500: '#C27A36',
          600: '#A3622A',
          700: '#7F4C22',
        },
        foam: '#F6F0E6',
        // Eski sayfalarla uyumluluk için korunan paletler
        primary: {
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
        coffee: {
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
        cream: {
          50: '#FDFCF9',
          100: '#F9F5ED',
          200: '#F5F0E4',
          300: '#EDE5D4',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out both',
        'slide-up': 'slideUp 0.8s cubic-bezier(.2,.7,.2,1) both',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        marquee: 'marquee 32s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--r, 0deg))' },
          '50%': { transform: 'translateY(-14px) rotate(calc(var(--r, 0deg) + 8deg))' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
