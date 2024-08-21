import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'offWhite': '#FDF7F1',
        'orange': '#EE6451',
        'lightDark': '#111235',
        'cream': '#B9E1D7'
      }
    },
  },
  plugins: [],
};
export default config;
