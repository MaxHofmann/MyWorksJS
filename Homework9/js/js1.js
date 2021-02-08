function f(n) {
  return n < 2 ? 1 : f(n - 1) + f(n - 2);
}

console.log(f(20));

function fb(n) {
  let f1 = 0;
  let f2 = 1;
  let cf = 1;
  for (let i = 1; i <= n; i++) {
    cf = f1 + f2;
    f1 = f2;
    f2 = cf;
  }
  return cf;
}

console.log(fb(20));
