export function calcAverage({ games, targetId, key }: any) {
	return games.reduce((avg: number, game: any, _: number, arr: any) => {
		const color = game.players.white.user?.id === targetId ? "white" : "black";
		return avg + game.players[color].analysis[key] / arr.length;
	}, 0);
}

