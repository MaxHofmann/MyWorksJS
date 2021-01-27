function Nums(...args) {
  this.args = args;
}

Nums.prototype.getSum = function () {
  let setSum = 0;
  let getFilter = this.args.filter((item) => Number.isInteger(item));
  getFilter.forEach((item) => (setSum += item));

  return setSum;
};

Nums.prototype.myFilterReverse = function () {
  let getFilter = this.args.filter((item) => Number.isInteger(item));
  let getRevers = getFilter.sort(() => -1);
  return getRevers;
};

const test = new Nums(1, 4.4, 3.2, 4, 5, 5, 99, 4, 5, 4.8);
console.log(test.getSum()); // найдет сумму всех элементов в свойстве args, которые являются целыми  числами.
console.log(test.myFilterReverse()); // Отфильтруем массив в свойстве args и развернет массив (было [1, 2, 3] -> стало [3, 2, 1])
