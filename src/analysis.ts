import { ref, reactive, computed } from "vue";

const target = ref("");
const games = reactive([]);

export const addGame = (game: any) => games.push(game);
export const setTarget = (newTarget: string) => (target.value = newTarget);
export const targetId = computed(() => target.value.toLowerCase());

export const gamesDisplayed = computed(() => games);

function calcAverage({ targetId, games, key }) {
	return games.reduce((avg, game, _, arr) => {
		const color = game.players.white.user?.id === targetId ? "white" : "black";
		return avg + game.players[color].analysis[key] / arr.length;
	}, 0);
}

export const statistics = computed(() => {
	return {
		total: games.length,
		inaccuracy: calcAverage({ targetId: targetId.value, games, key: "inaccuracy" }),
		mistake: calcAverage({ targetId: targetId.value, games, key: "mistake" }),
		blunder: calcAverage({ targetId: targetId.value, games, key: "blunder" }),
		acpl: calcAverage({ targetId: targetId.value, games, key: "acpl" }),
		accuracy: calcAverage({ targetId: targetId.value, games, key: "accuracy" })
	}
});
