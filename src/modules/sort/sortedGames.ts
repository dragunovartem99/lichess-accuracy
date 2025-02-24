import { computed } from "vue";
import { games } from "../../store";
import { userChoice } from "./userChoice";

export const sortedGames = computed(() => {
	if (userChoice.value.latest) {
		return games.value;
	} else if (userChoice.value.oldest) {
		return games.value.toReversed();
	}
});
