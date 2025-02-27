import type { Game } from "../types";
import { computed } from "vue";
import { _target, _games } from "./private";

const targetId = computed(() => _target.value.toLowerCase());
const games = computed(() => _games);

function addGame(game: Game) {
	_games.push(game);
}

function clearGames() {
	_games.splice(0);
}

function setTarget(newTarget: string) {
	_target.value = newTarget;
}

export { targetId, games, addGame, clearGames, setTarget };
