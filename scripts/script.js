const toggle = document.getElementById('toggle');
const checkbox = document.getElementById('checkbox-id');
const text = document.getElementById('text');

toggle.addEventListener('click', () => {
  const frontDiv = document.querySelector('.front');
  frontDiv.classList.toggle('moved');
  text.style.display = 'none';
  checkbox.checked = true;
  const rocket = document.querySelector('#rockets');
  rocket.classList.toggle('rocketAnimation');
  if (arrowH2.textContent === '<') {
    arrowH2.textContent = '';
  } else {
    arrowH2.textContent = '<';
  }
});
checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    text.style.display = 'flex';
  } else {
    text.style.display = 'none';
  }
});
