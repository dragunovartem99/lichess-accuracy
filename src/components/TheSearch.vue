<script lang="ts" setup>
import { ref } from "vue";
import AutoComplete, { type AutoCompleteCompleteEvent } from "primevue/autocomplete";
import type { UserSuggestion } from "../types";
import Button from "primevue/button";
import InputGroup from "primevue/inputgroup";
import { getSuggestions } from "../api/suggestions";
import { getGames } from "../api/getGames";
import { results } from "../resultsSingleton";

const value = ref("");
const items = ref([]);

async function fetchUsers(event: AutoCompleteCompleteEvent) {
	const data = await getSuggestions(event.query);
	items.value = data.result.map((obj: UserSuggestion) => obj.name);
}

function search() {
	results.setTarget(value.value);

	const targetId = results.getTargetId();
	const onGame = (game: any) => results.pushGame(game);
	const onEnd = () => alert("Search ended");

	getGames({ targetId, onGame, onEnd });
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
				v-model="value"
				:suggestions="items"
				@complete="fetchUsers"
				force-selection
			/>
			<Button label="Analyze" @click="search" />
		</InputGroup>
	</div>
</template>
