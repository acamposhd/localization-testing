import { sum, multiply } from "./operations";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("multyply 2 * 2 to equal 4", () => {
  expect(multiply(2, 2)).toBe(4);
});
