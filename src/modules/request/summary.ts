import { computed } from "vue";

import { gameVariants } from "@/static/gameVariants";
import { findVariantLabel } from "@/utils/findVariantLabel";

import { options } from "./options";

export const summary = computed(() => {
	const gameLimit = options.value.max || "All";

	const rated = new Map([
		[true, "rated"],
		[false, "casual"],
		[null, null],
	]).get(options.value.rated);

	const color = options.value.color && `as ${options.value.color}`;

	const chosenVariants = options.value.perfType;

	const variantsLabels = chosenVariants.map((chosen) => findVariantLabel(chosen).toLowerCase());

	const variants =
		chosenVariants.length === 0 || chosenVariants.length === gameVariants.length
			? "All variants"
			: "Variants: " + variantsLabels.join(", ");

	const chunks = [gameLimit, rated, "games", color].filter((chunk) => !!chunk).join(" ");

	return chunks + ". " + variants + ".";
});
