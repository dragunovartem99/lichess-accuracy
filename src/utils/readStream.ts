// https://gist.github.com/ornicar/a097406810939cf7be1df8ea30e94f3e#file-browser-ndjson-stream-reader-js

// Browser-side ND-JSON reader: calls `processLine` with each parsed element
// of a `fetch` response body.

export const readStream = (processLine: any) => (response: any) => {
	const stream = response.body.getReader();
	const matcher = /\r?\n/;
	const decoder = new TextDecoder();
	let buf = "";

	const loop = () =>
		stream.read().then(({ done, value }: any) => {
			if (done) {
				if (buf.length > 0) processLine(JSON.parse(buf));
				return undefined;
			} else {
				const chunk = decoder.decode(value, {
					stream: true,
				});
				buf += chunk;

				const parts = buf.split(matcher);
				buf = parts.pop()!;
				for (const i of parts.filter((p) => p)) processLine(JSON.parse(i));
				return loop();
			}
		});

	return loop();
};
