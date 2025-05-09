// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/sitemap", "nuxt-simple-robots"],
	css: ["~/assets/styles/index.css"],
	ssr: true,
	app: {
		head: {
			title: "Iikka Piitulainen - Portfolio",
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{
					hid: "description",
					name: "description",
					content: "Iikka Piitulainen portfolio",
				},
				{
					name: "google-site-verification",
					content: "AFkmfxbqB4lld8dFOsaXm49qKYw8Gll5bvudAoK2ljA",
				},
			],
			htmlAttrs: {
				lang: "fi",
			},
		},
	},
	site: {
		url: 'https://piitulaineniikka.github.io',
	}
});
