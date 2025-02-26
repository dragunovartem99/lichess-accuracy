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
		<div class="player">
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
		<div class="analysis">
			<template v-for="entry of ['blunder', 'mistake', 'inaccuracy']">
				<p class="point" :class="entry" v-if="player.analysis[entry]">
					{{ "•".repeat(player.analysis[entry]) }}
				</p>
			</template>
			<p class="accuracy">
				<span>acc. {{ player.analysis.accuracy }}%</span>
				<span class="point">•</span>
			</p>
		</div>
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
.negative {
	color: var(--p-red-700);
}
.acpl,
.analysis {
	margin-top: auto;
}
b {
	font-size: 2.4rem;
	line-height: 1;
}
.analysis p {
	line-height: 1.1rem;
	text-align: right;
}
.point {
	font-size: 3.5rem;
	line-break: anywhere;
	line-height: 0;
	letter-spacing: -0.4rem;
}
.blunder {
	color: var(--p-red-600);
}
.mistake {
	color: var(--p-yellow-500);
}
.inaccuracy {
	color: var(--p-cyan-500);
}
.accuracy {
	display: flex;
	justify-content: end;
	align-items: center;
}

@media (min-width: 640px) {
	.name {
		font-size: 1.4rem;
		margin-bottom: 0.1rem;
	}
	.rating {
		font-size: 1.2rem;
	}
	.analysis {
		font-size: 1.2rem;
	}
	.analysis p {
		line-height: 1.5rem;
	}
	.point {
		font-size: 4.5rem;
		letter-spacing: -0.55rem;
	}
}
</style>
