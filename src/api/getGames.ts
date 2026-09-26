import { options as request } from "@/modules/request";
import { apiUrl } from "@/static/apiUrl";
import type { Game } from "@/types";
import { normalizeRequestOptions } from "@/utils/normalizeRequestOptions";
import { readStream } from "@/utils/readStream";

type Options = {
	username: string;
	onGame: Function;
	onEnd: Function;
};

export async function getGames({ username, onGame, onEnd }: Options) {
	const params = new URLSearchParams({
		analysed: true,
		accuracy: true,
		lastFen: true,
		moves: false,
		...normalizeRequestOptions(request.value),
	});

	const stream = fetch(`${apiUrl}/games/user/${username}?${params.toString()}`, {
		headers: { Accept: "application/x-ndjson" },
	});

	const onMessage = (obj: Game) => onGame(obj);
	const onComplete = () => onEnd();

	stream.then(readStream(onMessage)).then(onComplete);
}
