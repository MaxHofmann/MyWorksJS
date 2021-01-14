function stringValidation(userName) {
  if (userName.length >= 3) {
    return userName;
  }

  if (typeof userName !== String) {
    return "type - " + typeof userName + ". " + "Ошибка, не тот тип данных";
  }

  if (userName.length < 3) {
    return "Ошибка. Минимальная длина - 3";
  }
}

let userName = stringValidation("maks");
console.log(userName);
