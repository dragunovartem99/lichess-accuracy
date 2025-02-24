import { computed } from "vue";
import { games, targetId } from "../../store";
import { userChoice } from "./userChoice";
import { sortByMetric } from "./sortByMetric";

function opts(caseName: string) {
	const [order, metric, who] = caseName.split("-");
	return { order, metric, who };
}
export const sortedGames = computed(() => {
	const [choice] = Object.keys(userChoice.value);

	switch (choice) {
		case "descending-accuracy-target":
		case "descending-accuracy-opponent":
		case "ascending-acpl-target":
		case "ascending-acpl-opponent":
			return sortByMetric({ ...opts(choice), games: games.value, targetId: targetId.value });
		case "oldest":
			return games.value.toReversed();
		default:
			return games.value;
	}
});
