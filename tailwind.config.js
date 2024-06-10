// https://nx.dev/recipe/using-tailwind-css-with-angular-projects
// libs/tailwind-preset/tailwind.config.js

import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  mode: "jit",
  content: [
    "./**/*.{html,js,ts,jsx,tsx,vue}", // adjust this to match your file structure
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
        },
        secondary: {
          50: "var(--secondary-50)",
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
          500: "var(--secondary-500)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
          800: "var(--secondary-800)",
          900: "var(--secondary-900)",
        },
        error: {
          50: "var(--error-50)",
          100: "var(--error-100)",
          200: "var(--error-200)",
          300: "var(--error-300)",
          400: "var(--error-400)",
          500: "var(--error-500)",
          600: "var(--error-600)",
          700: "var(--error-700)",
          800: "var(--error-800)",
          900: "var(--error-900)",
        },
        warn: {
          50: "var(--warn-50)",
          100: "var(--warn-100)",
          200: "var(--warn-200)",
          300: "var(--warn-300)",
          400: "var(--warn-400)",
          500: "var(--warn-500)",
          600: "var(--warn-600)",
          700: "var(--warn-700)",
          800: "var(--warn-800)",
          900: "var(--warn-900)",
        },
        info: {
          50: "var(--info-50)",
          100: "var(--info-100)",
          200: "var(--info-200)",
          300: "var(--info-300)",
          400: "var(--info-400)",
          500: "var(--info-500)",
          600: "var(--info-600)",
          700: "var(--info-700)",
          800: "var(--info-800)",
          900: "var(--info-900)",
        },
      },
      screens: {
        xs: "300px", // min-width
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        display: ["Lexend", ...defaultTheme.fontFamily.sans],
      },
    },

    // spacing: {
    //   sm: 'var(--spacing-sm)',
    //   md: 'var(--spacing-md)',
    //   lg: 'var(--spacing-lg)',
    //   xl: 'var(--spacing-xl)',
    // },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar"),
  ],
};
