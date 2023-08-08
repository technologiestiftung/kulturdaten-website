import formatDate from "./dates";

describe(formatDate.name, () => {
	test("formats a string input with a German locale", () => {
		const actual = formatDate("2023-05-10T13:37:00", "de", { dateStyle: "full", timeStyle: "medium" });
		const expected = "Mittwoch, 10. Mai 2023 um 13:37:00";
		expect(actual).toBe(expected);
	});
	test("formats a string input with an English locale", () => {
		const actual = formatDate("2023-05-10T13:37:00", "en", { dateStyle: "full", timeStyle: "medium" });
		const expected = "Wednesday, May 10, 2023 at 1:37:00 PM";
		expect(actual).toBe(expected);
	});
	test("treats string and date inputs equally", () => {
		const dateString = "2023-05-10T13:37:00";
		const dateObject = new Date(dateString);
		const actualString = formatDate(dateString, "de", { dateStyle: "full", timeStyle: "full" });
		const actualObject = formatDate(dateObject, "de", { dateStyle: "full", timeStyle: "full" });
		expect(actualString).toBe(actualObject);
	});
});
