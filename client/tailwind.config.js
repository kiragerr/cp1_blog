/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}", "index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        cupcake: {
          ...require('daisyui/src/theming/themes')['cupcake'],
          ".btn": {
          }
        }
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          ".btn": {
            "border-radius": "2.25rem",
          }
        }
      }]
  }
}

