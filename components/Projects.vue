<template>
	<div class="container mx-auto py-6 px-4 sm:px-1 lg:px-8 sm:w-full lg:w-3/4">
		<h1 class="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl mb-10">
			Projektit
		</h1>
		<div class="flex-col md:flex-row flex gap-10">
			<div class="selected-project-container">
				<div
					class="selected-project flex flex-col md:flex-row gap-5 justify-between w-full"
					v-for="project in projects"
					:key="project.id"
					:class="selectedProject === project.id && 'selected-project-active'">
					<div class="project-details">
						<h3 class="project-title">{{ project.title }}</h3>
						<p class="project-description">{{ project.description }}</p>
						<div class="project-footer">
							<a
								:href="project.link"
								class="mt-3 live-demo-button bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:cursor-pointer hover:underline"
								>Live Demo
							</a>
						</div>
					</div>
					<div class="block w-4/5">
						<img
							:src="project.image"
							alt="project.title"
							class="project-image object-scale-down rounded-lg shadow-m md:w-72 hover" />
						<div class="flex flex-wrap gap-1">
							<div v-for="skill in project.skills" :key="skill" class="project-skill">
								<img
									:src="`/images/${skill}.svg`"
									:alt="skill"
									width="50px"
									height="50px" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="projects-list">
				<div class="projects w-full">
					<div
						class="project"
						v-for="project in projects"
						:key="project.id"
						@click="clickProject(project.id)"
						:class="selectedProject === project.id && 'selected'">
						<p class="project-text">
							{{ project.title }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { projects } from "~/assets/projects.json";
export default {
	// Your component's logic goes here
	computed: {
		projects() {
			return projects;
		},
	},
	methods: {
		clickProject(projectId) {
			this.selectedProject = projects.find((project) => project.id === projectId).id;
		},
	},
	data() {
		return {
			selectedProject: projects[0].id,
		};
	},
};
</script>

<style scoped>
div.projects-list {
	position: relative;
	font-size: 14px;
	flex-basis: 30.9017%;
}
div.projects-list:before {
	content: " ";
	width: 90px;
	height: 90px;
	background: linear-gradient(
		135deg,
		var(--grad-1) 0%,
		var(--grad-2) 50%,
		var(--grad-1) 100%
	);
	opacity: 1;
	border-top-left-radius: 8px;
	transition: all 0.3s ease-in-out;
	position: absolute;
	top: -2px;
	bottom: 0;
	left: -2px;
}
div.projects-list:after {
	content: " ";
	width: 90px;
	height: 90px;
	background: linear-gradient(
		135deg,
		var(--grad-2) 0%,
		var(--grad-1) 50%,
		var(--grad-2) 100%
	);
	opacity: 0;
	border-top-left-radius: 8px;
	transition: all 0.3s ease-in-out;
	position: absolute;
	top: -2px;
	bottom: 0;
	left: -2px;
}
div.projects-list:hover:before {
	opacity: 0;
}
div.projects-list:hover:after {
	opacity: 1;
}
.projects {
	-webkit-text-size-adjust: 100%;
	color: #d1d1d1;
	font-family: Montserrat-Regular;
	user-select: none;
	font-size: 14px;
	flex: 1;
	z-index: 1;
	background: rgb(17 24 39 / 1);
	border-top-left-radius: 7px;
	flex-direction: column;
	margin-left: 0;
	padding: 30px 30px 0;
	display: flex;
	position: relative;
}
.project {
	cursor: pointer;
	padding: 10px 0;
}
.project {
	color: #fff;
	position: relative;
}
.project:hover > .project-text {
	letter-spacing: 1px;
}

.project-text {
	letter-spacing: 0.5px;
	transition: all 0.3s ease-in-out;
}
.project-text:after {
	content: "";
	height: 1px;
	width: 100%;
	background: linear-gradient(270deg, var(--grad-1) 0%, var(--grad-2) 100%);
	opacity: 0;
	transition: all 0.3s ease-in-out;
	display: inline-block;
	position: absolute;
	bottom: -2px;
	left: 0;
	right: 0;
}
.project-text:before {
	content: "";
	height: 1px;
	width: 100%;
	background: linear-gradient(270deg, var(--grad-2) 0%, var(--grad-1) 100%);
	opacity: 1;
	transition: all 0.3s ease-in-out;
	display: inline-block;
	position: absolute;
	bottom: -2px;
	left: 0;
	right: 0;
}
.project-text:hover:before {
	opacity: 0;
}
.project-text:hover:after {
	opacity: 1;
}

.selected-project-container {
	position: relative;
	flex-basis: 69.0983%;
}
.selected-project-container:before {
	content: " ";
	width: 2px;
	background: linear-gradient(0deg, var(--grad-2) 0%, var(--grad-1) 100%);
	position: absolute;
	top: 0;
	bottom: 0;
	left: 5px;
}
.selected-project {
	transform-origin: 100%;
	opacity: 0;
	width: 100%;
	transition: all 0.2s linear;
	position: absolute;
	top: 0;
	left: 0;
	transform: scaleX(0);
	margin-left: 10px;
}
.selected-project-active {
	opacity: 1;
	transform: scaleX(1);
	height: 100%;
	position: relative;
}
.project-details {
	padding-left: 10px;
	display: flex;
	flex-direction: column;
	width: 100%;
	color: #fff;
}
.project-details .project-title {
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 10px;
}
.project-details .project-description {
	font-size: 14px;
	line-height: 1.5;
}
.project-details .project-footer {
	margin-top: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

/* Slide Animation 
	Make the old element slide out and fade out to the right and the new element slide in from the right
*/
.slide-enter-active {
	transition: all 0.6s ease-in-out;
}
.slide-leave-active {
	transition: all 0.2s ease-in-out;
}
.slide-enter {
	transform: translateX(0%);
	opacity: 0;
}
.slide-leave-to {
	width: 50%;
	transform: translateX(100%);
}
</style>
