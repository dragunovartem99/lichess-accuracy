import { computed, ref } from "vue";

export const name = ref("");
export const id = computed(() => name.value.toLowerCase());
