// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss"],
	css: ["~/assets/styles/main.css"],
	title: "Portfolio",
	ssr: true,
	// add title to head 
	head: {
		title: "Iikka Piitulainen - Portfolio",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "Iikka Piitulainen - Software Developer and Portfolio" },
		],
	},
});
