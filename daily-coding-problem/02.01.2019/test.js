const main = require('./index.js');

test('main function exists', () => {
  expect(typeof main).toBe('function');
});

describe.each([
  [[1, 2, 3, 4, 5], [120, 60, 40, 30, 24]],
  [[3, 2, 1], [2, 3, 6]]
])(
  'input = %s',
  (input, expected) => {
    test(`returns ${expected}`, () => {
      expect(main(input)).toEqual(expected);
    });
  },
);