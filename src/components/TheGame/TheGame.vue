<script setup lang="ts">
import { computed } from "vue";
import { targetId } from "../../store";

import TheGameMeta from "./TheGameMeta.vue";
import TheGameResult from "./TheGameResult.vue";
import TheGameSide from "./TheGameSide.vue";

const props = defineProps(["game"]);

const flipped = computed(() =>
	props.game.players.black.user?.id === targetId.value ? "flipped" : null
);
</script>

<template>
	<article :class="flipped">
		<TheGameMeta :game />
		<TheGameResult :game :flipped />
		<TheGameSide :player v-for="player of props.game.players" />
	</article>
</template>

<style scoped>
article {
	display: grid;
	grid-template-columns: auto 1fr;
	border-radius: var(--p-border-radius-md);
	overflow: hidden;
}
.meta {
	grid-column: 1 / -1;
	order: -3;
}
.result {
	grid-row: 2 / 4;
	order: -2;
	width: min(310px, 45vw);
}
.side {
	padding: 0.5rem;
	border-bottom: 3px dashed var(--p-surface-300);
}
.side:last-of-type {
	--side-color: var(--p-surface-700);
	order: -1;
}
.flipped .side:last-of-type {
	order: 0;
}
@media (min-width: 640px) {
	.side {
		padding: 1rem;
	}
}
</style>
