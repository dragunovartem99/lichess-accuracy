<script setup lang="ts">
import { ref } from "vue";
import { fetchGames, fetchSuggestions } from "@/modules/fetch";
import { isFetching } from "@/state/games";

import AutoComplete from "primevue/autocomplete";
import Button from "primevue/button";
import InputGroup from "primevue/inputgroup";

const username = ref("");
const suggestions = ref([]);

const search = () => username.value && fetchGames(username.value);
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
	gap: var(--space-0);
	margin-bottom: var(--space-0);
}
hgroup > * {
	font-size: var(--font-5);
	text-wrap: nowrap;
}
@media (min-width: 480px) {
	hgroup {
		margin-bottom: var(--space-1);
	}
	hgroup > * {
		font-size: var(--font-6);
	}
}
</style>
