let sum = 0;

let number = +prompt("Please enter a number");
for (let i = 1; i <= number; i++) {
  sum += i ** 2;
}

console.log(sum);
