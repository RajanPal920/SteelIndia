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
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
