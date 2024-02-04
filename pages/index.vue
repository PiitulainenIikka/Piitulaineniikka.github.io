<template>
	<div class="bg-gray-900">
		<Hero />
		<div class="container mx-auto py-6 px-4 sm:px-6 lg:px-8 sm:w-full lg:w-3/4">
			<div class="text-left">
				<h2 class="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
					Kuka minä olen?
				</h2>
			</div>
			<div class="mt-10 w-full">
				<p class="text-gray-300">
					Olen Tredun opiskelija ja opiskelen tieto- ja viestintätekniikan perustutkintoa
					ohjelmistokehittäjänä kolmatta vuotta. Pidän itseni haastamisesta ja olen hyvin
					ahkera työntekijä ja olen myös erittäin motivoitunut oppimaan uutta. Olen
					suorittanut ammatillisen perustutkinnon puoli vuotta etuajassa ja kirjoitan
					ylioppilaaksi 2024 keväällä. Olen työskennellyt ohjelmistokehittäjänä vähän
					vajaan vuoden ja olen työskennellyt niin frontendin kuin backendin parissa.
				</p>
			</div>
		</div>
		<div class="container mx-auto py-6 px-4 sm:px-1 lg:px-8 sm:w-full lg:w-3/4">
			<div class="text-left">
				<h2 class="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
					Työkokemus
				</h2>
			</div>
			<div class="mt-8 justify-start">
				<div
					v-for="job in jobs"
					:key="job.id"
					class="flex mb-8 cursor-pointer p-4 rounded-lg hover:bg-indigo-800 transition duration-300 ease-in-out w-full"
					@click="clickJob(job.id)">
					<div
						class="w-16 h-16 bg-indigo-300 rounded-full flex items-center justify-center">
						<span class="text-indigo-800 text-2xl cursor-pointer">{{
							job.title.charAt(0)
						}}</span>
					</div>
					<div class="ml-4">
						<h3 class="text-xl font-semibold text-white">{{ job.title }}</h3>
						<p class="text-gray-300">{{ job.type }}</p>
						<p class="text-gray-300">{{ job.from }} - {{ job.to }}</p>
					</div>
				</div>
			</div>
		</div>
		<Projects id="projects" />
	</div>
</template>

<script>
import { jobs } from "~/assets/jobs.json";
export default {
	// Your component's logic goes here
	computed: {
		jobs() {
			return jobs;
		},
	},
	methods: {
		clickJob(jobId) {
			this.$router.push(`/jobs/${jobId}`);
		},
	},
};
</script>

<style scoped></style>
