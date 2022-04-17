module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
      },
      colors: {
        "edu-yellow": "#FFF100",
        "edu-blue": "#0081CC",
        "edu-bg": "#F6F6F6",
        "edu-text": "#1E1E1E",
        "edu-boder": "#DADADA",
        "edu-mask": "rgba(0, 0, 0, .7)",
      },
      backgroundImage: {
        "border-bottom": "url('@/assets/images/icon/headericon_line.svg')"
      },
      screens: {
        "xs": "360px"
      }
    },
  },  
  plugins: [],
}
