function getIndex(str, targetString) {
  return str.indexOf(targetString);
}

const index = getIndex("Hello, my name is", "is");
const index2 = getIndex("Hello, my name is", "name");
console.log(index);
console.log(index2);
