let arr = [3, 5, 12, 9, 23, 93, 17];

let filteredArr = arr.filter((item) => (item > 2) & (item < 20));
let sumArr = filteredArr.reduce((sum, current) => sum + current);

console.log(sumArr);
