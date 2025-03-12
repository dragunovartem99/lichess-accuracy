<script setup lang="ts">
import { computed } from "vue";
import * as games from "@/state/games";
import { sortedGames } from "@/modules/sort";
import TheGame from "./TheGame/TheGame.vue";
import TheSort from "./TheSort.vue";
const items = computed(() => (games.isFetching.value ? games.list : sortedGames.value));
</script>

<template>
	<section>
		<h2>Games</h2>
		<div class="controls">
			<TheSort />
		</div>
		<DynamicScroller v-if="games.list.length" :items :min-item-size="310" class="games">
			<template v-slot="{ item: game, index, active }">
				<DynamicScrollerItem :item="game" :active="active" :data-index="index">
					<div class="game">
						<TheGame :game :key="game.id" />
					</div>
				</DynamicScrollerItem>
			</template>
		</DynamicScroller>
		<p v-else>The game list is empty</p>
	</section>
</template>

<style scoped>
.controls {
	margin-bottom: 2rem;
}

.games {
	border-bottom: none;
	margin-inline: -1.4rem;
	height: 100vh;
	scrollbar-gutter: stable both-edges;
}

.game {
	padding-bottom: 2rem;
}

.game > * {
	box-shadow: 0 10px 20px #00000022;
}

@media (min-width: 640px) {
	.game {
		padding-inline: 1.4rem;
	}
}
</style>
