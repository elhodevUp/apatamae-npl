/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apatam: {
          primary: '#012d1d',
          'primary-container': '#1b4332',
          'on-primary': '#ffffff',
          secondary: '#396093',
          'secondary-container': '#a0c6ff',
          tertiary: '#332300',
          ochre: '#daa520',
          surface: '#f8f9fa',
          'surface-dim': '#d9dadb',
          'surface-container': '#edeeef',
          dark: '#191c1d',
          'dark-surface': '#2e3132'
        }
      },
      fontFamily: {
        headline: ['Manrope', 'sans-serif'],
        body: ['Hanken Grotesk', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 53, 102, 0.08)',
        'glass-hover': '0 12px 40px 0 rgba(0, 53, 102, 0.15)',
        'glow-green': '0 0 25px rgba(27, 67, 50, 0.25)',
        'glow-ochre': '0 0 25px rgba(218, 165, 32, 0.3)',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        apatamTheme: {
          "primary": "#012d1d",
          "secondary": "#396093",
          "accent": "#daa520",
          "neutral": "#191c1d",
          "base-100": "#f8f9fa",
          "info": "#396093",
          "success": "#1b4332",
          "warning": "#daa520",
          "error": "#ba1a1a",
        },
      },
    ],
  },
}
