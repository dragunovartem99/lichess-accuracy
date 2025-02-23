import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import "./style.css";
import App from "./App.vue";
import { definePreset } from "@primeuix/themes";
import { HTMLDiagram } from "html-diagram";
import { colorScheme } from "@primeuix/themes/aura/selectbutton";

const myPreset = definePreset(Aura, {
	semantic: {
		primary: {
			50: "{gray.50}",
			100: "{gray.100}",
			200: "{gray.200}",
			300: "{gray.300}",
			400: "{gray.400}",
			500: "{gray.500}",
			600: "{gray.600}",
			700: "{gray.700}",
			800: "{gray.800}",
			900: "{gray.900}",
			950: "{gray.950}",
		},
		colorScheme: {
			light: {
				surface: {
					0: "#ffffff",
					50: "{gray.50}",
					100: "{gray.100}",
					200: "{gray.200}",
					300: "{gray.300}",
					400: "{gray.400}",
					500: "{gray.500}",
					600: "{gray.600}",
					700: "{gray.700}",
					800: "{gray.800}",
					900: "{gray.900}",
					950: "{gray.950}",
				},
			},
		},
	},
});

customElements.define("html-diagram", HTMLDiagram);

createApp(App)
	.use(PrimeVue, { theme: { preset: myPreset, options: { darkModeSelector: false } } })
	.mount("#app");
