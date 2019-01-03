function main (list, k) {
  for (i = 0; i < list.length; i++) {
    const diff = k - list[i];
    if (list.indexOf(diff) !== -1 && list.indexOf(diff) !== i) {
      return true;
    }
  }
  return false;
}

module.exports = main;