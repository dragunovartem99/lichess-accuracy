<script setup lang="ts">
import TheSearch from "./TheSearch.vue";
import { statistics } from "../modules/statistics";
</script>

<template>
	<section class="hero">
		<div class="container-wide">
			<div class="ball">
				<b>{{ statistics.total }}</b>
				<span>games analyzed</span>
			</div>
			<div class="ball">
				<b>{{ statistics.accuracy.toFixed(1) }}%</b>
				<span>avg. accuracy</span>
			</div>
			<div class="ball">
				<b>{{ statistics.acpl.toFixed(1) }}</b>
				<span>avg. ACPL</span>
			</div>
			<div class="ball">
				<b>{{ statistics.inaccuracy.toFixed(1) }}</b>
				<span>inaccuracies</span>
				<span>avg. per game</span>
			</div>
			<div class="ball">
				<b>{{ statistics.mistake.toFixed(1) }}</b>
				<span>mistakes</span>
				<span>avg. per game</span>
			</div>
			<div class="ball">
				<b>{{ statistics.blunder.toFixed(1) }}</b>
				<span>blunders</span>
				<span>avg. per game</span>
			</div>
			<TheSearch />
		</div>
	</section>
</template>

<style scoped>
.hero {
	background-color: var(--p-surface-100);
}
.container-wide {
	margin-inline: auto;
	min-height: min(80dvh, 600px);
	position: relative;
	max-width: 1280px;
	display: grid;
	place-items: center;
}
.ball {
	width: 200px;
	height: 200px;
	border-radius: 50%;
	color: var(--p-surface-50);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
}
b {
	font-size: 3.2rem;
}
.ball:nth-of-type(1) {
	top: 0;
	left: 0;
	background-color: var(--p-surface-300);
	color: var(--p-surface-700);
}
.ball:nth-of-type(2) {
	top: 0;
	left: 45%;
	background-color: var(--p-surface-600);
}
.ball:nth-of-type(3) {
	top: 0;
	right: 0;
	background-color: var(--p-surface-700);
}
.ball:nth-of-type(4) {
	bottom: 0;
	left: 0;
	background-color: var(--p-cyan-500);
}
.ball:nth-of-type(5) {
	bottom: 0;
	left: 45%;
	background-color: var(--p-yellow-500);
}
.ball:nth-of-type(6) {
	bottom: 0;
	right: 0;
	background-color: var(--p-red-700);
}
</style>
