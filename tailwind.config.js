/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          50: '#F4F7FA',
          100: '#E6EDF4',
          200: '#CCDDE9',
          300: '#A4C3D8',
          400: '#6FA3C3',
          500: '#4182AA',
          600: '#2C678E',
          700: '#1F4F71',
          800: '#173B55',
          900: '#0E2435',
          950: '#071520',
        },
        navy: {
          800: '#0F1E2E',
          900: '#0B1724',
          950: '#060E17',
        },
        industrial: {
          amber: '#D95C14',
          hover: '#C24D0A',
          glow: '#F27B35',
        },
        charcoal: {
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        // Purani marquee (LTR - Left to Right)
        marquee: 'marquee 30s linear infinite',
        // Naya marquee RTL (Right to Left) - Material Section ke liye
        'marquee-rtl': 'marquee-rtl 40s linear infinite',
        // Naya marquee LTR (Left to Right) - Marquee component ke liye
        'marquee-ltr': 'marquee-ltr 30s linear infinite',
      },
      keyframes: {
        // Purana LTR (Left to Right)
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // Naya RTL (Right to Left) - Cards right se left move karenge
        'marquee-rtl': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // Naya LTR (Left to Right) - Cards left se right move karenge
        'marquee-ltr': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}