import type { Game } from "@/types";

import * as target from "@/state/target";
import * as games from "@/state/games";
import * as statistics from "@/state/statistics";

import { getGames } from "@/api/getGames";

export function fetchGames(username: string) {
	games.isFetching.value = true;

	target.name.value = username;
	games.clear();
	statistics.clear();

	getGames({
		username,
		onGame: (game: Game) => {
			games.add(game);
			statistics.count({ game, targetId: target.id.value });
		},
		onEnd: () => (games.isFetching.value = false),
	});
}
