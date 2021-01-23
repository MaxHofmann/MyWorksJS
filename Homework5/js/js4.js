const personA = {
  setName(name) {
    this.name = name;
  },

  getName() {
    console.log(this.name);
  },

  setAge(age) {
	this.ageValid = this.ageValidation(age);
	 
  },

  ageValidation(age) {
    if (age >= 18) {
      return age;
    } else {
      return "Validation Error";
    }
  },

  getAge() {
    console.log(this.ageValid);
  },
};

const personB = {};

function getProto(currentObj, protoObj) {
  let result = (currentObj.__proto__ = protoObj);
  return result;
}

getProto(personB, personA);
personB.setName("maks");
personB.getName();
personB.setAge(19);
personB.getAge();
