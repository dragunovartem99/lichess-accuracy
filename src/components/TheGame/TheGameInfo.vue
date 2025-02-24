<script setup lang="ts">
import { computed } from "vue";
import { targetId } from "../../store";
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
		? `Won (${termination.value})`
		: `Lost (${termination.value})`;
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
	<a :href="link" target="_blank">
		<p class="meta">{{ rated }}{{ game.clock && "" }}</p>
		<p class="result">{{ result }}</p>
		<html-diagram :fen="game.lastFen" :flipped :key="game.id"></html-diagram>
		<p class="date">{{ date }}</p>
	</a>
</template>

<style scoped>
a {
	position: relative;
	display: block;
	text-decoration: none;
	color: inherit;
	max-width: 220px;
}
p {
	text-align: center;
}
.meta,
.date {
	background-color: var(--p-surface-700);
	color: var(--p-surface-100);
}
.meta {
	padding-top: 0.3rem;
}
.date {
	padding-bottom: 0.3rem;
}
.result {
	font-weight: 500;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background-color: #00000088;
	padding: 0.8rem 1.2rem;
	z-index: 1;
	color: var(--p-surface-100);
}
</style>
