import { ref } from "vue";

export const options = ref({
	max: null,
	rated: null,
	color: null,
	vs: null,
	since: null,
	until: null,
	perfType: ["blitz", "rapid", "classical"],
});
