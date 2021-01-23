const person = {
  name: "Vlad",
};

const person1 = {
  age: 1,
};

function setProto(currentObj, protoObj) {
  let result = currentObj.__proto__ = protoObj;
  return result
}

setProto(person1, person);
