<script setup lang="ts">
import type { Analysis } from "@/types";
defineProps<{ analysis: Analysis }>();

type FailureKeys = keyof Pick<Analysis, "blunder" | "mistake" | "inaccuracy">;
const failures: FailureKeys[] = ["blunder", "mistake", "inaccuracy"];
</script>

<template>
	<div class="analysis">
		<template v-for="failure of failures">
			<p class="point" :class="failure" v-if="analysis[failure]">
				{{ "&bullet;".repeat(analysis[failure]) }}
			</p>
		</template>
		<p class="accuracy">
			<span>acc</span>
			<span>{{ analysis.accuracy }}%</span>
			<span class="point">&bullet;</span>
		</p>
	</div>
</template>

<style scoped>
.analysis p {
	line-height: 1.1rem;
	text-align: right;
}
.point {
	font-size: 3.5rem;
	line-break: anywhere;
	line-height: 0;
	letter-spacing: -0.4rem;
}
.blunder {
	color: var(--p-red-600);
}
.mistake {
	color: var(--p-yellow-500);
}
.inaccuracy {
	color: var(--p-sky-500);
}
.accuracy {
	display: flex;
	justify-content: end;
	align-items: center;
}
.accuracy :first-child {
	margin-right: 0.3rem;
}
.accuracy :first-child::after {
	content: ".";
}
@media (min-width: 640px) {
	.analysis {
		font-size: 1.2rem;
	}
	.analysis p {
		line-height: 1.5rem;
	}
	.point {
		font-size: 4.5rem;
		letter-spacing: -0.55rem;
	}
	.accuracy :first-child::after {
		content: "uracy"; /* forgive me, Jesus */
	}
}
</style>
