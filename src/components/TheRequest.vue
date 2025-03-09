<script setup lang="ts">
import { ref } from "vue";
import { options, summary } from "@/modules/request";
import { gameVariants } from "@/static/gameVariants";
import TheRequestControl from "./TheRequestControl.vue";
import InputText from "primevue/inputtext";
import Select from "primevue/select";
import MultiSelect from "primevue/multiselect";
import DatePicker from "primevue/datepicker";
import Fluid from "primevue/fluid";

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
		<p style="margin-bottom: 1rem">{{ summary }}</p>
		<div class="controls">
			<div>
				<TheRequestControl label="Variant">
					<MultiSelect
						placeholder="All variants"
						:options="variants"
						v-model="options.perfType"
						option-label="label"
						option-value="value"
						:max-selected-labels="3"
					/>
				</TheRequestControl>
				<TheRequestControl label="Rated">
					<Select
						placeholder="Rated and Casual"
						:options="rated"
						v-model="options.rated"
						option-label="label"
						option-value="value"
						:show-clear="true"
					/>
				</TheRequestControl>
				<TheRequestControl label="Color">
					<Select
						placeholder="White and Black"
						:options="color"
						v-model="options.color"
						option-label="label"
						option-value="value"
						:show-clear="true"
					/>
				</TheRequestControl>
			</div>
			<Fluid>
				<div class="dates">
					<TheRequestControl label="From">
						<DatePicker v-model="options.since" dateFormat="dd/mm/yy" />
					</TheRequestControl>
					<TheRequestControl label="To">
						<DatePicker v-model="options.until" dateFormat="dd/mm/yy" />
					</TheRequestControl>
				</div>
				<TheRequestControl label="Game limit">
					<InputText step="25" type="number" v-model="options.max" />
				</TheRequestControl>
				<TheRequestControl label="Opponent">
					<InputText v-model="options.vs" />
				</TheRequestControl>
			</Fluid>
		</div>
	</section>
</template>

<style scoped>
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
