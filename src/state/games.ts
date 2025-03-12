import type { Game } from "@/types";
import { ref, shallowReactive } from "vue";

export const isFetching = ref(false);
export const list: Game[] = shallowReactive([]);

export function add(game: Game) {
	list.push(game);
}

export function clear() {
	list.splice(0);
}
