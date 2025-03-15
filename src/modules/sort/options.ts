import { ref } from "vue";

export const options = ref([
	{ key: "time-descending", label: "Latest games" },
	{ key: "time-ascending", label: "Oldest games" },
	{
		key: "best",
		label: "Best",
		selectable: false,
		children: [
			{
				key: "accuracy-descending",
				label: "Accuracy",
				selectable: false,
				children: [
					{ key: "accuracy-descending-target", label: "Best accuracy of target" },
					{ key: "accuracy-descending-opponent", label: "Best accuracy of opponent" },
					{ key: "accuracy-descending-combined", label: "Best accuracy combined" },
				],
			},
			{
				key: "acpl-ascending",
				label: "ACPL",
				selectable: false,
				children: [
					{ key: "acpl-ascending-target", label: "Best ACPL of target" },
					{ key: "acpl-ascending-opponent", label: "Best ACPL of opponent" },
					{ key: "acpl-ascending-combined", label: "Best ACPL combined" },
				],
			},
		],
	},
	{
		key: "worst",
		label: "Worst",
		selectable: false,
		children: [
			{
				key: "accuracy-ascending",
				label: "Accuracy",
				selectable: false,
				children: [
					{ key: "accuracy-ascending-target", label: "Worst accuracy of target" },
					{ key: "accuracy-ascending-opponent", label: "Worst accuracy of opponent" },
					{ key: "accuracy-ascending-combined", label: "Worst accuracy combined" },
				],
			},
			{
				key: "acpl-descending",
				label: "ACPL",
				selectable: false,
				children: [
					{ key: "acpl-descending-target", label: "Worst ACPL of target" },
					{ key: "acpl-descending-opponent", label: "Worst ACPL of opponent" },
					{ key: "acpl-descending-combined", label: "Worst ACPL combined" },
				],
			},
		],
	},
]);
