function sumFor(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}

sumFor(500);

function sumRec(n) {
  return n === 1 ? 1 : n + sumRec(n - 1);
}

console.log(sumRec(500));
