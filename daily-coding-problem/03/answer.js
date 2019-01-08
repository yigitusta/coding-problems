const Node = require('./node');

function serialize(root) {
  if (root === null) {
    return "#";
  }
  const left = serialize(root.left);
  const right = serialize(root.right);
  return `${root.val} ${left} ${right}`;
}

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