let area = document.getElementById('area');
let saveFunc = function() {
  localStorage.setItem('test', area.value);
}
  area.addEventListener('input', saveFunc)
  
  
  area.value = localStorage.getItem('test');