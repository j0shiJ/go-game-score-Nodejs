const calculateMaxDraws = require('./logic');

test('valid input with maximum draws', () => {
  expect(calculateMaxDraws(10, 10, 20)).toBe(20);
});

test('invalid input due to order', () => {
  expect(calculateMaxDraws(20, 10, 10)).toBe(-1);
});

test('invalid input due to total points', () => {
  expect(calculateMaxDraws(10, 10, 21)).toBe(-1);
});

test('invalid input due to inconsistency', () => {
  expect(calculateMaxDraws(0, 0, 30)).toBe(-1);
});
