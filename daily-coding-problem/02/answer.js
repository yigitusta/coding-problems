function main(input) {
  return input.map((v, i) => {
    return input.reduce((prev, cur, j) => {
      return i === j ? prev : prev *= cur;
    }, 1);
  });
}

module.exports = main;