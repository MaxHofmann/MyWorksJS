const birthdayInp = document.getElementById('inp');
const labelInp = document.getElementById('label-inp');
const birtDiv = document.getElementById('birt-div');

const fn = function (event) {
  const birtDate = event.target.value;
  let date = new Date();
  let bD = new Date(birtDate);
  let b = String(bD - date);

  let setBirt = `${b[0] + b[1]} days, ${b[2] + b[3]} hours, ${
    b[4] + b[5]
  } minutes, ${b[6] + b[7]} milliseconds.`;

  localStorage.setItem('string', setBirt);
};
if (localStorage.getItem('string')) {
  let daysBirt = localStorage.getItem('string');
  birthdayInp.remove();
  labelInp.remove();
  birtDiv.append(daysBirt);
}
birthdayInp.addEventListener('change', fn);
