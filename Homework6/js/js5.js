Object.prototype.getKeySum = function () {
  let setSum = 0;
  let filterKey = Object.values(this).filter((value) => Number(value) > 0);
  for (const item of filterKey) {
    setSum += item;
  }
  console.log(setSum);
};

Object.prototype.reversKey = function () {
  let result = {};
  for (let key in this) {
    if (this[key] > 0) {
      result[this[key]] = key;
    }
  }
  console.log(result);
};

let a = { a: 1, b: 2, c: 3, d: false, e: 0 };
a.getKeySum();
a.reversKey();
