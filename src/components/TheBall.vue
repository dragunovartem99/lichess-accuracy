<script setup lang="ts">
defineProps(["content"]);
</script>

<template>
	<div class="ball">
		<b>{{ content.num }}</b>
		<span v-for="line of content.lines">{{ line }}</span>
	</div>
</template>

<style scoped>
.ball {
	aspect-ratio: 1/1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.ball::before {
	content: "";
	position: absolute;
	inset: 0;
	background-color: var(--ball-bg);
	border-radius: 50%;
    animation: float-1 4s linear infinite;
	box-shadow: 0 0 25px #00000011;
	animation: var(--ball-animation);
}
b, span {
	z-index: 1;
	color: var(--ball-text);
}

b {
	font-size: 3.2rem;
}
</style>
