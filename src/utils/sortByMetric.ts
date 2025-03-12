import type { Color, Game, Analysis, SortSide, SortOrder } from "@/types";

type Options = {
	kind: keyof Analysis;
	order: SortOrder;
	side: SortSide;
	targetId: string;
	games: Game[];
};

function sortByMetricCombined({ games, kind: metric, order }: Options) {
	return [...games].sort((a: Game, b: Game) => {
		const sumA = a.players.white.analysis[metric] + a.players.black.analysis[metric];
		const sumB = b.players.white.analysis[metric] + b.players.black.analysis[metric];

		if (order === "ascending") {
			return sumA - sumB;
		} else {
			return sumB - sumA;
		}
	});
}

function sortByMetricIndividual({ games, targetId, side, kind: metric, order }: Options) {
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
		} else {
			return b.players[colorB!].analysis[metric] - a.players[colorA!].analysis[metric];
		}
	});
}

export function sortByMetric(options: Options) {
	if (options.side === "combined") {
		return sortByMetricCombined(options);
	} else {
		return sortByMetricIndividual(options);
	}
}
