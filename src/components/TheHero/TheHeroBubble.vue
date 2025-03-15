<script setup lang="ts">
defineProps(["bubble"]);
</script>

<template>
	<div class="bubble">
		<b :class="bubble.class">{{ bubble.metric }}</b>
		<span v-for="line of bubble.lines">{{ line }}</span>
	</div>
</template>

<style scoped>
.bubble {
	aspect-ratio: 1/1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: var(--font-0);
}

.bubble::before {
	content: "";
	position: absolute;
	inset: 0;
	background-color: var(--bubble-bg);
	border-radius: 50%;
	animation: float-1 4s linear infinite;
	box-shadow: 0 0 25px #00000011;
	animation: var(--bubble-animation);
}
b,
span {
	z-index: 1;
	color: var(--bubble-text);
}
b {
	font-size: 2.8rem;
}
@media (min-width: 480px) {
	.bubble {
		font-size: var(--font-1);
	}
	b {
		font-size: 3.2rem;
	}
}
</style>
