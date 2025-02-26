<script setup lang="ts">
const props = defineProps(["game"]);
import { computed } from "vue";
import TheGameInfo from "./TheGameInfo.vue";
const date = computed(() => new Intl.DateTimeFormat("en-GB").format(props.game.lastMoveAt));
</script>

<template>
	<article>
		<div class="meta">
			<p>{{ date }}</p>
			<p>Tournament</p>
		</div>
		<TheGameInfo :game class="info" />
		<div class="white">White</div>
		<div class="black">Black</div>
		<!-- <TheGamePlayer :player="game.players.white" class="white" /> -->
		<!--<TheGamePlayer :player="game.players.black" class="black" /> -->
	</article>
</template>

<style scoped>
.meta {
	grid-column: 1 / -1;
	background-color: var(--p-surface-800);
	color: var(--p-surface-50);
	text-align: center;
	padding: 0.4rem;
}
article {
	display: grid;
	grid-template-columns: 45% auto;
}
article > * {
	flex: 1;
}
.white,
.black {
	padding: 0.5rem;
}
.white {
	border-bottom: var(--border);
}
.info {
	grid-row: 2 / 4;
}
</style>
