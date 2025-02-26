<script setup lang="ts">
import { computed } from "vue";
import { targetId } from "../../store";

import TheGameResult from "./TheGameResult.vue";
import TheGameSide from "./TheGameSide.vue";

const props = defineProps(["game"]);

const date = computed(() => new Intl.DateTimeFormat("en-GB").format(props.game.lastMoveAt));

const flipped = computed(() =>
	props.game.players.black.user?.id === targetId.value ? "flipped" : null
);
</script>

<template>
	<article :class="flipped">
		<div class="meta">
			<p>{{ date }}</p>
			<p>Rated</p>
		</div>
		<TheGameResult :game :flipped class="info" />
		<TheGameSide :player v-for="player of props.game.players" />
	</article>
</template>

<style scoped>
article {
	display: grid;
	grid-template-columns: 45% auto;
}
.meta {
	grid-column: 1 / -1;
	background-color: var(--p-surface-800);
	color: var(--p-surface-50);
	text-align: center;
	padding: 0.4rem;
	order: -3;
}

.info {
	grid-row: 2 / 4;
	order: -2;
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
	.meta {
		font-size: 1.2rem;
	}
}
</style>
