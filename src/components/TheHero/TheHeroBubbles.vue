<script setup lang="ts">
import TheHeroBubble from "./TheHeroBubble.vue";

import type { Analysis, Bubble } from "@/types";

import { computed } from "vue";
import * as games from "@/state/games";
import * as statisitics from "@/state/statistics";

const format = (metric: string) => {
	const value = statisitics.average.value[metric as keyof Analysis];
	return parseFloat(value.toFixed(1));
};

const bubbles = computed<Bubble[]>(() => [
	{ metric: games.list.length, lines: ["games analyzed"] },
	{ metric: format("accuracy"), lines: ["avg. accuracy"], class: "percent" },
	{ metric: format("acpl"), lines: ["avg. ACPL"] },
	{ metric: format("inaccuracy"), lines: ["inaccuracies", "avg. per game"] },
	{ metric: format("mistake"), lines: ["mistakes", "avg. per game"] },
	{ metric: format("blunder"), lines: ["blunders", "avg. per game"] },
]);
</script>

<template>
	<TheHeroBubble v-for="bubble of bubbles" :bubble />
</template>

<style>
.bubble {
	width: 150px;
	position: absolute;
	--bubble-text: var(--p-surface-50);
}
.bubble:nth-of-type(1) {
	top: 2%;
	left: 2%;
	--bubble-text: var(--p-surface-600);
	--bubble-bg: var(--p-surface-100);
	--bubble-animation: float-1 4s linear infinite;
}
.bubble:nth-of-type(2) {
	left: 50%;
	top: 18%;
	z-index: 2;
	transform: translateX(-50%);
	--bubble-bg: var(--p-surface-600);
	--bubble-animation: float-2 3s linear infinite;
}
.bubble:nth-of-type(3) {
	top: 2%;
	right: 2%;
	--bubble-bg: var(--p-surface-700);
	--bubble-animation: float-3 6s linear infinite;
}
.bubble:nth-of-type(4) {
	bottom: 2%;
	left: 2%;
	--bubble-bg: var(--p-sky-500);
	--bubble-animation: float-2 5s linear infinite;
}
.bubble:nth-of-type(5) {
	bottom: 18%;
	left: 50%;
	transform: translateX(-50%);
	--bubble-bg: var(--p-yellow-500);
	--bubble-animation: float-3 4s linear infinite;
}
.bubble:nth-of-type(6) {
	bottom: 2%;
	right: 2%;
	--bubble-bg: var(--p-red-700);
	--bubble-animation: float-1 2s linear infinite;
}
@media (min-width: 480px) {
	.bubble {
		width: 175px;
	}
	.bubble:nth-of-type(2) {
		top: 2%;
	}
	.bubble:nth-of-type(5) {
		bottom: 2%;
	}
}
@media (min-width: 640px) {
	.bubble {
		width: 200px;
	}
}
</style>
