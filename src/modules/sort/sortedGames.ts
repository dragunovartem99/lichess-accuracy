import { computed } from "vue";
import * as games from "@/state/games";
import * as target from "@/state/target";

import { userChoice } from "./userChoice";
import { extractSortKind } from "@/utils/extractSortKind";
import { sortByMetric } from "@/utils/sortByMetric";
import { sortByTime } from "@/utils/sortByTime";

export const sortedGames = computed(() => {
	const [choice = "descending-time"] = Object.keys(userChoice.value);

	switch (choice) {
		case "time-descending":
		case "time-ascending":
			return sortByTime({
				...extractSortKind(choice),
				games: games.list,
			});
		default:
			return sortByMetric({
				...extractSortKind(choice),
				games: games.list,
				targetId: target.id.value,
			});
	}
});
