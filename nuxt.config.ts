// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/sitemap"],
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
	sitemap: {
		hostname: "https://piitulaineniikka.github.io",
		lastmod: '2024-02-15'
	}
});
