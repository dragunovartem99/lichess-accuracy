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
</script>

<template>
	<div class="player">
		<div class="head">
			<p class="name">{{ player.user?.name }}</p>
			<p class="rating">{{ rating }}</p>
			<p :class="ratingDiffDirection" v-if="ratingDiff">{{ ratingDiff }}</p>
		</div>
		<div class="analysis">
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
		<div class="acpl">
			<p>ACPL</p>
			<b>{{ player.analysis.acpl }}</b>
		</div>
	</div>
</template>

<style scoped>
.player {
	padding: 1rem;
	display: grid;
	grid-template-columns: 1fr auto;
	align-content: space-between;
	align-items: end;
}
.head,
.acpl {
	text-align: right;
}
.player.black .head,
.player.black .acpl {
	text-align: left;
}
.player.black .analysis {
	order: 1;
}
.head {
	grid-column: 1 / -1;
}
.name {
	font-weight: 600;
	font-size: 1.2rem;
}
b {
	font-size: 2.4rem;
	line-height: 1;
}
.positive {
	color: var(--p-green-600);
}
.negative {
	color: var(--p-red-600);
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
	content: "";
	display: block;
	width: 0.9rem;
	height: 0.9rem;
	border-radius: 50%;
}
.blunder .point {
	background-color: var(--p-red-700);
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
</style>
