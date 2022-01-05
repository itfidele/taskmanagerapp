module.exports = {
  content: [
    '*.{html,js}',
    './views/*.{html,js}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
