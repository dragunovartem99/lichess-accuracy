<script setup lang="ts">
import { request } from "@/modules/request";
import InputText from "primevue/inputtext";
</script>
<template>
	<section>
		<h2>Request</h2>
		<InputText type="number" v-model="request.max" />
		<p>Max: 250 games</p>
	</section>
</template>
