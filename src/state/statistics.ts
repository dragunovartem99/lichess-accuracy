import type { Game } from "@/types";
import { computed, reactive } from "vue";
import * as games from "./games";

const total = reactive({ accuracy: 0, acpl: 0, inaccuracy: 0, mistake: 0, blunder: 0 });

const calcAverage = (metric: string) => total[metric] / games.list.length || 0;

const average = computed(() => ({
	accuracy: calcAverage("accuracy"),
	acpl: calcAverage("acpl"),
	inaccuracy: calcAverage("inaccuracy"),
	mistake: calcAverage("mistake"),
	blunder: calcAverage("blunder"),
}));

function count({ game, targetId }: { game: Game; targetId: string }) {
	const color = game.players.white.user?.id === targetId ? "white" : "black";
	Object.keys(total).forEach((metric) => (total[metric] += game.players[color].analysis[metric]));
}

function clear() {
	Object.keys(total).forEach((metric) => (total[metric] = 0));
}

export { average, count, clear };
