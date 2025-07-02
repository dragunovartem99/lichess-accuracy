export type Bubble = {
	metric: number;
	lines: string[];
	class?: string;
};

export type SortSide = "target" | "opponent" | "combined";

export type SortOrder = "ascending" | "descending";

// Lichess Types

export type Color = "white" | "black";
export type User = { name: string; id: string };

export type GameStatus =
	| "created"
	| "started"
	| "aborted"
	| "mate"
	| "resign"
	| "stalemate"
	| "timeout"
	| "draw"
	| "outoftime"
	| "cheat"
	| "noStart"
	| "unknownFinish"
	| "variantEnd";

export type GameSpeed =
	| "ultraBullet"
	| "bullet"
	| "blitz"
	| "rapid"
	| "classical"
	| "correspondence";

export type PerfType =
	| "ultraBullet"
	| "bullet"
	| "blitz"
	| "rapid"
	| "classical"
	| "correspondence"
	| "chess960"
	| "crazyhouse"
	| "antichess"
	| "atomic"
	| "horde"
	| "kingOfTheHill"
	| "racingKings"
	| "threeCheck";

export type GameQuery = {
	since: number;
	until: number;
	max: number;
	vs: string;
	rated: boolean;
	perfType: PerfType;
	color: Color;
	analyzed: boolean;
	moves: boolean;
	accuracy: boolean;
	lastFen: boolean;
	sort: string;
};

export type Analysis = {
	inaccuracy: number;
	mistake: number;
	blunder: number;
	acpl: number;
	accuracy: number;
};

export type Player = {
	user?: User;
	rating: number;
	ratingDiff: number;
	provisional: boolean;
	aiLevel: number;
	analysis: Analysis;
};

export type Game = {
	id: string;
	rated: boolean;
	variant: string;
	speed: GameSpeed;
	perf: string;
	createdAt: number;
	lastMoveAt: number;
	status: GameStatus;
	players: {
		white: Player;
		black: Player;
	};
	winner?: Color;
	lastFen: string;
};
