<script setup lang="ts">
import type { GameStatus } from "@/types";

import { computed } from "vue";
const props = defineProps(["game", "flipped", "targetId"]);

const termination = computed(() => {
	const status: GameStatus = props.game.status;

	const options: Partial<Record<GameStatus, string>> = {
		mate: "Checkmate",
		resign: "Resignation",
		stalemate: "Stalemate",
		timeout: "Left the game",
		draw: "-",
		outoftime: "Out of time",
		cheat: "Anti-cheat",
		variantEnd: "Variant end",
	};

	return options[status] ?? status;
});

const result = computed(() =>
	props.game.winner
		? props.game.players[props.game.winner].user?.id === props.targetId.value
			? "Won"
			: "Lost"
		: "Draw"
);

const link = computed(
	() => `https://lichess.org/${props.game.id}` + (props.flipped ? "/black" : "")
);
</script>

<template>
	<figure class="result">
		<p>{{ result }}</p>
		<a :href="link" target="_blank">
			<html-diagram :fen="game.lastFen" :flipped colored></html-diagram>
		</a>
		<p>{{ termination }}</p>
	</figure>
</template>

<style scoped>
figure {
	display: flex;
	flex-direction: column;
}

p {
	flex: 1;
	display: grid;
	place-items: center;
	background-color: var(--p-surface-800);
	color: var(--p-surface-0);
	font-weight: 500;
	padding-block: 0.5em;
}

a:hover html-diagram {
	--diagram-light: var(--p-sky-100);
	--diagram-dark: var(--p-sky-300);
}

html-diagram {
	border-inline: 3px solid var(--p-surface-800);
	--diagram-light: var(--p-surface-200);
	--diagram-dark: var(--p-surface-400);
}

@media (min-width: 640px) {
	p {
		font-size: 1.2rem;
	}
}
</style>
