<template>
	<div class="hero">
		<img class="hero-image" src="/assets/images/banner1.jpg" alt="Hero Image" />
		<h1 class="font-extrabold text-white hero-content">
			Iikka Piitulainen | Ohjelmistokehittäjä
		</h1>
	</div>
</template>

<script>
export default {
	name: "Hero",
};
</script>

<style scoped>
.hero {
	position: relative;
	height: calc(100vh - 64px);
}

.hero-image {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.hero-content {
	position: absolute;
	top: 45%;
	left: 50%;
	transform: translate(-50%);
	word-break: keep-all;
	white-space: nowrap;
	text-align: center;
	font-size: 2.5em;
}
@media screen and (max-width: 640px) {
	.hero {
		position: relative;
		height: 50vh;
	}
	.hero-image {
		height: 100%;
	}
	.hero-content {
		font-size: 1.1em;
	}
}
</style>
