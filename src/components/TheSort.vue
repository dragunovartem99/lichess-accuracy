<script setup lang="ts">
import TreeSelect from "primevue/treeselect";
import { ref } from "vue";
import { tree } from "../sort/tree";

const value = ref(null);

</script>

<template>
	<div>
		<TreeSelect placeholder="Sort games" :options="tree" v-model="value" />
	</div>
</template>
