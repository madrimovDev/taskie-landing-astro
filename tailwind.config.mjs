/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

function withOpacity(hexColor, opacity) {
	// Hex color format: #RRGGBB
	const r = parseInt(hexColor.slice(1, 3), 16);
	const g = parseInt(hexColor.slice(3, 5), 16);
	const b = parseInt(hexColor.slice(5, 7), 16);

	return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#67c40f",
					100: "#cef8a7",
					200: "#b9f581",
					300: "#a5f25b",
					400: "#90f035",
					500: "#67c40f",
					600: "#539e0c",
					700: "#3f7809",
					800: "#2b5206",
					900: "#172c03",
				},
			},
			container: {
				center: true,
				padding: "1rem",
				screens: {
					sm: "640px",
					md: "750px",
					lg: "1024px",
					xl: "1280px",
				},
			},
		},
	},
	plugins: [
		plugin(function makeComponent({ addComponents, theme }) {
			addComponents({
				".backdrop-navbar": {
					"background-color": withOpacity("#ffffff", 0.7),
					"backdrop-filter": "blur(16px) saturate(150%)",
				},
				".active-link": {
					color: theme("colors.primary.500"),
				},
			});
		}),
	],
};

