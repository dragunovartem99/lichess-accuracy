<script setup lang="ts">
import TheBall from "./TheBall.vue";

import type { Analysis } from "@/types";

import { computed } from "vue";
import * as games from "@/state/games";
import { average } from "@/state/statistics";

const balls = computed(() => [
	{ num: games.list.length, lines: ["games analyzed"] },
	{ num: format("accuracy"), lines: ["avg. accuracy"], class: "percent" },
	{ num: format("acpl"), lines: ["avg. ACPL"] },
	{ num: format("inaccuracy"), lines: ["inaccuracies", "avg. per game"] },
	{ num: format("mistake"), lines: ["mistakes", "avg. per game"] },
	{ num: format("blunder"), lines: ["blunders", "avg. per game"] },
]);

const format = (metric: string) => average.value[metric as keyof Analysis].toFixed(1);
</script>

<template>
	<TheBall v-for="ball of balls" :content="ball" />
</template>

<style>
.ball {
	width: 200px;
	position: absolute;
	--ball-text: var(--p-surface-50);
}
.ball:nth-of-type(1) {
	top: 1%;
	left: 0;
	--ball-text: var(--p-surface-600);
	--ball-bg: var(--p-surface-100);
	--ball-animation: float-1 4s linear infinite;
}
.ball:nth-of-type(2) {
	top: 1%;
	left: 45%;
	--ball-bg: var(--p-surface-600);
	--ball-animation: float-2 3s linear infinite;
}
.ball:nth-of-type(3) {
	top: 1%;
	right: 0;
	--ball-bg: var(--p-surface-700);
	--ball-animation: float-3 6s linear infinite;
}
.ball:nth-of-type(4) {
	bottom: 1%;
	left: 0;
	--ball-bg: var(--p-sky-500);
	--ball-animation: float-2 8s linear infinite;
}
.ball:nth-of-type(5) {
	bottom: 1%;
	left: 45%;
	--ball-bg: var(--p-yellow-500);
	--ball-animation: float-3 4s linear infinite;
}
.ball:nth-of-type(6) {
	bottom: 1%;
	right: 0;
	--ball-bg: var(--p-red-700);
	--ball-animation: float-1 2s linear infinite;
}
@keyframes float-1 {
	0% {
		transform: translate(0px);
	}
	25% {
		transform: translate(-2px, 2px);
	}
	50% {
		transform: translate(-4px, 0px);
	}
	75% {
		transform: translate(-2px, -2px);
	}
	100% {
		transform: translate(0px);
	}
}

@keyframes float-2 {
	0% {
		transform: translate(0px);
	}
	25% {
		transform: translate(2px, -2px);
	}
	50% {
		transform: translate(2px, 0px);
	}
	75% {
		transform: translate(2px, 2px);
	}
	100% {
		transform: translate(0px);
	}
}

@keyframes float-3 {
	0% {
		transform: translate(0px);
	}
	25% {
		transform: translate(3px, -3px);
	}
	50% {
		transform: translate(3px, 0px);
	}
	75% {
		transform: translate(3px, 3px);
	}
	100% {
		transform: translate(0px);
	}
}
</style>
