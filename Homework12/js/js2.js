class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static getType() {
    return ('Human');
}

  getName() {
    console.log('My name:', this.name);
  }

  getAge() {
    console.log('My age:', this.age);
  }
}

class Programmer extends Human {
  constructor(name, age) {
    super(name, age);
    this.job = 'Delevoper';
  }

  static getJob(job) {
    console.log('My job:', job);
  }
}

class Tester extends Human {
  constructor(name, age) {
    super(name, age);
    this.job = 'Tester';
  }

  static getJob(job) {
    console.log(`My job - ${job}`);
  }
}

class ITCompany {
  create(employeeType, name, age) {
    if (employeeType === 'Delevoper') {
      return new Programmer(name, age);
    }
    if (employeeType === 'Tester') {
      return new Tester(name, age);
    }

    throw new Error('Workers of this type were not found');
  }
}

const Greg = new Human('den', 55)
console.log(Greg);

const Company = new ITCompany();
const prog = Company.create('Delevoper', 'Max', 25);
console.log(prog);


const beginner = Company.create('Tester', 'Steve', 28);
console.log(beginner);

const gordon = Company.create('rgrsggse', 'Gordon', 28);
console.log(gordon);


