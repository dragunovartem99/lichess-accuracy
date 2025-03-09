<script setup lang="ts">
defineProps<{ label: string }>();
</script>

<template>
	<p>
		<label>
			{{ label }}
			<slot />
		</label>
	</p>
</template>

<style scoped>
label {
	font-weight: 500;
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
}
</style>
