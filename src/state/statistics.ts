import type { Analysis, Game } from "@/types";
import { computed, reactive } from "vue";
import * as games from "./games";

const total = reactive({ accuracy: 0, acpl: 0, inaccuracy: 0, mistake: 0, blunder: 0 });

const calcAverage = (metric: keyof Analysis) => total[metric] / games.list.length || 0;

export const average = computed(() => ({
	accuracy: calcAverage("accuracy"),
	acpl: calcAverage("acpl"),
	inaccuracy: calcAverage("inaccuracy"),
	mistake: calcAverage("mistake"),
	blunder: calcAverage("blunder"),
}));

export function count({ game, targetId }: { game: Game; targetId: string }) {
	const color = game.players.white.user?.id === targetId ? "white" : "black";
	// @ts-ignore
	Object.keys(total).forEach((metric) => (total[metric] += game.players[color].analysis[metric]));
}

export function clear() {
	// @ts-ignore
	Object.keys(total).forEach((metric) => (total[metric] = 0));
}
