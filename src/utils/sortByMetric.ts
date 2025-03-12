import type { Color, Game, Analysis, SortSide, SortOrder } from "@/types";

type Options = {
	games: Game[];
	targetId: string;
	side: SortSide;
	metric: keyof Analysis;
	order: SortOrder;
};

export function sortByMetric({ games, targetId, side, metric, order }: Options) {
	return [...games].sort((a: Game, b: Game) => {
		let colorA: Color;
		let colorB: Color;

		if (side === "target") {
			colorA = a.players.white.user?.id === targetId ? "white" : "black";
			colorB = b.players.white.user?.id === targetId ? "white" : "black";
		} else if (side === "opponent") {
			colorA = a.players.white.user?.id !== targetId ? "white" : "black";
			colorB = b.players.white.user?.id !== targetId ? "white" : "black";
		}

		if (order === "ascending") {
			return a.players[colorA!].analysis[metric] - b.players[colorB!].analysis[metric];
		} else if (order === "descending") {
			return b.players[colorB!].analysis[metric] - a.players[colorA!].analysis[metric];
		} else {
			return 0;
		}
	});
}
