<script setup lang="ts">
import type { Game, User } from "@/types";
import type { AutoCompleteCompleteEvent } from "primevue/autocomplete";

import AutoComplete from "primevue/autocomplete";
import Button from "primevue/button";
import InputGroup from "primevue/inputgroup";

import { ref, watch } from "vue";
import { setTarget, addGame, clearGames } from "@/state/data";
import { getSuggestions } from "@/api/getSuggestions";
import { getGames } from "@/api/getGames";

const username = ref("");
const suggestions = ref([]);
const isFetching = ref(false);

watch(isFetching, (newValue) => {
	if (newValue) {
		clearGames();
		fetchGames();
	}
});

function search() {
	setTarget(username.value);
	isFetching.value = true;
}

async function fetchSuggestions(event: AutoCompleteCompleteEvent) {
	if (event.query.length < 3) {
		return; // API limit
	}

	const data = await getSuggestions(event.query);
	suggestions.value = data.result.map((obj: User) => obj.name);
}

function fetchGames() {
	const onGame = (game: Game) => addGame(game);
	const onEnd = () => (isFetching.value = false);
	getGames({ username: username.value, onGame, onEnd });
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
				placeholder="target"
				v-model="username"
				@complete="fetchSuggestions"
				:suggestions
				force-selection
			/>
			<Button label="Analysis" @click="search" :loading="isFetching" />
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
