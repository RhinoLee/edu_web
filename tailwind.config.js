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
        "edu-yellow": "var(--edu-yellow)",
        "edu-blue": "var(--edu-blue)",
        "edu-bg": "var(--edu-bg)",
        "edu-text": "var(--edu-text)",
        "edu-boder": "var(--edu-boder)",
        "edu-mask": "var(--edu-mask)",
      },
      backgroundImage: {
        "border-bottom": "url('@/assets/images/icon/headericon_line.svg')",
        "select-arrow": "url('@/assets/images/icon/icon_arrow.svg')",
        "growing": "url('@/assets/images/image/img_up_bg.png')"
      },
      screens: {
        "xs": "360px",
        "tablet": "992px",
      }
    },
  },
  plugins: [
  ],
}
