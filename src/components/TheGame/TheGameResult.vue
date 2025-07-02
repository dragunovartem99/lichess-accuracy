<script setup lang="ts">
import type { Game, GameStatus } from "@/types";

import { computed, type Ref } from "vue";

const props = defineProps<{
	game: Game;
	flipped: string | null;
	targetId: Ref<string>;
}>();

const termination = computed(() => {
	const status = props.game.status;

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

const result = computed(() => {
	const winner = props.game.winner;
	const hasWinner = Boolean(winner);

	if (hasWinner) {
		const isWinner = props.game.players[winner!].user?.id === props.targetId.value;
		return isWinner ? "Won" : "Lost";
	} else {
		return "Draw";
	}
});

const link = computed(() => {
	return `https://lichess.org/${props.game.id}` + (props.flipped ? "/black" : "");
});
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

html-diagram {
	border-inline: 3px solid var(--p-surface-800);
}

a:hover html-diagram {
	--diagram-light: var(--p-sky-100);
	--diagram-dark: var(--p-sky-300);
}

@media (min-width: 640px) {
	p {
		font-size: var(--font-2);
	}
}
</style>
