function removeUser(arr, index) {
	arr.splice(index,1)
};

const arr = ["Vasya", "Petya", "Alexey"];
removeUser(arr, 0);
console.log(arr);
