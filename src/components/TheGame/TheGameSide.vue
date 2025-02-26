<script setup lang="ts">
import { computed } from "vue";

const props = defineProps(["player"]);

const rating = computed(() => {
	const suffix = props.player.provisional ? "?" : "";
	return props.player.rating + suffix;
});

const ratingDiffDirection = computed(() => {
	return props.player.ratingDiff > 0 ? "positive" : "negative";
});

const ratingDiff = computed(() => {
	return ratingDiffDirection.value === "positive"
		? `+${props.player.ratingDiff}`
		: props.player.ratingDiff;
});

const link = computed(
	() => props.player.user?.id && "https://lichess.org/@/" + props.player.user.id
);
</script>

<template>
	<div class="side">
		<div>
			<a class="name" :href="link" target="_blank">
				{{ player.user?.name }}
			</a>
			<p class="rating">
				{{ rating }}
				<span :class="ratingDiffDirection" v-if="ratingDiff">{{ ratingDiff }}</span>
			</p>
		</div>
		<div class="acpl">
			<b>{{ player.analysis.acpl }}</b>
			<p>ACPL</p>
		</div>
		<div v-if="false" class="analysis">
			<p class="blunder" v-if="player.analysis.blunder">
				<span class="point" v-for="_ of player.analysis.blunder"></span>
			</p>
			<p class="mistake" v-if="player.analysis.mistake">
				<span class="point" v-for="_ of player.analysis.mistake"></span>
			</p>
			<p class="inaccuracy" v-if="player.analysis.inaccuracy">
				<span class="point" v-for="_ of player.analysis.inaccuracy"></span>
			</p>
			<p class="accuracy">
				<span class="point"></span><span>{{ player.analysis.accuracy }}%</span>accuracy
			</p>
		</div>
	</div>
</template>

<style scoped>
.side {
	display: flex;
	flex-direction: column;
}
.acpl {
	margin-top: auto;
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
b {
	font-size: 2.4rem;
	line-height: 1;
}
.positive {
	color: var(--p-green-600);
}
.negative {
	color: var(--p-red-700);
}

.analysis p {
	display: flex;
	align-items: center;
	gap: 0.25rem;
	min-height: 1.2rem;
	flex-wrap: wrap;
}
.black .analysis p {
	flex-direction: row-reverse;
}
.point {
	display: block;
	width: 0.9rem;
	height: 0.9rem;
	border-radius: 50%;
}
.blunder .point {
	background-color: var(--p-red-600);
}
.mistake .point {
	background-color: var(--p-yellow-500);
}
.inaccuracy .point {
	background-color: var(--p-cyan-500);
}
.accuracy .point {
	background-color: var(--p-neutral-700);
}
@media (min-width: 640px) {
	.name {
		font-size: 1.4rem;
		margin-bottom: 0.1rem;
	}
	.rating {
		font-size: 1.2rem;
	}
}
</style>
