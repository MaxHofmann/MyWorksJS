const obj = {
  a: '1',
  b: '2',
  c: '3',
  e: '4',
  o: '5',
};

const letters = ['a', 'b', 'c', 'e', 'b'];

for (const key in obj) {
  if (!letters.includes(key)) {
    Object.defineProperties(obj, key, {
      writeble: false,
    });
  }
}

console.log(Object.getOwnPropertyDescriptors(obj));