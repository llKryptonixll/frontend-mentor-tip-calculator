/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./public/*.js"],
  theme: {
    minHeight: {
      '650px': '650px',
    },
    extend: {
      fontFamily: {
        SpaceMono: ["Space Mono", "monospace"]
      },
      colors: {
        "main-background-color" : "var(--main-background-color)",
        "very-dark-cyan" : "var(--very-dark-cyan)",
        "dark-grayish-cyan" : "var(--dark-grayish-cyan)",
        "grayish-cyan" : "var(--grayish-cyan)",
        "very-light-gryish-cyan" : "var(--very-light-gryish-cyan)",
        "white" : "var(--white)",
        "strong-cyan" : "var(--strong-cyan)",
        "strong-cyan-hover" : "var(--strong-cyan-hover)",
        "input-error-color" : "var(--input-error-color)"
      },
      spacing: {
        '1000px': '1000px',
      }
    },
  },
  plugins: [],
}
