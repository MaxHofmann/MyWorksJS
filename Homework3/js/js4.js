function AddProp(key, value, obj) {
  let isAlreadyExists = false;
  for (let existingKey in obj) {
    if (existingKey === key) isAlreadyExists = true;
  }

  if (isAlreadyExists) {
    console.log("Уже есть");
    return;
  }

  obj[key] = value;

  return obj;
}

let exampleObject = { a: 1, b: 2, c: 3 };
let userKey = prompt("Please enter a key");
let userNumb = +prompt("Please enter a number");

console.log(AddProp(userKey, userNumb, exampleObject));
