<script setup lang="ts">
import type { Game } from "@/types";

import { computed } from "vue";
import * as target from "@/state/target";

import TheGameMeta from "./TheGameMeta.vue";
import TheGameResult from "./TheGameResult.vue";
import TheGameSide from "./TheGameSide.vue";

const props = defineProps<{ game: Game }>();

const flipped = computed(() =>
	props.game.players.black.user?.id === target.id.value ? "flipped" : null
);
</script>

<template>
	<article :class="flipped">
		<TheGameMeta class="game-meta" :game />
		<TheGameResult class="game-result" :game :flipped :target-id="target.id" />
		<TheGameSide class="game-side" v-for="player of game.players" :player />
	</article>
</template>

<style scoped>
article {
	display: grid;
	grid-template-columns: auto 1fr;
	border-radius: var(--p-border-radius-md);
	overflow: hidden;
}
.game-meta {
	grid-column: 1 / -1;
	order: -3;
}
.game-result {
	grid-row: 2 / 4;
	order: -2;
	width: min(310px, 45vw);
}
.game-side {
	padding: var(--space-0);
	border-bottom: 3px dashed var(--p-surface-300);
}
.game-side:last-of-type {
	--side-color: var(--p-surface-700);
	order: -1;
}
.flipped .game-side:last-of-type {
	order: 0;
}
@media (min-width: 640px) {
	.game-side {
		padding: var(--space-1);
	}
}
</style>
