// HTMLDiagram
import { HTMLDiagram } from "html-diagram";
// Vue
import { createApp } from "vue";

import "./css/main.css";

// Virtual Scroller
import VueVirtualScroller from "vue-virtual-scroller";

import App from "./App.vue";
// PrimeVue
import { useUI } from "./ui";

import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

customElements.define("html-diagram", HTMLDiagram);

const app = createApp(App);

useUI(app);

app.use(VueVirtualScroller);
app.mount("#app");
