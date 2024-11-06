import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'xs': '490px',
        // => @media (min-width: 490px) { ... }
      },
      fontSize: {
        xxs: ['10px', '16px'],
      }
    },
    fontFamily: {
      body: ["Mona Sans", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"]
    },
  },
  plugins: [],
};
export default config;
