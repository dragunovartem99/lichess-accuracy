import { reactive } from 'vue'

export const analysis = reactive({
	target: "",
	games: [],

	setTarget(target: any) {
		this.target = target;
	},

	addGame(game: any) {
		this.games.push(game);
	},

	getTargetId() {
		return this.target.toLowerCase();
	}
});
