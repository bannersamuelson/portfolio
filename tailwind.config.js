module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {

    extend: {
      colors: {
        // Configure your color palette here
        'blen': '#000',
        'reddy': '#2c0615',
        'banner': '#080517',
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
