<script lang="ts" setup>
import { ref } from "vue";
import AutoComplete, { type AutoCompleteCompleteEvent } from "primevue/autocomplete";
import type { UserSuggestion } from "../types";
import Button from "primevue/button";
import InputGroup from "primevue/inputgroup";
import { getSuggestions } from "../api/suggestions";

const value = ref("");
const items = ref([]);

async function fetchUsers(event: AutoCompleteCompleteEvent) {
	const data = await getSuggestions(event.query);
	items.value = data.result.map((obj: UserSuggestion) => obj.name);
}

function search() {
	console.log(value.value);
}
</script>

<template>
	<div>
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
