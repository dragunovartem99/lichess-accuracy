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
		<div class="games" v-if="sortedGames.length">
			<TheGame v-for="game of sortedGames" :game :key="game.id" />
		</div>
	</section>
</template>

<style scoped>
.games {
	--border: 3px solid var(--p-surface-200);
	border: var(--border);
	border-bottom: none;
	margin-bottom: 3rem;
	box-shadow: 0 5px 25px #00000011;
}
.games > * {
	border-bottom: var(--border);
}
.controls {
	margin-bottom: 2rem;
}
</style>
