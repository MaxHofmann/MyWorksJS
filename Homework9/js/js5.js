const ulList = document.getElementById("ulList");
const itemLi = document.getElementsByClassName("li");
const inp = document.getElementById("inp");
const sum = document.getElementById("sum");

const func = function () {
  const numbersArray = [];

  for (const item of itemLi) {
    if (isNaN(item.innerText)) {
      continue;
    } else {
      numbersArray.push(+item.innerText);
    }
    let sumNumb = numbersArray.reduce((sum, current) => sum + current);
    inp.value = `${numbersArray.join(" + ")} = ${sumNumb}`;
  }
};

sum.addEventListener("click", func);
