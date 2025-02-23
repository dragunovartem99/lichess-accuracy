import { ref } from "vue"

export const tree = ref([
	{ key: "newer", label: "Newer" },
	{ key: "older", label: "Older" },
	{
		key: "good",
		label: "Good",
		selectable: false,
		children: [
			{
				key: "good-acpl",
				label: "ACPL",
				selectable: false,
				children: [
					{ key: "good-acpl-target", label: "Best target's ACPL", },
					{ key: "good-acpl-opponent", label: "Best opponent's ACPL", },
					{ key: "good-acpl-combined", label: "Best combined ACPL", },
				],
			},
			{
				key: "good-accuracy",
				label: "Accuracy",
				selectable: false,
				children: [
					{ key: "good-accuracy-target", label: "Best target's accuracy", },
					{ key: "good-accuracy-opponent", label: "Best opponent's accuracy", },
					{ key: "good-accuracy-both", label: "Best combined accuracy", },
				],
			},
		],
	},
]);
