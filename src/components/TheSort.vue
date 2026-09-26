<script setup lang="ts">
import IftaLabel from "primevue/iftalabel";
import TreeSelect from "primevue/treeselect";

import { options, userChoice } from "@/modules/sort";
import { isFetching } from "@/state/games";
</script>

<template>
	<IftaLabel>
		<TreeSelect
			input-id="sort"
			:options
			v-model="userChoice"
			:disabled="isFetching"
		/>
		<label for="sort">Sort</label>
	</IftaLabel>
</template>
