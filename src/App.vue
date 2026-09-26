<script setup lang="ts">
import TheFooter from "./components/TheFooter.vue";
import TheGames from "./components/TheGames.vue";
import TheHero from "./components/TheHero/TheHero.vue";
import TheRequest from "./components/TheRequest.vue";
</script>

<template>
	<TheHero />
	<div class="container">
		<TheRequest />
		<TheGames />
	</div>
	<TheFooter />
</template>
