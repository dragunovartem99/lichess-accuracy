<script setup lang="ts">
import TheSearch from "../TheSearch.vue";
import TheHeroBubbles from "./TheHeroBubbles.vue";
</script>

<template>
	<section class="hero">
		<div class="container-wide">
			<TheHeroBubbles />
			<TheSearch />
		</div>
	</section>
</template>

<style scoped>
.hero {
	position: relative;
	background-color: var(--p-surface-400);
	overflow: hidden;
}
.hero::before {
	content: "";
	width: min(100vw, 1440px);
	height: min(100vw, 1440px);
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: var(--p-surface-300);
}
.container-wide {
	height: 600px;
	position: relative;
	display: grid;
	place-items: center;
}
</style>
