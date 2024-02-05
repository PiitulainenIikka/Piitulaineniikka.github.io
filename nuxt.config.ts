// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss"],
	css: ["~/assets/styles/main.css"],
	title: "Portfolio",
	ssr: true,
	// add title to head 
	head: {
		title: "Iikka Piitulainen - Portfolio"
	}
});
