const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {
  const frontDiv = document.querySelector('.front');
  frontDiv.classList.toggle('moved');
  const rocket = document.querySelector('#rockets');
  rocket.classList.toggle('rocketAnimation');
});