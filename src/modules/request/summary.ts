import { computed } from "vue";
import { options } from "./options";
import { gameVariants } from "@/static/gameVariants";

export const summary = computed(() => {
	const gameLimit = options.value.max || "All";

	const rated = new Map([
		[true, "rated"],
		[false, "casual"],
		[null, null],
	]).get(options.value.rated);

	const color = options.value.color && `as ${options.value.color}`;

	const chosenVariants = options.value.perfType;

	const variantsLabels = chosenVariants.map((chosen) => {
		const variant = gameVariants.find((variant) => variant.value === chosen)!;
		return variant.label.toLowerCase();
	});

	const variants =
		!chosenVariants.length || chosenVariants.length === gameVariants.length
			? "All variants"
			: "Variants: " + variantsLabels.join(", ");

	const chunks = [gameLimit, rated, "games", color].filter((chunk) => !!chunk).join(" ");

	return chunks + ". " + variants + ".";
});
