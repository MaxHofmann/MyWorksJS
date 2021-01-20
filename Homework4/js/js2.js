const objectA = {
  a: 3,
  b: 2,
  c: 3,
};

const func = function () {
  let sum = 0;

  for (const key in this) {
    if (this[key] > 0 && typeof this[key] === "number") {
      sum += this[key];
    }
  }

  return sum;
};

let sumResult = func.bind(objectA);

console.log(sumResult());
