import type { Game, SortOrder } from "@/types";

type Options = {
	games: Game[];
	order: SortOrder;
};

export function sortByTime({ games, order }: Options) {
	return [...games].sort((a: Game, b: Game) => {
		if (order === "ascending") {
			return a.lastMoveAt - b.lastMoveAt;
		} else if (order === "descending") {
			return b.lastMoveAt - a.lastMoveAt;
		} else {
			return 0;
		}
	});
}
