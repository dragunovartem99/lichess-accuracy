<script setup lang="ts">
import type { Player } from "@/types";

import { computed } from "vue";
import TheGameAnalysis from "./TheGameAnalysis.vue";

const props = defineProps<{ player: Player }>();

const link = computed(() => props.player.user && `https://lichess.org/@/${props.player.user.name}`);

const username = computed(() => props.player.user?.name || "Stockfish");

const strength = computed(() => {
	const rating = props.player.rating;
	if (rating) {
		return rating + (props.player.provisional ? "?" : "");
	} else {
		return "level " + props.player.aiLevel;
	}
});

const ratingDiffType = computed(() => (props.player.ratingDiff > 0 ? "positive" : "negative"));
</script>

<template>
	<div class="side">
		<div class="player">
			<a class="name" :href="link" target="_blank">
				{{ username }}
			</a>
			<p class="rating">
				{{ strength }}
				<span :class="ratingDiffType" v-if="player.ratingDiff">
					{{ player.ratingDiff }}
				</span>
			</p>
		</div>
		<div class="accuracy">
			<b class="percent">{{ player.analysis.accuracy }}</b>
			<p>accuracy</p>
		</div>
		<TheGameAnalysis :analysis="player.analysis" />
	</div>
</template>

<style scoped>
.side {
	display: grid;
	grid-template-columns: auto 1fr;
	flex-wrap: wrap;
	column-gap: var(--space-0);
	justify-content: space-between;
}
.player {
	grid-column: 1/-1;
}
.name {
	font-weight: 600;
	display: inline-flex;
	align-items: center;
	gap: 0.25em;
}
.name::before {
	content: "";
	border: 2px solid var(--p-neutral-800);
	background-color: var(--side-color);
	width: 0.8em;
	height: 0.8em;
	border-radius: 50%;
}
.positive {
	color: var(--p-green-600);
}
.positive::before {
	content: "+";
}
.negative {
	color: var(--p-red-700);
}
.accuracy,
.analysis {
	margin-top: auto;
}
.accuracy {
	font-size: var(--font-0);
}
b {
	font-size: 2.4rem;
	line-height: 1;
}
@media (min-width: 640px) {
	.name {
		font-size: var(--font-3);
		margin-bottom: 0.1rem;
	}
	.rating {
		font-size: var(--font-2);
	}
	.accuracy {
		font-size: var(--font-1);
	}
}
</style>
