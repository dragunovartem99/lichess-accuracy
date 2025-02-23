<script setup lang="ts">
import { computed } from "vue";
import { targetId } from "../analysis";
const props = defineProps(["game"]);

const date = computed(() => new Intl.DateTimeFormat("en-GB").format(props.game.lastMoveAt));
const rated = computed(() => (props.game.rated ? "Rated" : "Casual"));

const termination = computed(() => {
	return {
		outoftime: "time",
		mate: "mate",
		resign: "resign",
	}[props.game.status];
});

const result = computed(() => {
	const { winner } = props.game;

	if (!winner) return "Draw";

	return props.game.players[winner].user?.id === targetId.value
		? `Win (${termination.value})`
		: `Loss (${termination.value})`;
});

const flipped = computed(() => {
	return props.game.players.black.user?.id === targetId.value ? "flipped" : null;
});

const link = computed(() => {
	const gameLink = `https://lichess.org/${props.game.id}/`;
	const suffix = flipped.value ? "black" : "";

	return gameLink + suffix;
});
</script>

<template>
	<article>
		<div>
			<h2>{{ game.players.white.user?.name }}</h2>
			<p>{{ game.players.white.analysis.acpl }}</p>
		</div>
		<a class="game" :href="link">
			<p class="meta">{{ rated }}{{ game.clock && "" }}</p>
			<p class="result">{{ result }}</p>
			<html-diagram :fen="game.lastFen" :flipped></html-diagram>
			<p class="date">{{ date }}</p>
		</a>
		<div>
			<h2>{{ game.players.black.user?.name }}</h2>
			<p>{{ game.players.black.analysis.acpl }}</p>
		</div>
	</article>
</template>

<style scoped>
article {
	background-color: #f7f7f7;
	display: flex;
}
article > * {
	flex: 1;
}
.game {
	position: relative;
	display: block;
	text-decoration: none;
	max-width: 320px;
}
.meta {
	margin: 0;
}
.result {
	font-weight: bold;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background-color: rgba(0, 0, 0, 0.65);
	padding: 0.8rem 1.2rem;
	z-index: 1;
	margin: 0;
	color: #fff;
}
.date {
	margin: 0;
}
</style>
