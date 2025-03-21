<script setup lang="ts">
import { ref } from "vue";
import { options, summary } from "@/modules/request";
import { gameVariants } from "@/static/gameVariants";

import FormControl from "./Form/FormControl.vue";
import InputText from "primevue/inputtext";
import Select from "primevue/select";
import MultiSelect from "primevue/multiselect";
import DatePicker from "primevue/datepicker";

const variants = ref(gameVariants);

const rated = ref([
	{ label: "Rated", value: true },
	{ label: "Casual", value: false },
]);

const color = ref([
	{ label: "White", value: "white" },
	{ label: "Black", value: "black" },
]);
</script>

<template>
	<section>
		<h2>Request</h2>
		<p class="summary">{{ summary }}</p>
		<div class="controls">
			<div>
				<FormControl label="Game limit">
					<InputText
						placeholder="10000 (Lichess limit)"
						step="25"
						type="number"
						v-model="options.max"
						min="0"
						max="10000"
					/>
				</FormControl>
				<FormControl label="Rated">
					<Select
						placeholder="Rated and Casual"
						:options="rated"
						v-model="options.rated"
						option-label="label"
						option-value="value"
						:show-clear="true"
					/>
				</FormControl>
				<FormControl label="Color">
					<Select
						placeholder="White and Black"
						:options="color"
						v-model="options.color"
						option-label="label"
						option-value="value"
						:show-clear="true"
					/>
				</FormControl>
			</div>
			<div>
				<FormControl label="Opponent">
					<InputText v-model="options.vs" />
				</FormControl>
				<div class="dates">
					<FormControl label="From">
						<DatePicker
							placeholder="Registration"
							v-model="options.since"
							dateFormat="dd/mm/yy"
						/>
					</FormControl>
					<FormControl label="To">
						<DatePicker
							placeholder="Now"
							v-model="options.until"
							dateFormat="dd/mm/yy"
						/>
					</FormControl>
				</div>
				<FormControl label="Variant">
					<MultiSelect
						placeholder="All variants"
						:options="variants"
						v-model="options.perfType"
						option-label="label"
						option-value="value"
						:max-selected-labels="3"
					/>
				</FormControl>
			</div>
		</div>
	</section>
</template>

<style scoped>
.summary {
	margin-bottom: var(--space-4);
}
.controls {
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-4);
	padding: var(--space-4);
	background-color: var(--p-neutral-200);
	border-radius: var(--p-border-radius-md);
}
.controls > * {
	flex: 1;
	display: inherit;
	gap: inherit;
	flex-direction: column;
}
.dates {
	display: inherit;
	gap: inherit;
}
</style>
