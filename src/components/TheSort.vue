<script setup lang="ts">
import TreeSelect from "primevue/treeselect";
import IftaLabel from "primevue/iftalabel";
import { options, userChoice } from "@/modules/sort";
</script>

<template>
	<div>
		<IftaLabel>
			<TreeSelect input-id="sort" :options v-model="userChoice" />
			<label for="sort">Sort</label>
		</IftaLabel>
	</div>
</template>
