import { computed } from "vue";
import { games, targetId } from "../../store";
import { userChoice } from "./userChoice";
import { sortByMetric } from "./sortByMetric";

function getOptions(caseName: string) {
	const [order, metric, who] = caseName.split("-");
	return { order, metric, who };
}
export const sortedGames = computed(() => {
	const [choice] = Object.keys(userChoice.value);

	switch (choice) {
		case undefined:
		case "newest":
			return games.value;
		case "oldest":
			return games.value.toReversed();
		default:
			return sortByMetric({
				...getOptions(choice),
				games: games.value,
				targetId: targetId.value,
			});
	}
});
