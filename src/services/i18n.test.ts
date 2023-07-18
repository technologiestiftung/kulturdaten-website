import { loadMessages } from "./i18n";

describe(loadMessages.name, () => {
	test("loads German messages", async () => {
		const actual = await loadMessages("de");
		expect(actual).toBeDefined();
	});
	test("loads English messages", async () => {
		const actual = await loadMessages("en");
		expect(actual).toBeDefined();
	});
});
