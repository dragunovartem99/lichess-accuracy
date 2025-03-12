import type { Game } from "@/types";
import { ref, shallowReactive } from "vue";

const isFetching = ref(false);
const list: Game[] = shallowReactive([]);

function add(game: Game) {
	list.push(game);
}

function clear() {
	list.splice(0);
}

export { isFetching, list, add, clear };
