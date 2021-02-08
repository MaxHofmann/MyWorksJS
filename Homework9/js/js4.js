console.time("Прошло");

function interval() {
  let from = 1;
  setTimeout(function go() {
    console.log("Прошло: " + from++ + " сек.");
    from <= 5 ? setTimeout(go, 1000) : console.timeEnd("Прошло");
  }, 1000);
}
interval();
