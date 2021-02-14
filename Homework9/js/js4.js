console.time("Прошло");

function interval() {
  let from = 1;
  setTimeout(function go() {
    console.log("Прошло: " + from++ + " сек.");
    if(from <= 5) {
      setTimeout(go, 1000) 
    } else {
      console.timeEnd("Прошло");}
  }, 1000);
}
interval();
