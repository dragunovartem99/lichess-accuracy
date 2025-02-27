export async function getSuggestions(username: string) {
	const response = await fetch(
		`https://lichess.org/api/player/autocomplete?object=true&term=${username}`
	);

	return await response.json();
}
