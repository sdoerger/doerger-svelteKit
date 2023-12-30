const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
      fontSize: {
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },
      fontFamily: {
        // https://tailwindcss.com/docs/font-family#customizing
        josefinSans: ["'Josefin Sans'"],
      },
      colors: {
        sdlightGrey: {
          50: "#fefefe",
        },
        sdDarkGrey: {
          200: "#66668F",
          400: "#34344A",
          800: "#111118",
        },
        sdDarkGreyLight: {
          400: "#6A706E",
        },
        sdGreen: {
          200: "#C2FFDC",
          400: "#59FFA0",
          800: "#00F56A",
        },
      }
		},
	},
	plugins: [],
};

module.exports = config;
