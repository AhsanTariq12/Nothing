let body = document.querySelector('body');
let checkbox = document.querySelector('.dark-light');

checkbox.addEventListener('click', function() {
  let darkModeEnabled = document.body.classList.toggle('darkMode');
  localStorage.setItem('darkModeEnabled', darkModeEnabled);
});


