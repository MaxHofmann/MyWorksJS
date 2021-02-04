let result = [1, 6, 0, 0, 4, 5, 6].reduce((sum, current) => {
	return current !== 0 ? current + sum : current;
});

console.log(result);