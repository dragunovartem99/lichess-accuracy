import type { Game } from "@/types";
import { readStream } from "@/utils/readStream";
import { request } from "@/modules/request";

type Options = {
	username: string;
	onGame: Function;
	onEnd: Function;
};

export async function getGames({ username, onGame, onEnd }: Options) {
	const params = new URLSearchParams({
		analysed: "true",
		accuracy: "true",
		lastFen: "true",
		moves: "false",
		...request.value,
	});

	const stream = fetch(`https://lichess.org/api/games/user/${username}?${params.toString()}`, {
		headers: { Accept: "application/x-ndjson" },
	});

	const onMessage = (obj: Game) => onGame(obj);
	const onComplete = () => onEnd();

	stream.then(readStream(onMessage)).then(onComplete);
}
