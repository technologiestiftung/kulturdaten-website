import { Event } from "../api/client/models/Event";
import { getStartDateAsISO } from "./events";

const mockEvent: Event = {
	type: "type.Event",
	identifier: "my-mock-event",
	metadata: {
		created: "2021-01-01T13:03:19.989Z",
		updated: "2021-01-01T13:03:19.989Z",
	},
	schedule: {
		startDate: "2021-01-01",
		startTime: "12:53:12",
	},
};

describe(getStartDateAsISO.name, () => {
	test("returns correct date string", async () => {
		const actual = await getStartDateAsISO(mockEvent);
		expect(actual).toBe("2021-01-01T12:53:12");
	});
});
