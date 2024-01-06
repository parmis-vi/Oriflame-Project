/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    container: { center: true },
    screens: {
      s1: "200px",
      // => @media (min-width: 200px) { ... }
      s2: "360px",
      // => @media (min-width: 360px) { ... }
      s3: "540px",
      // => @media (min-width: 540px) { ... }
      presm: "480px",
      // => @media (min-width: 480px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      mdm: "900px",
      // => @media (min-width: 900px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      lgg: "1460px",
      // => @media (min-width: 1460px) { ... }

      l2: "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
