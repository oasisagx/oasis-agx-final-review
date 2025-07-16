const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // EXACT Oasis color system - Light mode only
        'oasis-blue': '#5B9AE1',           // Primary blue
        'oasis-blue-med': '#4A8BD8',       // Medium blue for buttons
        'oasis-blue-dark': '#3A7BC4',      // Darker blue for hover states
        'oasis-blue-light': '#E8F2FD',     // Light blue for backgrounds
        
        // Background system - EXACT COLORS
        'background': '#F8FAFC',           // Main background
        'card-background': '#FFFFFF',      // Cards and containers
        
        // Text system - High contrast
        'text-primary': '#000000',         // Main headings - BLACK
        'text-secondary': '#1e293b',       // Secondary headings - Dark gray
        'text-body': '#475569',            // Body text - Medium gray
        'text-muted': '#64748b',           // Muted text - Light gray
        
        // Functional colors - Only essential
        'success': '#10b981',              // Success states
        'warning': '#f59e0b',              // Warning states
        'error': '#ef4444',                // Error states
        'whatsapp': '#25d366',             // WhatsApp brand
        
        // Borders and neutrals
        'border-light': '#e2e8f0',         // Light borders
        'border-medium': '#cbd5e1',        // Medium borders
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      boxShadow: {
        'soft': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'medium': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        'strong': '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
