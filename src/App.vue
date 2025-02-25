<script setup lang="ts">
import TheHero from "./components/TheHero.vue";
import TheFilter from "./components/TheFilter.vue";
import TheGames from "./components/TheGames.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
	<TheHero />
	<div class="container">
		<TheFilter />
		<TheGames />
	</div>
	<TheFooter />
</template>

<style scoped></style>
