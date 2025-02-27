import type { Game } from "@/types";
import { readStream } from "@/utils/readStream";

type Options = {
	username: string;
	onGame: Function;
	onEnd: Function;
};

export async function getGames({ username, onGame, onEnd }: Options) {
	const stream = fetch(
		`https://lichess.org/api/games/user/${username}?max=250&moves=false&lastFen=true&analysed=true&accuracy=true`,
		{ headers: { Accept: "application/x-ndjson" } }
	);

	const onMessage = (obj: Game) => onGame(obj);
	const onComplete = () => onEnd();

	stream.then(readStream(onMessage)).then(onComplete);
}
