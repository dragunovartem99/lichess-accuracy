export async function getSuggestions(query: string) {
	const response = await fetch(
		`https://lichess.org/api/player/autocomplete?object=true&term=${query}`
	);

	return await response.json();
}
