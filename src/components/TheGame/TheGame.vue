<script setup lang="ts">
import { computed } from "vue";
import { targetId } from "../../store";
import TheGamePlayer from "./TheGamePlayer.vue";
import TheGameInfo from "./TheGameInfo.vue";

const props = defineProps(["game"]);

const date = computed(() => new Intl.DateTimeFormat("en-GB").format(props.game.lastMoveAt));

const flipped = computed(() =>
	props.game.players.black.user?.id === targetId.value ? "flipped" : null
);
</script>

<template>
	<article>
		<div class="meta">
			<p>{{ date }}</p>
			<p>Rated</p>
		</div>
		<TheGameInfo :game :flipped class="info" />
		<TheGamePlayer :player="game.players.white" class="white" />
		<TheGamePlayer :player="game.players.black" class="black" />
	</article>
</template>

<style scoped>
.meta {
	grid-column: 1 / -1;
	background-color: var(--p-surface-800);
	color: var(--p-surface-50);
	text-align: center;
	padding: 0.4rem;
}
article {
	display: grid;
	grid-template-columns: 45% auto;
}
article > * {
	flex: 1;
}
.white,
.black {
	padding: 0.5rem;
}
.white {
	border-bottom: 3px dashed var(--p-surface-300);
}
.info {
	grid-row: 2 / 4;
}
</style>
