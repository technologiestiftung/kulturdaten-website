import { someFunction } from "./deleteMe";

describe(someFunction.name, () => {
  test("returns correct value", () => {
    const actual = someFunction();
    const expected = 42;
    expect(actual).toBe(expected);
  });
});
