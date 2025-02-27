import { computed } from "vue";
import { targetId, games } from "@/state/data";
import { calcAverage } from "./calcAverage";

export const statistics = computed(() => {
	const gameList = games.value;
	return {
		total: gameList.length,
		inaccuracy: calcAverage({
			key: "inaccuracy",
			targetId: targetId.value,
			games: games.value,
		}),
		mistake: calcAverage({
			key: "mistake",
			targetId: targetId.value,
			games: games.value,
		}),
		blunder: calcAverage({
			key: "blunder",
			targetId: targetId.value,
			games: games.value,
		}),
		acpl: calcAverage({
			key: "acpl",
			targetId: targetId.value,
			games: games.value,
		}),
		accuracy: calcAverage({
			key: "accuracy",
			targetId: targetId.value,
			games: games.value,
		}),
	};
});
