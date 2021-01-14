function stringValidation(userName) {
  if (typeof userName !== "string") {
    return "type - " + typeof userName + ". " + "Ошибка, не тот тип данных";
  }

  return userName.length >= 3 ? userName : "Ошибка. Минимальная длина - 3";
}

let userName = stringValidation("maks");
console.log(userName);
