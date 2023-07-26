import { getRandomIndex, getRandomIndexWithout } from "./arrays";

const testItems = ["a", "b", "c"];

describe(getRandomIndex.name, () => {
	test("returns a valid index within the array’s bounds", () => {
		const randomIndex = getRandomIndex(testItems);
		expect(randomIndex).toBeGreaterThanOrEqual(0);
		expect(randomIndex).toBeLessThan(testItems.length);
	});
});

describe(getRandomIndexWithout.name, () => {
	test("returns a valid index that’s not the index to avoid", () => {
		const indexToAvoid = 0;
		const randomIndex = getRandomIndexWithout(testItems, indexToAvoid);
		expect(randomIndex).toBeGreaterThanOrEqual(0);
		expect(randomIndex).toBeLessThan(testItems.length);
		expect(randomIndex).not.toBe(indexToAvoid);
	});
});
