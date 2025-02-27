import { ref, reactive, computed } from "vue";
import type { Game } from "@/types";

const _target = ref("");
const _games: Game[] = reactive([]);

export const targetId = computed(() => _target.value.toLowerCase());
export const games = computed(() => _games);

export function addGame(game: Game) {
	_games.push(game);
}

export function clearGames() {
	_games.splice(0);
}

export function setTarget(newTarget: string) {
	_target.value = newTarget;
}
