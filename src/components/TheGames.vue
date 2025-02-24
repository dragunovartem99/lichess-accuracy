<script setup lang="ts">
import { games } from "../store";
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
			<TheGame v-for="game of games" :game />
		</div>
	</section>
</template>

<style scoped>
.games > * {
	margin-bottom: 2rem;
}
.controls {
	margin-block: 1rem 2rem;
}
</style>
