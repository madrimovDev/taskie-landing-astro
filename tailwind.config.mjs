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
                    DEFAULT: "#539e0c",
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

        require('@tailwindcss/typography'),
        plugin(function makeComponent({addComponents, theme}) {
            addComponents({
                ".backdrop-navbar": {
                    "background-color": withOpacity("#ffffff", 0.7),
                    "backdrop-filter": "blur(15px) saturate(80%)",
                    position: "fixed",
                    boxShadow: `0 2px 2px 0px ${withOpacity("#000000", 0.04)}`,
                },
                ".active-link": {
                    color: theme("colors.primary.500"),
                    position: "relative",
                    "&::after": {
                        position: "absolute",
                        content: "''",
                        bottom: 0,
                        right: 0,
                        left: 0,
                        height: "2px",
                        width: "100%",
                        background: theme('colors.primary.500'),
                    }
                },
            });
        }),
    ],
};

