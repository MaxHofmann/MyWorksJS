const citiesAndCountries = {
  "Киев": "Украина",
  "Нью-Йорк": "США",
  "Амстердам": "Нидерланды",
  "Берлин": "Германия",
  "Париж": "Франция",
  "Лиссабон": "Португалия",
  "Вена": "Австрия",
};

function getCity() {
  let newM = [];

  for (const key in citiesAndCountries) {
	newM.unshift([key] + " - " + "это" + " " + citiesAndCountries[key]);
  }
  console.log(newM);
}

getCity();
