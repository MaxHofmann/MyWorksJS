let arr1 = [
  [1, 6, 3, "6"],
  [10, 15, 13, "10"],
];
let arr2 = arr1[0].concat(arr1[1]);

let filteredArray = arr2.filter(
  (item) => (typeof item === "number") & (item % 2 === 0)
);

let sumArray = filteredArray.reduce(
  (sumValue, currentValue) => sumValue + currentValue
);

console.log(sumArray);
