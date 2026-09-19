/**
 * Impact GovCon Solutions LLC
 * @link https://impactgovconsolutions.com
 */

/** @type {import("tailwindcss").Config} */

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				main: ["Inter", "sans-serif"],
				title: ["Poppins", "sans-serif"],
				body: ["Inter", "sans-serif"],
			},
			colors: {
				navy: "#0B1F3A",
				navyLight: "#132A4C",
				navyDark: "#081729",
				red: "#D62828",
				redDark: "#B01F1F",
				lightGrey: "#E9EBEF",
				cardGrey: "#EEF0F4",
				borderGrey: "#DDE1E7",
				bodyGrey: "#5B6472",
				white: "#ffffff",
				greyWolf: "#9B9EA5",
			},
			fontSize: {
				10: ["10px", "14px"],
				12: ["12px", "18px"],
				14: ["14px", "22px"],
				16: ["16px", "26px"],
				18: ["18px", "27px"],
				20: ["20px", "28px"],
				22: ["22px", "30px"],
				24: ["24px", "31px"],
				28: ["28px", "34px"],
				32: ["32px", "40px"],
				40: ["40px", "48px"],
				48: ["48px", "56px"],
				60: ["60px", "68px"],
			},
			boxShadow: {
				card: "3px 8px 19px 0px rgba(11,31,58,0.06)",
				cardHover: "12px 32px 34px 0px rgba(11,31,58,0.10)",
				topbar: "0px 4px 20px 0px rgba(0,0,0,0.06)",
				iconShadow: "0px 0px 20px 0px rgba(11,31,58,0.10)",
			},
			animation: {
				scrollRightLeft: "scrollRightLeft 32s linear infinite",
				scrollLeftRight: "scrollLeftRight 32s linear infinite",
			},
			keyframes: {
				scrollRightLeft: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" },
				},
				scrollLeftRight: {
					"0%": { transform: "translateX(-50%)" },
					"100%": { transform: "translateX(0)" },
				},
			},
		},
	},
	plugins: [],
};
