<script setup lang="ts">
import { computed } from "vue";
import { targetId } from "../../store";
const props = defineProps(["game", "flipped"]);

const termination = computed(() => {
	// https://github.com/lichess-org/scalachess/blob/0a7d6f2c63b1ca06cd3c958ed3264e738af5c5f6/src/main/scala/Status.scala#L16-L28
	const options = {
		mate: "Checkmate",
		resign: "Resignation",
		outoftime: "Out of time",
		stalemate: "Stalemate",
		draw: "-",
	};

	return options[props.game.status as keyof typeof options] ?? props.game.status;
});

const result = computed(() => {
	const { winner } = props.game;

	return winner
		? props.game.players[winner].user?.id === targetId.value
			? "Victory"
			: "Defeat"
		: "Draw";
});

const link = computed(() => {
	const gameLink = `https://lichess.org/${props.game.id}`;
	const suffix = props.flipped ? "/black" : "";
	return gameLink + suffix;
});
</script>

<template>
	<figure>
		<p>{{ termination }}</p>
		<a :href="link" target="_blank">
			<html-diagram :fen="game.lastFen" :flipped :key="game.id"></html-diagram>
		</a>
		<p>{{ result }}</p>
	</figure>
</template>

<style scoped>
a {
	position: relative;
	display: block;
	text-decoration: none;
	color: inherit;
}
html-diagram {
	border-inline: 3px solid var(--p-surface-800);
}
p {
	text-align: center;
	background-color: var(--p-surface-800);
	color: var(--p-surface-100);
	font-weight: 500;
	padding-block: 0.3em;
}
@media (min-width: 640px) {
	p {
		font-size: 1.2rem;
		padding-block: 0.6em;
	}
}
</style>
