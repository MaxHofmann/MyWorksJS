const textInput = document.getElementById("input-console");

const fn = function(event) {
	console.log(event.target.value);
};

textInput.addEventListener("change", fn);