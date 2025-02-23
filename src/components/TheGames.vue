<script setup lang="ts">
import { analysis } from "../analysis";
import GameCard from "./GameCard.vue";
</script>

<template>
	<section>
		<h2>Games</h2>
		<div class="games">
			<GameCard v-for="game of analysis.games" :game />
		</div>
	</section>
</template>

<style scoped>
.games > * {
	margin-bottom: 2rem;
}
</style>
