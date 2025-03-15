import { gameVariants } from "@/static/gameVariants";

export function findVariantLabel(value: string) {
	return gameVariants.find((variant) => variant.value === value)!.label;
}
