const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {
  const frontDiv = document.querySelector('.front');
  frontDiv.classList.toggle('moved');

  setTimeout(() => {
    frontDiv.classList.remove('moved');
  }, 5000);});