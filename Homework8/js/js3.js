const arrResult = [2, 3, 3, 2, 5, 6, 4, 3].reduce((sum, current, index) => {
  if (sum < 10) {
    indexElem = index + 1;
    return sum + current;
  }
});

console.log(indexElem);