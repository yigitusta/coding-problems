function main (arr) {
  const sorted = arr.sort();
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i - 1] >= 0 && sorted[i] !== sorted[i - 1] + 1) {
      return sorted[i - 1] + 1;
    }
  }
  return sorted[sorted.length - 1] >= 0 ? sorted[sorted.length - 1] + 1 : 1;
}

module.exports = main;