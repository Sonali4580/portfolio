/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
        keyframes: {
        'flip-horizontal-fwd': {
          '0%': { transform: 'translateZ(0) rotateX(0)' },
          '100%': { transform: 'translateZ(160px) rotateX(-180deg)' },
        },
      },
      animation: {
        'flip-horizontal-fwd': 'flip-horizontal-fwd 1s forwards',
      },
    },
  },
  plugins: [],
}

