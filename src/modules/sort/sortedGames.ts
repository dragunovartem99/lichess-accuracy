import type { Analysis, SortSide, SortOrder } from "@/types";

import { computed } from "vue";
import * as games from "@/state/games";
import * as target from "@/state/target";

import { sortByMetric } from "@/utils/sortByMetric";
import { userChoice } from "./userChoice";

function extractOptions(caseName: string) {
	const [order, metric, side] = caseName.split("-");
	return {
		order: order as SortOrder,
		metric: metric as keyof Analysis,
		side: side as SortSide,
	};
}

export const sortedGames = computed(() => {
	const [choice] = Object.keys(userChoice.value);

	switch (choice) {
		case undefined:
		case "newest":
			return games.list;
		case "oldest":
			return [...games.list].reverse();
		default:
			return sortByMetric({
				...extractOptions(choice),
				games: games.list,
				targetId: target.id.value,
			});
	}
});
