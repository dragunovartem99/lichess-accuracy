import { ref } from "vue";

export const options = ref({
	max: "",
	perfType: ["blitz", "rapid", "classical"],
	vs: "",
	rated: null,
	color: null,
	since: null,
	until: null,
});
