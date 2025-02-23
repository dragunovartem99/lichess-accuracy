<script setup lang="ts">
import { games } from "../analysis";
import TheGame from "./TheGame/TheGame.vue";
</script>

<template>
	<section>
		<h2>Games</h2>
		<div class="games">
			<TheGame v-for="game of games" :game />
		</div>
	</section>
</template>

<style scoped>
.games > * {
	margin-bottom: 2rem;
}
</style>
