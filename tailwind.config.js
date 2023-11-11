/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background1: "#FFFAFB",
				background2: "#F4F4F4",
				foreground: "#131515",
				primary: "#56C8B5",
				secondary: "#7DE2D1",
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
