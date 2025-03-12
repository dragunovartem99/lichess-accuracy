<script setup lang="ts">
import type { Player } from "@/types";

import { computed } from "vue";
import TheGameAnalysis from "./TheGameAnalysis.vue";

const props = defineProps<{ player: Player }>();

const rating = computed(() => props.player.rating + (props.player.provisional ? "?" : ""));
const ratingDiffType = computed(() => (props.player.ratingDiff > 0 ? "positive" : "negative"));

const link = computed(
	() => props.player.user?.id && "https://lichess.org/@/" + props.player.user.name
);
</script>

<template>
	<div class="side">
		<div class="player">
			<a class="name" :href="link" target="_blank">
				{{ player.user?.name }}
			</a>
			<p class="rating">
				{{ rating }}
				<span :class="ratingDiffType" v-if="player.ratingDiff">
					{{ player.ratingDiff }}
				</span>
			</p>
		</div>
		<div class="acpl">
			<b>{{ player.analysis.acpl }}</b>
			<p>ACPL</p>
		</div>
		<TheGameAnalysis :analysis="player.analysis" />
	</div>
</template>

<style scoped>
.side {
	display: grid;
	grid-template-columns: auto 1fr;
	flex-wrap: wrap;
	column-gap: 0.5rem;
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
.acpl,
.analysis {
	margin-top: auto;
}
.acpl {
	font-size: 0.8rem;
}
b {
	font-size: 2.4rem;
	line-height: 1;
}
@media (min-width: 640px) {
	.name {
		font-size: 1.4rem;
		margin-bottom: 0.1rem;
	}
	.rating {
		font-size: 1.2rem;
	}
	.acpl {
		font-size: 1rem;
	}
}
</style>
