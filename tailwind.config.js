module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {

    extend: {
      fontSize: {
        'big': '20rem',
      },

      width: {
        'bb': '3rem',
      },
      colors: {
        // Configure your color palette here
        'blen': '#000',
        'reddy': '#2c0615',
        'banner': '#080517',
      },
      backgroundImage: {
        'waves': "url('../src/images/waves.jpg')",
      },
    },
    plugins: [],
    fontFamily: {
      'sans': 'Quantify',
    }
  }
}
