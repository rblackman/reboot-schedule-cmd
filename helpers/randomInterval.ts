export default function randomInterval(range: number) {
	const min = 0;
	const max = range;
	return Math.floor(Math.random() * (max - min + 1) + min);
}
