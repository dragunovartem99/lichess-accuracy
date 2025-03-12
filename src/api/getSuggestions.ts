import { apiUrl } from "@/static/apiUrl";

export async function getSuggestions(username: string) {
	//  @ts-ignore: boolean bla-bla-bla
	const params = new URLSearchParams({
		object: true,
		term: username,
	});

	const response = await fetch(`${apiUrl}/player/autocomplete?${params.toString()}`);

	return await response.json();
}
