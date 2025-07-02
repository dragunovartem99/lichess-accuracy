<script setup lang="ts">
import type { Analysis } from "@/types";

defineProps<{ analysis: Analysis }>();

const failures: Array<keyof Analysis> = ["blunder", "mistake", "inaccuracy"];
</script>

<template>
	<div class="analysis">
		<template v-for="failure of failures">
			<p class="point" :class="failure" v-if="analysis[failure]">
				{{ "&bullet;".repeat(analysis[failure]) }}
			</p>
		</template>
		<p class="acpl">
			<span>acpl: {{ analysis.acpl }}</span>
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
	user-select: none;
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
.acpl {
	display: flex;
	justify-content: end;
	align-items: center;
}
@media (min-width: 640px) {
	.analysis {
		font-size: var(--font-2);
	}
	.analysis p {
		line-height: 1.5rem;
	}
	.point {
		font-size: 4.5rem;
		letter-spacing: -0.55rem;
	}
}
</style>
