// function Calculator() {
//   if (!new.target) {
//     return new Calculator();
//   }
//   this.read = () => {
//     this.firstNumber = +prompt("Enter first number");
//     this.secondNumber = +prompt("Enter second number");
//   };

//   this.setAction = () => {
//     this.setAction = prompt(`Select function please: addition(+), subtraction(-), multiplication(*), division(/)`);
//   };

//   this.doAction = () => {
//     switch (this.setAction) {
//       case "+":
//         alert(this.sum());
//         break;
//       case "*":
//         alert(this.mul());
//         break;
//       case "-":
//         alert(this.min());
//         break;
//       case "/":
//         alert(this.div());
//     }
//   };

//   this.sum = () => {
//     return this.firstNumber + this.secondNumber;
//   };

//   this.mul = () => {
//     return this.firstNumber * this.secondNumber;
//   };

//   this.min = () => {
//     return this.firstNumber - this.secondNumber;
//   };

//   this.div = () => {
//     return this.firstNumber / this.secondNumber;
//   };
// }

// const calculator = new Calculator();
// calculator.read();
// calculator.setAction();
// const tres = calculator.doAction();
