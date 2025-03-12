// "../modules/sort/options.ts"

import type { SortSide, SortOrder } from "@/types";

export function extractSortKind(sortChoice: string) {
	const [kind, order, side] = sortChoice.split("-");
	return {
		kind,
		order: order as SortOrder,
		side: side as SortSide,
	};
}
