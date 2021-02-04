const clikElement = document.getElementById("span-elem");
const imgElem = document.getElementById("img-elem");

const funcImg = () => (imgElem.className = "item");

const remFuncImg = () => (imgElem.className = "img-elem");

const mouseoverFuncImg = () => (imgElem.style.width = "200px");

clikElement.addEventListener("click", funcImg);
imgElem.addEventListener("click", remFuncImg);
imgElem.addEventListener("mouseover", mouseoverFuncImg);