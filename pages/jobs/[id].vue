<script setup>
import { jobs } from "~/assets/jobs.json";
import { ref, computed } from "vue";

const route = useRoute();

const jobId = route.params.id;
const job = ref(jobs.find((job) => job.id === jobId));
const jobSkills = computed(() => {
	if (job.value) {
		return job.value.skills.map((skill) => ({
			src: "/images/" + skill + ".svg",
			alt: skill,
		}));
	}
	return [];
});
console.log(jobSkills);
</script>
<template>
	<div class="text-gray-300 bg-gray-900 flex justify-center items-center">
		<div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full md:w-2/3">
			<router-link to="/" class="text-gray-300 hover:text-white hover:underline pb-4">
				{{ "<" }} Takaisin
			</router-link>
			<div>
				<div class="text-left">
					<h2 class="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
						{{ job.title }}
					</h2>
					<h3 class="text-xl font-semibold">{{ job.type }}</h3>
					<p class="text-gray-300">{{ job.from }} - {{ job.to }}</p>
				</div>
				<div class="mt-10">
					<p class="text-white">{{ job.description }}</p>
				</div>
				<div class="skills mt-10">
					<h3 class="text-xl font- text-white mb-1">Käytetyt tekniikat:</h3>
					<ul class="flex gap-2">
						<li v-for="skill in jobSkills" :key="skill.alt" class="text-gray-300">
							<img :src="skill.src" :alt="skill.alt" width="50px" height="50px" />
						</li>
					</ul>
				</div>
			</div>
		</div>
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
};
</script>
