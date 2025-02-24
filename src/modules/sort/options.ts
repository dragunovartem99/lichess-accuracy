import { ref } from "vue"

export const options = ref([
	{ key: "latest", label: "Latest games" },
	{ key: "oldest", label: "Oldest games" },
	{
		key: "best",
		label: "Best",
		selectable: false,
		children: [
			{
				key: "best-accuracy",
				label: "Accuracy",
				selectable: false,
				children: [
					{ key: "descending-accuracy-target", label: "Best accuracy of target", },
					{ key: "descending-accuracy-opponent", label: "Best accuracy of opponent", },
				],
			},
			{
				key: "best-acpl",
				label: "ACPL",
				selectable: false,
				children: [
					{ key: "ascending-acpl-target", label: "Best ACPL of target", },
					{ key: "ascending-acpl-opponent", label: "Best ACPL of opponent", },
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
				key: "worst-accuracy",
				label: "Accuracy",
				selectable: false,
				children: [
					{ key: "ascending-accuracy-target", label: "Worst accuracy of target", },
					{ key: "ascending-accuracy-opponent", label: "Worst accuracy of opponent", },
				],
			},
			{
				key: "worst-acpl",
				label: "ACPL",
				selectable: false,
				children: [
					{ key: "descending-acpl-target", label: "Worst ACPL of target", },
					{ key: "descending-acpl-opponent", label: "Worst ACPL of opponent", },
				],
			},
		],
	},
]);
