import { computed, ref } from "vue";

const name = ref("");
const id = computed(() => name.value.toLowerCase());

export { name, id };
