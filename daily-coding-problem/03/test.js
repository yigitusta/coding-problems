const Node = require('./node');
const { serialize, deserialize } = require('./answer.js');

test('serialize function exists', () => {
  expect(typeof serialize).toBe('function');
});

test('deserialize function exists', () => {
  expect(typeof deserialize).toBe('function');
});

test(`Testing for the value of for the deserialized serialized binary tree:
          root
        /     \\
      left     right
    /
  left.left
`, () => {
  const node = (
    new Node('root',
      new Node('left',
        new Node('left.left')
      ),
      new Node('right')
    )
  );

  expect(
    deserialize(serialize(node)).left.left.val
  ).toBe('left.left');
});

test(`Testing for the value of 2 for the deserialized serialized binary tree:
          5
        /   \\
      3       31
    /   \\    /  \\
  -9      5 2     -17
`, () => {
  const node = (
    new Node('5',
      new Node('3',
        new Node('-9'),
        new Node('5')
      ),
      new Node('31',
        new Node('2'),
        new Node('-17')
      )
    )
  );

  expect(
    deserialize(serialize(node)).right.left.val
  ).toBe('2');
});

test(`serialize(deserialize(serialize(node))) equals to serialize(node) for:
          b
        /   \\
      d       o
    /   \\      \\
  a      k       p
`, () => {
  const node = (
    new Node('b',
      new Node('d',
        new Node('a'),
        new Node('k')
      ),
      new Node('o',
        null,
        new Node('p')
      )
    )
  );

  expect(
    serialize(deserialize(serialize(node)))
  ).toBe(serialize(node));
});