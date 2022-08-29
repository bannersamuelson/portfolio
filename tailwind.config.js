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
        'blen': '#fff',
        'reddy': '#2c0615',
        'banner': '#080517',
        'yellow': '#FFFF0A'
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
