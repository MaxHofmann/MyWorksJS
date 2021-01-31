const group = [
  {
    name: "Vlad",
    lastName: "Ostapov",
    age: 22,
    notebook: true,
  },

  {
    name: "Roma",
    lastName: "Vlasov",
    age: 32,
    notebook: true,
  },

  {
    name: "Vlad",
    lastName: "Ostapov",
    age: 22,
    notebook: true,
  },

  {
    name: "John",
    lastName: "Costantine",
    age: 22,
    notebook: true,
  },

  {
    name: "Vlad",
    lastName: "Ostapov",
    age: 22,
    notebook: true,
  },
];

function getStudentsList(arrayOfStudents) {
  arrayOfStudents.forEach((item) => {
    let SetItem = Object.entries(item).map((value) => value.join(" - "));
    item.toString = function () {
      return SetItem.join(", ");
    };
    console.log(String(item));
  });
}

getStudentsList(group);
