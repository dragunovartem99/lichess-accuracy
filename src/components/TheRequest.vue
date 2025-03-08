<script setup lang="ts">
import { request, requestSummary } from "@/modules/request";
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Select from "primevue/select";

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
		<p style="margin-bottom: 1rem">{{ requestSummary }}</p>
		<p>
			<label>
				Game limit:
				<InputText step="25" type="number" v-model="request.max" />
			</label>
		</p>
		<p>
			<label>
				Opponent:
				<InputText v-model="request.vs" />
			</label>
		</p>
		<p>
			<label>
				Rated:
				<Select
					placeholder="Rated and Casual"
					:options="rated"
					v-model="request.rated"
					option-label="label"
					option-value="value"
					:show-clear="true"
				/>
			</label>
		</p>
		<p>
			<label>
				Color:
				<Select
					placeholder="White and Black"
					:options="color"
					v-model="request.color"
					option-label="label"
					option-value="value"
					:show-clear="true"
				/>
			</label>
		</p>
	</section>
</template>
