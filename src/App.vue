<script setup lang="ts">
import TheHero from "./components/TheHero/TheHero.vue";
import TheRequest from "./components/TheRequest.vue";
import TheGames from "./components/TheGames.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
	<TheHero />
	<div class="container">
		<TheRequest />
		<TheGames />
	</div>
	<TheFooter />
</template>
