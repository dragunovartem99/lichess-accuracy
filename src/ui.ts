import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";
import PrimeVue from "primevue/config";
import type { App } from "vue";

const colors = {
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
};

const myPreset = definePreset(Aura, {
	semantic: {
		primary: colors,
		colorScheme: {
			light: {
				surface: colors,
			},
		},
	},
});

export function useUI(app: App) {
	app.use(PrimeVue, {
		theme: {
			preset: myPreset,
			options: {
				darkModeSelector: false,
			},
		},
	});
}
