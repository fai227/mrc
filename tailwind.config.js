module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      full: "900px",
    },
    extend: {
      colors: {
        primary: "#2563EB",
        headerbg: "#333333",
      },
      spacing: {
        "900px": "900px",
      },
      fontFamily: {
        sans: [
          '"Hiragino Kaku Gothic Pro"',
          '"ヒラギノ角ゴ Pro"',
          '"Yu Gothic Medium"',
          '"游ゴシック Medium"',
          "YuGothic",
          '"游ゴシック体"',
          '"メイリオ"',
          "sans-serif",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
