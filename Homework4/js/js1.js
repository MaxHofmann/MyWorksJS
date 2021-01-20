const newObject = {
  name: "John",
  age: 40,
  lastName: "Constantin",
};

const bindFunc = (func, context, ...arguments) => {
  return func.bind(context, ...arguments);
};

function argFunc() {
  return console.log(this.name + this.age + this.lastName);
}

const result = bindFunc(argFunc, newObject);

result();
