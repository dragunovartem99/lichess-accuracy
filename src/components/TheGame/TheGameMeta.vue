<script setup lang="ts">
import type { Game } from "@/types";
import { computed } from "vue";
import { findVariantLabel } from "@/utils/findVariantLabel";

const props = defineProps<{ game: Game }>();

const date = computed(() => {
	return new Intl.DateTimeFormat("en-GB").format(props.game.lastMoveAt);
});

const datetime = computed(() => {
	return new Date(props.game.lastMoveAt).toISOString();
});

const seriousness = computed(() => {
	return props.game.rated ? "Rated" : "Casual";
});

const speed = computed(() => {
	return findVariantLabel(props.game.speed).toLowerCase();
});

const variant = computed(() => {
	return props.game.variant !== "standard" && findVariantLabel(props.game.perf).toLowerCase();
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
	padding: var(--space-0);
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
		font-size: var(--font-3);
		margin-bottom: var(--space-0);
	}
	.meta {
		font-size: var(--font-2);
	}
}
</style>
