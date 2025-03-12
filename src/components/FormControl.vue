<script setup lang="ts">
defineProps<{ label: string }>();
</script>

<template>
	<p>
		<label>
			<span> {{ label }} </span>
			<slot />
		</label>
	</p>
</template>

<style scoped>
label {
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
}
span {
	font-weight: 600;
}
</style>
