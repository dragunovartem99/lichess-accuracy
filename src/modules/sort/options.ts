import { ref } from "vue"

export const options = ref([
	{ key: "latest", label: "Latest games" },
	{ key: "oldest", label: "Oldest games" },
	{
		key: "good",
		label: "Good",
		selectable: false,
		children: [
			{
				key: "good-accuracy",
				label: "Accuracy",
				selectable: false,
				children: [
					{ key: "good-accuracy-target", label: "Best accuracy of target", },
					{ key: "good-accuracy-opponent", label: "Best accuracy of opponent", },
					{ key: "good-accuracy-both", label: "Best accuracy of both", },
				],
			},
			{
				key: "good-acpl",
				label: "ACPL",
				selectable: false,
				children: [
					{ key: "good-acpl-target", label: "Best ACPL of target", },
					{ key: "good-acpl-opponent", label: "Best ACPL of opponent", },
					{ key: "good-acpl-combined", label: "Best ACPL of both", },
				],
			},
		],
	},
]);
