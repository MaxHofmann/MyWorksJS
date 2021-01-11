function stringValidation(userName) {
	if (typeof userName === typeof '') {
	} if (userName.length >= 3) {
		return userName;
	} if (typeof userName !== typeof '') {
		return 'type - ' + typeof userName + '. ' + 'Ошибка, не тот тип данных';
	} if (userName.length < 3) {
		return 'Ошибка. Минимальная длина - 3';
	}
}

let userName = stringValidation('maks');
console.log(userName);