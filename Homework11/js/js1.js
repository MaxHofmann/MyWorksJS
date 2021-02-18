let myName = 'John';
let age = 25;

document.cookie = encodeURIComponent('my name' + myName) + '=' + encodeURIComponent('I am ' + age + 'years old');

document.body.append(document.cookie);
