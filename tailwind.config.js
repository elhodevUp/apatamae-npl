/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/views/**/*.blade.php",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        "headline-lg-mobile": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-xl": ["Inter", "sans-serif"],
        "headline-lg": ["Inter", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "headline-md": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"]
      },
      fontSize: {
        "headline-lg-mobile": ["clamp(24px, 4vw + 12px, 28px)", { "lineHeight": "1.2", "fontWeight": "800", "letterSpacing": "-0.01em" }],
        "body-lg": ["clamp(16px, 2vw + 10px, 18px)", { "lineHeight": "1.7", "fontWeight": "400", "letterSpacing": "0.01em" }],
        "headline-xl": ["clamp(36px, 5vw + 16px, 52px)", { "lineHeight": "1.1", "letterSpacing": "-0.03em", "fontWeight": "900" }],
        "headline-lg": ["clamp(30px, 4vw + 12px, 40px)", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "label-sm": ["12px", { "lineHeight": "14px", "fontWeight": "600", "letterSpacing": "0.02em" }],
        "body-sm": ["clamp(13px, 1vw + 10px, 14px)", { "lineHeight": "1.6", "fontWeight": "400", "letterSpacing": "0.01em" }],
        "headline-md": ["clamp(24px, 3vw + 12px, 28px)", { "lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "700" }],
        "body-md": ["clamp(14px, 1.5vw + 10px, 16px)", { "lineHeight": "1.6", "fontWeight": "400", "letterSpacing": "0.01em" }],
        "label-md": ["clamp(13px, 1.5vw + 10px, 14px)", { "lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "600" }]
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        "4xl": "2rem",
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 53, 102, 0.08)',
        'glass-hover': '0 12px 40px 0 rgba(0, 53, 102, 0.15)',
        'glow-green': '0 0 25px rgba(27, 67, 50, 0.25)',
        'glow-ochre': '0 0 25px rgba(218, 165, 32, 0.3)',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.32, 0.72, 0, 1)',
        'bounce': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      },
      animation: {
        'blob': 'blob 10s infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'slow-pulse': 'slow-pulse 8s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(1, 45, 29, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(1, 45, 29, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slow-pulse': {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.7, transform: 'scale(1.1)' },
        }
      }
    },
  },
  plugins: [],
}
