/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			padding: '1.5rem',
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}
