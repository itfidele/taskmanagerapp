module.exports = {
  content: [
    '*.{html,js}',
    './views/*.{hbs,js}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
