import type { Game, User } from "@/types";

import { games } from "@/state/games";
import { getGames } from "@/api/getGames";
import { getSuggestions } from "@/api/getSuggestions";

export function fetchGames(username: string) {
	games.isFetching = true;

	getGames({
		username,
		onGame: (game: Game) => {
			games.add(game);
		},
		onEnd: () => (games.isFetching = false),
	});
}

export function fetchSuggestions(username: string) {
	if (username?.length < 3) {
		return []; // API
	}

	return getSuggestions(username).then((data) => data.result.map((obj: User) => obj.name));
}
