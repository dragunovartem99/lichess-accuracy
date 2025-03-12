import { computed } from "vue";
import { options } from "./options";
import { gameVariants } from "@/static/gameVariants";

export const summary = computed(() => {
	const rated = new Map([
		[true, "rated"],
		[false, "casual"],
	]).get(options.value.rated);

	const variants =
		!options.value.perfType.length || options.value.perfType.length === gameVariants.length
			? "All variants"
			: "Variants: " + options.value.perfType.join(", ");

	const chunks = [
		options.value.max || "All",
		rated,
		"games",
		options.value.color && `as ${options.value.color}`,
	];

	return chunks.filter((chunk) => chunk !== null).join(" ") + ". " + variants + ".";
});
