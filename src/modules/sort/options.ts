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
				key: "descending-accuracy",
				label: "Accuracy",
				selectable: false,
				children: [
					{ key: "descending-accuracy-target", label: "Best accuracy of target", },
					{ key: "descending-accuracy-opponent", label: "Best accuracy of opponent", },
				],
			},
			{
				key: "ascending-acpl",
				label: "ACPL",
				selectable: false,
				children: [
					{ key: "ascending-acpl-target", label: "Best ACPL of target", },
					{ key: "ascending-acpl-opponent", label: "Best ACPL of opponent", },
				],
			},
		],
	},
]);
