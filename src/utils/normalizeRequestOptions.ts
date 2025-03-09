export function normalizeRequestOptions(rawOptions: any) {
	const options: any = {};

	for (const [key, value] of Object.entries(rawOptions)) {
		if ([null, ""].includes(value)) {
			continue;
		}

		if (value instanceof Date) {
			options[key] = value.getTime();
			continue;
		}

		options[key] = value;
	}

	return options;
}
