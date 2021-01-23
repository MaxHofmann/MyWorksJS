const namesOfDays = {
  ru: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  en: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};

function getNameOfDay(lang, datNumber) {
	if(datNumber > 7) {
		datNumber = 1
	}
  for (const key in namesOfDays) {
    if (lang in namesOfDays) {
      let d = namesOfDays[lang];
      let b = d[datNumber - 1];
      console.log(b);
    } else {
      console.log("Язык не найден!");
    }
  }
}

getNameOfDay("ru", 8);
