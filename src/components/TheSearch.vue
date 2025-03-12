<script setup lang="ts">
import type { AutoCompleteCompleteEvent } from "primevue/autocomplete";
import { ref } from "vue";
import { fetchGames, fetchSuggestions } from "@/modules/fetch";
import { isFetching } from "@/state/games";

import AutoComplete from "primevue/autocomplete";
import Button from "primevue/button";
import InputGroup from "primevue/inputgroup";

const username = ref("");
const suggestions = ref([]);

const search = () => fetchGames(username.value);
const suggest = async () => (suggestions.value = await fetchSuggestions(username.value));
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
				@complete="suggest"
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
