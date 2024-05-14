/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode : 'class' ,
  theme: {
    colors: {
      accent : {
      // Using modern `rgb`
      1 : 'hsl(var(--color-accent1) / <alpha-value>)',
      2 : 'hsl(var(--color-accent2) / <alpha-value>)',

      // Using modern `hsl`
      bkg : 'hsl(var(--color-bkg) / <alpha-value>)',
      content : 'hsl(var(--color-content) / <alpha-value>)',

      }
    }
  },
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        light : '#ffffff' ,
        primary: "#00040f",
        secondary: "#1648ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(23, 72, 255, 0.1);",
        customblue: '#1e263b',
        lightblue : '#1648ff',
        lightbluehover : '#0e3bbd',
        darkblue : '#1c263b',
        midgrey : '#353d4f',
        darkgray : '#3d434f' ,
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
