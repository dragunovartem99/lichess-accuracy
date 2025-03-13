<script setup lang="ts">
import TheHeroBubble from "./TheHeroBubble.vue";

import type { Analysis } from "@/types";

import { computed } from "vue";
import * as games from "@/state/games";
import * as statisitics from "@/state/statistics";

const balls = computed(() => [
	{ num: games.list.length, lines: ["games analyzed"] },
	{ num: format("accuracy"), lines: ["avg. accuracy"], class: "percent" },
	{ num: format("acpl"), lines: ["avg. ACPL"] },
	{ num: format("inaccuracy"), lines: ["inaccuracies", "avg. per game"] },
	{ num: format("mistake"), lines: ["mistakes", "avg. per game"] },
	{ num: format("blunder"), lines: ["blunders", "avg. per game"] },
]);

const format = (metric: string) => statisitics.average.value[metric as keyof Analysis].toFixed(1);
</script>

<template>
	<TheHeroBubble v-for="ball of balls" :content="ball" />
</template>

<style>
.ball {
	width: 150px;
	position: absolute;
	--ball-text: var(--p-surface-50);
}
.ball:nth-of-type(1) {
	top: 2%;
	left: 2%;
	--ball-text: var(--p-surface-600);
	--ball-bg: var(--p-surface-100);
	--ball-animation: float-1 4s linear infinite;
}
.ball:nth-of-type(2) {
	left: 50%;
	top: 18%;
	z-index: 2;
	transform: translateX(-50%);
	--ball-bg: var(--p-surface-600);
	--ball-animation: float-2 3s linear infinite;
}
.ball:nth-of-type(3) {
	top: 2%;
	right: 2%;
	--ball-bg: var(--p-surface-700);
	--ball-animation: float-3 6s linear infinite;
}
.ball:nth-of-type(4) {
	bottom: 2%;
	left: 2%;
	--ball-bg: var(--p-sky-500);
	--ball-animation: float-2 5s linear infinite;
}
.ball:nth-of-type(5) {
	bottom: 18%;
	left: 50%;
	transform: translateX(-50%);
	--ball-bg: var(--p-yellow-500);
	--ball-animation: float-3 4s linear infinite;
}
.ball:nth-of-type(6) {
	bottom: 2%;
	right: 2%;
	--ball-bg: var(--p-red-700);
	--ball-animation: float-1 2s linear infinite;
}
@media (min-width: 480px) {
	.ball {
		width: 175px;
	}
	.ball:nth-of-type(2) {
		top: 2%;
	}
	.ball:nth-of-type(5) {
		bottom: 2%;
	}
}
@media (min-width: 640px) {
	.ball {
		width: 200px;
	}
}
</style>
