export function normalizeRequestOptions(rawOptions: any) {
	const options: any = {};

	for (const key in rawOptions) {
		if (rawOptions[key] !== null && rawOptions[key] !== "") {
			options[key] = rawOptions[key];
		}
	}

	return {
		...options,
		since: options.since?.getTime(),
		until: options.until?.getTime(),
	};
}
