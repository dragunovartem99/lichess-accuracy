<script setup lang="ts">
import { ref } from "vue";
import { options, summary } from "@/modules/request";
import { gameVariants } from "@/static/gameVariants";
import FormControl from "./FormControl.vue";
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
						placeholder="All games"
						step="25"
						type="number"
						v-model="options.max"
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
							placeholder="Account creation"
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
	margin-bottom: 1.6rem;
}
.controls {
	display: flex;
	column-gap: 1.6rem;
}
.controls > * {
	flex: 1;
	display: inherit;
	flex-direction: column;
	gap: 0.8rem;
}
.dates {
	display: inherit;
	gap: inherit;
}
</style>
