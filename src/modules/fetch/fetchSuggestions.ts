import { getSuggestions } from "@/api/getSuggestions";
import type { User } from "@/types";

export function fetchSuggestions(username: string) {
	if (username?.length < 3) {
		return []; // API limitation
	}

	return getSuggestions(username).then((data) => data.result.map((obj: User) => obj.name));
}
