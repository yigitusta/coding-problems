const Node = require('./node');

function serialize(root) {
  if (root === null) {
    return "#";
  }
  const left = serialize(root.left);
  const right = serialize(root.right);
  return `${root.val} ${left} ${right}`;
}

const x = (
  new Node('7',
    new Node('2',
      new Node('1')
    ),
    new Node('5',
      new Node('3'),
      new Node('8')
    )
  )
);

function deserialize(str) {
  let index = 0;
  const tokens = str.split(" ");
  function d() {
    if (index >= tokens.length || tokens[index] === "#") {
      index++;
      return null;
    }
    const node = new Node(tokens[index]);
    index++;

    node.left = d(tokens);
    node.right = d(tokens);
    return node;
  }
  return d();
}

module.exports = {
  serialize,
  deserialize
};