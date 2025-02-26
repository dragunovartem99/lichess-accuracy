<script setup lang="ts">
import { computed } from "vue";

const props = defineProps(["game"]);

const date = computed(() => new Intl.DateTimeFormat("en-GB").format(props.game.lastMoveAt));
const datetime = computed(() => new Date(props.game.lastMoveAt).toISOString());
const seriousness = computed(() => (props.game.rated ? "Rated" : "Casual"));
const speed = computed(() => props.game.speed);

const variant = computed(() => {
	const standard = ["bullet", "blitz", "rapid", "classical"];

	if (!standard.includes(props.game.perf)) {
		return props.game.perf;
	}
});
</script>

<template>
	<div class="meta">
		<time :datetime>{{ date }}</time>
		<p>
			<span>{{ seriousness }}</span>
			<span>{{ speed }}</span>
			<span v-if="variant">{{ variant }}</span>
		</p>
	</div>
</template>

<style scoped>
.meta {
	background-color: var(--p-surface-800);
	color: var(--p-surface-50);
	text-align: center;
	padding: 0.4rem;
}
time {
	font-weight: 600;
}
span + span::before {
	content: "•";
	margin-inline: 0.3em;
}
@media (min-width: 640px) {
	time {
		font-size: 1.4rem;
		margin-bottom: 0.5rem;
	}
	.meta {
		font-size: 1.2rem;
	}
}
</style>
