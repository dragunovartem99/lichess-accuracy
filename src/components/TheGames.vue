<script setup lang="ts">
import { sortedGames } from "@/modules/sort";
import TheGame from "./TheGame/TheGame.vue";
import TheSort from "./TheSort.vue";
</script>

<template>
	<section>
		<h2>Games</h2>
		<div class="controls">
			<TheSort />
		</div>
		<DynamicScroller
			v-if="sortedGames.length"
			:items="sortedGames"
			:min-item-size="310"
			class="games"
		>
			<template v-slot="{ item: game, index, active }">
				<DynamicScrollerItem :item="game" :active="active" :data-index="index">
					<div class="game"><TheGame :game :key="game.id" /></div>
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
}

.game {
	padding-bottom: 2rem;
}

.game > * {
	box-shadow: 0 10px 20px #00000022;
}

@media (min-width: 640px) {
	.games {
		margin-inline: -2.8rem;
	}
	.game {
		padding-inline: 2.8rem;
	}
}
</style>
