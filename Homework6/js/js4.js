Object.prototype.getUnique = function () {
  let result = [];
  for (let item of this) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  console.log(result);
};

const arr = [1, 1, 2, 2, 3];
const newArr = arr.getUnique();
