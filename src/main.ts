// Vue
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

// PrimeVue
import { registerPrimeVue } from "./registerPrimeVue";

// HTMLDiagram
import { HTMLDiagram } from "html-diagram";

// Virtual Scroller
// @ts-ignore
import VueVirtualScroller from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

customElements.define("html-diagram", HTMLDiagram);

const app = createApp(App);

registerPrimeVue(app);
app.use(VueVirtualScroller);
app.mount("#app");
