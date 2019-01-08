const main = require('./answer');

test('main function exists', () => {
  expect(typeof main).toBe('function');
});

describe.each([
  [[3, 4, -1, 1], 2],
  [[1, 2, 0], 3],
  [[0, 0, -1, -1], 1],
  [[3, 3, 3, 3], 4],
  [[7, 8, 9], 10],
  [[0, 2, 7, 10], 1]
])(
  'input = %s',
  (input, expected) => {
    test(`returns ${expected}`, () => {
      expect(main(input)).toBe(expected);
    });
  },
);