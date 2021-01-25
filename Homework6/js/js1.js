function Animal(name, age, color) {
  if (!new.target) {
    return new Animal(name, age, color);
  }
  this.name = name;
  this.age = age;
  this.color = color;
}

const rabbit = Animal("Jone", 40, "white");
