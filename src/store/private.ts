import { ref, reactive } from "vue";
import type { Game } from "../types";

export const _target = ref("");
export const _games: Game[] = reactive([]);
