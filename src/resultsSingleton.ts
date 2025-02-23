import { reactive } from 'vue'

export const results = reactive({
	target: "",
	games: [],

	setTarget(target: any) {
		this.target = target;
	},

	pushGame(game: any) {
		this.games.push(game);
	},

	getTargetId() {
		return this.target.toLowerCase();
	}
});
