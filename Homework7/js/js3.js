let holder = document.getElementsByClassName("holder")

let divItem1 = document.createElement("div");
divItem1.className = "item";
divItem1.append(1)

let divItem2 = document.createElement("div");
divItem2.className = "item";
divItem2.append(2)

let divItem3 = document.createElement("div");
divItem3.className = "item";
divItem3.append(3)

let divItem4 = document.createElement("div");
divItem4.className = "item";
divItem4.append(4)

let divItem5 = document.createElement("div");
divItem5.className = "item";
divItem5.append(5)

for(const item of holder) {
	item.append(divItem1);
	item.append(divItem2);
	item.append(divItem3);
	item.append(divItem4);
	item.append(divItem5);
}