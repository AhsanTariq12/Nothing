window.addEventListener('load', function() {
    let darkModeEnabled = localStorage.getItem('darkModeEnabled');
    if (darkModeEnabled === 'true') {
      document.body.classList.add('darkMode');
    }
  });
  