const casperBtn = document.getElementById("casper-btn");
const casperText = document.getElementById("casper-text");

const disappearance = () => (casperText.className = "disappearance");

casperBtn.addEventListener("click", disappearance);