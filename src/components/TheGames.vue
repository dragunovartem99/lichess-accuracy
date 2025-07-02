<script setup lang="ts">
import { computed } from "vue";
import * as games from "@/state/games";
import { sortedGames } from "@/modules/sort";
import TheGame from "./TheGame/TheGame.vue";
import TheSort from "./TheSort.vue";

const items = computed(() => {
	return games.isFetching.value ? games.list : sortedGames.value;
});
</script>

<template>
	<section>
		<h2>Games</h2>
		<div class="controls">
			<TheSort />
		</div>
		<p v-if="!games.list.length">The game list is empty</p>
		<div v-else-if="games.list.length < 5" class="games">
			<div class="item" v-for="game of items">
				<TheGame :game :key="game.id" />
			</div>
		</div>
		<DynamicScroller v-else :items :min-item-size="310" class="games scroller">
			<template v-slot="{ item: game, index, active }">
				<DynamicScrollerItem :item="game" :active="active" :data-index="index">
					<div class="item"><TheGame :game :key="game.id" /></div>
				</DynamicScrollerItem>
			</template>
		</DynamicScroller>
	</section>
</template>

<style scoped>
.controls {
	margin-bottom: var(--space-6);
}

.games {
	border-bottom: none;
	margin-inline: calc(var(--space-4) * -1);
	scrollbar-gutter: stable both-edges;
}

.scroller {
	max-height: 1200px;
}

.item {
	padding-bottom: var(--space-6);
}

.item > * {
	box-shadow: 0 10px 20px #00000022;
}

@media (min-width: 640px) {
	.item {
		padding-inline: var(--space-3);
	}
}
</style>
