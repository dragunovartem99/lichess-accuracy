import type { Analysis } from "../../types";
import type { SortOrder, SortSide } from "./types";

import { computed } from "vue";
import { games, targetId } from "../../store";
import { userChoice } from "./userChoice";
import { sortByMetric } from "./sortByMetric";

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
			return games.value;
		case "oldest":
			return [...games.value].reverse();
		default:
			return sortByMetric({
				...extractOptions(choice),
				games: games.value,
				targetId: targetId.value,
			});
	}
});
