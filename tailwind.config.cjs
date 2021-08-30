module.exports = {
	mode: 'jit',
	purge: ['./public/index.html', './src/**/*.{svelte,js,ts}'],
	darkMode: 'class',
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};
