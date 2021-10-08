module.exports = {
  mode: 'jit',
  purge: ['./src/app.html', './src/**/*.{svelte,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    ...(process.env.NODE_ENV == 'development' ? [require('tailwindcss-debug-screens')] : [])
  ]
}
