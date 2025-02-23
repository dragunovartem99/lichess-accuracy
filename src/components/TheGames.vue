<script setup lang="ts">
import { results } from "../resultsSingleton";
import GameCard from "./GameCard.vue";
</script>

<template>
	<section>
		<h2>Games</h2>
		<div class="games">
			<GameCard v-for="game of results.games" :game />
		</div>
	</section>
</template>

<style scoped>
.games > * {
	margin-bottom: 2rem;
}
</style>
