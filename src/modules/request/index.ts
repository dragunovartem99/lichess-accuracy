import { ref, computed } from "vue";

export const request = ref({
	max: "",
});

export const requestSummary = computed(() => {
	let summary = "";

	if (request.value.max) {
		summary += `Max: ${request.value.max} games`;
	}

	return summary;
});
