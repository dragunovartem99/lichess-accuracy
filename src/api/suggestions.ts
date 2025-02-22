export async function getSuggestions(query: string) {
	if (query.length < 3) return;

	const response = await fetch(
		`https://lichess.org/api/player/autocomplete?object=true&term=${query}`
	);

	return await response.json();
}
