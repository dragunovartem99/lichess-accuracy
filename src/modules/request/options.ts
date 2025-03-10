import { ref } from "vue";

export const options = ref({
	max: "",
	perfType: ["blitz", "rapid", "classical"],
	vs: "",
	rated: "",
	color: "",
	since: null,
	until: null,
});
