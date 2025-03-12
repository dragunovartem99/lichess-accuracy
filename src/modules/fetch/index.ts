import type { Game, User } from "@/types";

import * as target from "@/state/target";
import * as games from "@/state/games";
import * as statistics from "@/state/statistics";

import { getGames } from "@/api/getGames";
import { getSuggestions } from "@/api/getSuggestions";

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

export function fetchSuggestions(username: string) {
	if (username?.length < 3) {
		return []; // API
	}

	return getSuggestions(username).then((data) => data.result.map((obj: User) => obj.name));
}
