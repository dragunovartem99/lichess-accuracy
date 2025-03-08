<script setup lang="ts">
import { request, requestSummary } from "@/modules/request";
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Select from "primevue/select";
import MultiSelect from 'primevue/multiselect';

const variants = ref([
	{ label: "Ultrabullet", value: "ultraBullet" },
	{ label: "Bullet", value: "bullet" },
	{ label: "Blitz", value: "blitz" },
	{ label: "Rapid", value: "rapid" },
	{ label: "Classical", value: "classical" },
	{ label: "Correspondence", value: "correspondence" },
	{ label: "Chess960", value: "chess960" },
	{ label: "Crazyhouse", value: "crazyhouse" },
	{ label: "Antichess", value: "antichess" },
	{ label: "Atomic", value: "atomic" },
	{ label: "Horde", value: "horde" },
	{ label: "King Of The Hill", value: "kingOfTheHill" },
	{ label: "Racing Kings", value: "racingKings" },
	{ label: "Three Check", value: "threeCheck" },
]);

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
				Variant:
				<MultiSelect
					placeholder="All variants"
					:options="variants"
					v-model="request.perfType"
					option-label="label"
					option-value="value"
				/>
			</label>
		</p>
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
