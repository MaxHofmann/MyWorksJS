const container = document.getElementById("container")
container.style.maxWidth = "1200px";
container.style.padding = "200px 20px";
container.style.margin = "0 auto";
container.style.minHeight = "100vh";


const myDiv = document.getElementById("div");
myDiv.style.backgroundColor = "#7e8aeb";
myDiv.style.height = "200px";
myDiv.style.width = "200px";
myDiv.style.margin = " 0 auto";
myDiv.style.position = "relative";


let div1 = document.createElement("div");
document.getElementById("div").append(div1);
div1.style.backgroundColor = "#ff8888";
div1.style.height = "200px";
div1.style.width = "200px";
div1.style.position = "absolute";
div1.style.zIndex = "-1";
div1.style.top = "-60%";
div1.style.left = "-60%";

let div2 = document.createElement("div");
document.getElementById("div").append(div2);
div2.style.backgroundColor = "#4def99";
div2.style.height = "200px";
div2.style.width = "200px";
div2.style.position = "absolute";
div2.style.zIndex = "-1";
div2.style.right = "-60%";
div2.style.bottom = "-60%";



