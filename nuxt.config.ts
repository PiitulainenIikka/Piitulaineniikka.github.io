// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss"],
	css: ["~/assets/styles/main.css"],
	ssr: true,
	// add title to head 
	app: {
		head: {
			title: "Iikka Piitulainen - Portfolio",
			meta: [
				{ charset: "utf-8" },
				{ hid: "description", name: "description", content: "Iikka Piitulainen - Portfolio" },
			],
		},
	},
});
