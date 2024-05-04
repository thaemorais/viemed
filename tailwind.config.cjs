/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/App.{js,jsx,ts,tsx}",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		fontFamily: {
			sans: ["Roboto", "sans-serif"],
		},
		extend: {
			colors: {
				gray: "#323131",
				blue: "#012062",
				light: "#908D8D",
				regular: "#565555",
				green: "#42C047",
			},
		},
	},
	plugins: [],
};
