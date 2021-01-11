// // HW 3 (С помощью цикла найдите сумму всех четных чисел от 1 до 20 (не включительно));

// вариант 1.
let sum = 0;

for (let i = 2; i < 20; i++) {

	if (i % 2 === 0)
		sum += i;
}

console.log(sum);

// вариант 2.
let sum = 0;
for (let i = 2; i < 19; i += 2) {
	sum += i;
}
console.log(sum);