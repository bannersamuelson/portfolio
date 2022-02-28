module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {

    extend: {
      colors: {
        // Configure your color palette here
        'blen': '#080517',
        'reddy': '#2c0615',
        'banner': '#08010c',
      },
      backgroundImage: {
        'waves': "url('../src/images/Bg.jpeg')",
      },
    },
    plugins: [],
    fontFamily: {
      'sans': 'Quantify',
    }
  }
}
