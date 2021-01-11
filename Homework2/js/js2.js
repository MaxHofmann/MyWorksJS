//вариант 1
function hello2(name = 'гость') {
	console.log('Привет, ' + name);
};

hello2('Максим');

//вариант 2
function hello(name) {
	console.log("Привет, " + (name || "Гость"));
}

hello();