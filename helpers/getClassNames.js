export default function getClassNames(initial, options) {
	let classNames = [initial];
	Object.keys(options).map((key) => {
		if (options[key]) {
			classNames.push(`${initial}--${key}-${options[key]}`);
		}
	});

	return classNames.join(" ");
}
