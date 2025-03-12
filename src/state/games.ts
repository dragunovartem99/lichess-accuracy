import type { Game } from "@/types";
import { reactive } from "vue";

export const games = reactive({
	list: [],
	isFetching: false,

	add(game: Game) {
		this.list.push(game);
	},
});
