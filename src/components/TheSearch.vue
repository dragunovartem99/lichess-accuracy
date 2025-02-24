<script lang="ts" setup>
import { ref } from "vue";
import AutoComplete, { type AutoCompleteCompleteEvent } from "primevue/autocomplete";
import type { UserSuggestion } from "../types";
import Button from "primevue/button";
import InputGroup from "primevue/inputgroup";
import { getSuggestions } from "../api/suggestions";
import { getGames } from "../api/getGames";

import { setTarget, addGame, targetId, clearGames } from "../store";

const value = ref("");
const items = ref([]);
const loading = ref(false);

async function fetchUsers(event: AutoCompleteCompleteEvent) {
	const data = await getSuggestions(event.query);
	items.value = data.result.map((obj: UserSuggestion) => obj.name);
}

function search() {
	setTarget(value.value);
	clearGames();

	loading.value = true;
	const onGame = (game: any) => addGame(game);
	const onEnd = () => loading.value = false;

	getGames({ targetId: targetId.value, onGame, onEnd });
}
</script>

<template>
	<div>
		<hgroup>
			<h1>Lichess Accuracy</h1>
			<p>of</p>
		</hgroup>
		<InputGroup>
			<AutoComplete
				placeholder="target username"
				v-model="value"
				:suggestions="items"
				@complete="fetchUsers"
				force-selection
			/>
			<Button label="Analysis" @click="search" :loading />
		</InputGroup>
	</div>
</template>

<style>
hgroup {
	display: flex;
	align-items: baseline;
	gap: 0.5rem;
	margin-bottom: 1rem;
}

hgroup > * {
	font-size: 2rem;
	margin: 0;
}
</style>
