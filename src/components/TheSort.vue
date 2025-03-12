<script setup lang="ts">
import { isFetching } from "@/state/games";
import { options, userChoice } from "@/modules/sort";
import TreeSelect from "primevue/treeselect";
import IftaLabel from "primevue/iftalabel";
</script>

<template>
	<IftaLabel>
		<TreeSelect input-id="sort" :options v-model="userChoice" :disabled="isFetching" />
		<label for="sort">Sort</label>
	</IftaLabel>
</template>
