<script setup lang="ts">
import { computed } from "vue";
const props = defineProps(["game"]);
const date = computed(() => new Intl.DateTimeFormat("en-GB").format(props.game.lastMoveAt));
const rated = computed(() => props.game.rated ? "Rated" : "Casual")
</script>

<template>
	<article>
		<div class="game">
			{{ game.winner }}
			<p class="meta">{{ rated }}{{ game.clock && "" }}</p>
			<p class="result">{{ game.status }}</p>
			<p class="date">{{ date }}</p>
			<html-diagram :fen="game.lastFen"></html-diagram>
		</div>
	</article>
</template>

<style scoped>
article {
	max-width: 300px;

}
.game {
	position: relative;
	background-color: #aaa;
}
p {
	font-weight: bold;
	position: absolute;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: rgba(255, 255, 255, 0.75);
	padding: 0.4rem 0.8rem;
	z-index: 1;
	margin: 0;
	color: #000;
}
.meta {
	top: 15%;
}
.result {
	top: 50%;
}
.date {
	top: 85%;
}
</style>
