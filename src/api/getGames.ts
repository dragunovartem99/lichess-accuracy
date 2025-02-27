import { readStream } from "./readStream";

type Options = {
	targetId: string;
	onGame: Function;
	onEnd: Function;
};

export async function getGames(options: Options) {
	const stream = fetch(
		`https://lichess.org/api/games/user/${options.targetId}?moves=false&lastFen=true&analysed=true&accuracy=true`,
		{
			headers: { Accept: "application/x-ndjson" },
		}
	);

	const onMessage = (obj: any) => options.onGame(obj);
	const onComplete = () => options.onEnd();

	stream.then(readStream(onMessage)).then(onComplete);
}
