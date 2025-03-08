import { ref, computed } from "vue";

export const request = ref({
	perfType: ["blitz", "rapid", "classical"],
	max: "",
	vs: "",
	rated: "",
	color: "",
	since: null,
	until: null
});

export const requestSummary = computed(() => {
	let summary = "";

	if (request.value.max) {
		summary += `Max: ${request.value.max} games`;
	}

	return summary;
});
