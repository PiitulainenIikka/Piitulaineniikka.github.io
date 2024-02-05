// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss"],
	css: ["~/assets/styles/main.css"],
	ssr: true,
	app: {
		head: {
			title: "Iikka Piitulainen - Portfolio",
			link: [
				{ rel: 'stylesheet', href: '~/assets/styles/main.css' }
			],
		},
	},
});
