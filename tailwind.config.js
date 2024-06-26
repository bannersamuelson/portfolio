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
        'wide': '22rem',
      },
      height: {
        'tall': '22rem',
        '23rem': '23rem',
      },
      padding: {
        'pad': '5%',

      },
      colors: {
        // Configure your color palette here
        'blen': 'bg-gray-200',
        'reddy': '#2c0615',
        'banner': '#080517',
        'yellow': '#FFFF0A',
        'yellow2': '#F5F500',
        'grey': '#030303',
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
