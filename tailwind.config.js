/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{

      // => @media (min-width: 640px) { ... }
    
      'sm': '300px',
      'smx': '560px',
      'md': '728px',
      'lg': '964px',
      'xl': '1100px',
      '2xl': '1436px',
    
    },
    extend: {},
  },
  plugins: [require("daisyui"),
    
  ],
};
