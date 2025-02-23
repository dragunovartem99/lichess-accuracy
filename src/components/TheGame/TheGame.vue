<script setup lang="ts">
defineProps(["game"]);
import TheGamePlayer from "./TheGamePlayer.vue";
import TheGameInfo from "./TheGameInfo.vue";
</script>

<template>
	<article>
		<TheGamePlayer :player="game.players.white" class="white" />
		<TheGameInfo :game />
		<TheGamePlayer :player="game.players.black" class="black" />
	</article>
</template>

<style scoped>
article {
	background-color: var(--p-surface-100);
	display: flex;
	border: 1px solid var(--p-surface-300);
}
article > * {
	flex: 1;
}
</style>
