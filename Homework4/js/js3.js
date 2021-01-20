const valObject0 = {
  values: [1, "2", 4, 8, "8", 3, 10, null, false],
};
function getNewArray() {
  let filterContext;

  for (const key in this) {
    if (key === "values") {
      filterContext = this[key].filter(
        (el) => el % 2 === 0 && typeof el === "number" && 2 < el && el < 10
      );
    } else {
      filterContext = "Не найдено";
    }
  }
  return filterContext;
}
let funcionResult2 = getNewArray.bind(valObject0);

console.log(funcionResult2());
