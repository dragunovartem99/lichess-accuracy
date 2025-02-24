<script setup lang="ts">
import { sortedGames } from "../modules/sort";
import TheGame from "./TheGame/TheGame.vue";
import TheSort from "./TheSort.vue";
</script>

<template>
	<section>
		<h2>Games</h2>
		<div class="controls">
			<TheSort />
		</div>
		<div class="games">
			<TheGame v-for="game of sortedGames" :game :key="game.id" />
		</div>
	</section>
</template>

<style scoped>
.games > * {
	margin-bottom: 2rem;
}
.controls {
	margin-bottom: 2rem;
}
</style>
