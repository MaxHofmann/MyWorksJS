const inputPixel = document.getElementById("input-pixel");
const inputButton = document.getElementById("input-button");
const pixelBall = document.getElementById("ball");
const pakemonCat = document.getElementById("pakemon-cat");

const func = function (event) {
  const lengthInPixels = event.target.value;
  let a = Number(lengthInPixels);
  if (isNaN(a)) {
    event.target.value = "";
  }
};

const funcClick = function (event) {
  if (inputPixel.value > 600 || inputPixel.value == 0) {
    inputPixel.value = "ERROR";
  } else {
    pixelBall.style.marginLeft = inputPixel.value + "px";
    pixelBall.style.transform = "rotate(1100deg)";
  }

  function set() {
    if (inputPixel.value > 500) {
      pakemonCat.style.opacity = "0";
      inputPixel.value = `${"You have a new pakepon " + "КУСЬ"}`;
    }
  }

  setTimeout(set, 3000);
};

inputPixel.addEventListener("input", func);
inputButton.addEventListener("click", funcClick, {
  once: true,
});
