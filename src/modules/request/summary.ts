import { computed } from "vue";
import { options } from "./options";

export const summary = computed(() => {
	const rated = new Map([
		[true, "rated"],
		[false, "casual"],
	]).get(options.value.rated);

	const variants = options.value.perfType.length
		? "Variants: " + options.value.perfType.join(", ")
		: "All variants";

	const chunks = [
		options.value.max || "All",
		rated,
		"games",
		options.value.color && `as ${options.value.color}`,
	].filter((chunk) => !!chunk);

	return chunks.join(" ") + ". " + variants + ".";
});
