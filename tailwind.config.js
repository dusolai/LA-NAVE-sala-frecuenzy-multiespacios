/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: "#CBA16F",
        "primary-dark": "#B08A55",
        "background-light": "#F9F9F9",
        "background-dark": "#0A0A0E",
        "surface-light": "#FFFFFF",
        "surface-dark": "#15151A",
        industrial: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        copper: {
          light: '#d4a373',
          DEFAULT: '#bc6c25',
          dark: '#936639',
        },
        steel: {
          light: '#f8f9fa',
          DEFAULT: '#ced4da',
          dark: '#adb5bd',
        },
        concrete: {
          light: '#e9ecef',
          DEFAULT: '#dee2e6',
          dark: '#ced4da',
        },
        // Segment colors
        wedding: {
          light: '#fdf0d5',
          DEFAULT: '#CBA16F',
          dark: '#780000',
        },
        corporate: {
          light: '#003049',
          DEFAULT: '#669bbc',
          dark: '#c1121f',
        },
        university: '#6366f1',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        foreground: '#ffffff',
      },
      secondary: {
        DEFAULT: '#666666',
        foreground: '#ffffff',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      display: ['Inter', 'system-ui', 'sans-serif'],
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    keyframes: {
      'fade-in': {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      'slide-in': {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
    },
    animation: {
      'fade-in': 'fade-in 0.6s ease-out forwards',
      'slide-in': 'slide-in 0.5s ease-out forwards',
    },
  },
  plugins: [require('tailwindcss-animate')],
}
