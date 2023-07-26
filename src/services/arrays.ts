// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getRandomIndex(items: any[]) {
	return Math.floor(Math.random() * items.length);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getRandomIndexWithout(items: any[], indexToAvoid: number) {
	let randomIndex = getRandomIndex(items);
	while (indexToAvoid === randomIndex) {
		randomIndex = getRandomIndex(items);
	}
	return randomIndex;
}
