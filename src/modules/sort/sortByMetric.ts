export function sortByMetric({ games, targetId, who, metric, order }: any) {
	return games.toSorted((a: any, b: any) => {
		let colorA;
		let colorB;

		if (who === "target") {
			colorA = a.players.white.user?.id === targetId ? "white" : "black";
			colorB = b.players.white.user?.id === targetId ? "white" : "black";
		} else if (who === "opponent") {
			colorA = a.players.white.user?.id === targetId ? "black" : "white";
			colorB = b.players.white.user?.id === targetId ? "black" : "white";
		}

		if (order === "ascending") {
			return a.players[colorA!].analysis[metric] - b.players[colorB!].analysis[metric];
		} else if (order === "descending") {
			return b.players[colorB!].analysis[metric] - a.players[colorA!].analysis[metric];
		}
	});
}
