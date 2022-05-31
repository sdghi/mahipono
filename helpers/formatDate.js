export default function formatDate(date) {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const [year, month, day] = date.split("-");

	const formatted = `${months[month - 1]} ${day}, ${year}`;

	return formatted;
}
