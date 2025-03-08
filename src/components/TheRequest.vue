<script setup lang="ts">
import { request, requestSummary } from "@/modules/request";
import InputText from "primevue/inputtext";
import IftaLabel from "primevue/iftalabel";
</script>
<template>
	<section>
		<h2>Request</h2>
		<p style="margin-bottom: 1rem;">{{ requestSummary }}</p>
		<IftaLabel>
			<InputText input-id="max" type="number" v-model="request.max" />
			<label for="max">Max</label>
		</IftaLabel>
	</section>
</template>
