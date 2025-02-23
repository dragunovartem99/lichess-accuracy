import { computed } from "vue";
import { _target, _games } from "./private";

export const targetId = computed(() => _target.value.toLowerCase());
export const games = computed(() => _games);

export function addGame(game: any) {
	_games.push(game);
}

export function setTarget(newTarget: string) {
	_target.value = newTarget;
}
