// HW 4 (Создать цикл на 10 итераций. На каждой итерации если i четное, то вывести в консоль Fiz, если i не четное, то вывести в консоль слово Buz, если i кратное цифре 3, то вывести FizBuz.)


for (let i = 1; i <= 10; i++) {

	if (i % 1 === i % 2) {

		} else if (i % 1 === i % 3) {

		} else if (i % 1 === 0) {
			console.log(i, 'Buz');
		}

	if (i % 2 === i % 3) {
		
		} else if (i % 2 === 0) {
			console.log(i, 'Fiz');
		}

	if (i % 3 === 0) {
		console.log(i, 'FizBuz');
		} 
}
