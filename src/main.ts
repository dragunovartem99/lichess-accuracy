// Vue
import { createApp } from "vue";
import App from "./App.vue";
import "./css/main.css";

// PrimeVue
import { useUI } from "./ui";

// HTMLDiagram
import { HTMLDiagram } from "html-diagram";

// Virtual Scroller
// @ts-ignore
import VueVirtualScroller from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

customElements.define("html-diagram", HTMLDiagram);

const app = createApp(App);

useUI(app);

app.use(VueVirtualScroller);
app.mount("#app");
