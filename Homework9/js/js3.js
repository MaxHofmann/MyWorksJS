function printNumbers(from, to) {
  for (let i = from; i <= to; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000 * i);
  }
}

printNumbers(4, 33);

function printNumber(from, to) {
  let timerId = setInterval(function () {
    console.log(from);
    return from === to ? clearInterval(timerId) : from++;
  }, 1000);
}

printNumber(1, 20);

function printNumber(from, to) {
  setTimeout(function go() {
    console.log(from++);
    if (from <= to) {
      setTimeout(go, 1000);
    }
  }, 1000);
}

printNumber(1, 21);
