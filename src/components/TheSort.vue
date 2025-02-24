<script setup lang="ts">
import TreeSelect from "primevue/treeselect";
import IftaLabel from 'primevue/iftalabel';
import { ref } from "vue";
import { options } from "../modules/sort";

const value = ref({ latest: true });
</script>

<template>
	<div>
		<IftaLabel>
			<TreeSelect input-id="sort" :options v-model="value" />
			<label for="sort">Sort</label>
		</IftaLabel>
	</div>
</template>
