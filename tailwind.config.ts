import type { Config } from "tailwindcss";

export default {
  content: [
    "src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {

    
      },
    },
  },
  safelist: [
    'bg-red-500', 'hover:bg-red-600',
    'bg-blue-500', 'hover:bg-blue-600',
    'bg-gray-500', 'hover:bg-gray-600',
    'bg-green-500', 'hover:bg-green-600',
    'bg-sky-500', 'hover:bg-sky-600',
    'bg-black-500', 'hover:bg-black-600',
    'bg-yellow-500', 'hover:bg-yellow-600',
  ],
  plugins: [], 
} satisfies Config;
