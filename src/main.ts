import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import "./style.css";
import App from "./App.vue";
import { definePreset } from "@primeuix/themes";
import { HTMLDiagram } from "html-diagram";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import VueVirtualScroller from "vue-virtual-scroller";

const myPreset = definePreset(Aura, {
	semantic: {
		primary: {
			50: "{zinc.50}",
			100: "{zinc.100}",
			200: "{zinc.200}",
			300: "{zinc.300}",
			400: "{zinc.400}",
			500: "{zinc.500}",
			600: "{zinc.600}",
			700: "{zinc.700}",
			800: "{zinc.800}",
			900: "{zinc.900}",
			950: "{zinc.950}",
		},
		colorScheme: {
			light: {
				surface: {
					0: "#ffffff",
					50: "{zinc.50}",
					100: "{zinc.100}",
					200: "{zinc.200}",
					300: "{zinc.300}",
					400: "{zinc.400}",
					500: "{zinc.500}",
					600: "{zinc.600}",
					700: "{zinc.700}",
					800: "{zinc.800}",
					900: "{zinc.900}",
					950: "{zinc.950}",
				},
			},
		},
	},
});

customElements.define("html-diagram", HTMLDiagram);

createApp(App)
	.use(PrimeVue, { theme: { preset: myPreset, options: { darkModeSelector: false } } })
	.use(VueVirtualScroller)
	.mount("#app");
