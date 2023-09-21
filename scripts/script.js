const toggle = document.getElementById('toggle');
const checkbox = document.getElementById('checkbox-id');
const text = document.getElementById('text');

toggle.addEventListener('click', () => {
  const frontDiv = document.querySelector('.front');
  frontDiv.classList.toggle('moved');
  const buttons = document.querySelector('.buttons');
  buttons.classList.toggle('moved2');
  const rocket = document.querySelector('#rockets');
  rocket.classList.toggle('rocketAnimation');
});

const dark = document.getElementById('testButton');

dark.addEventListener('click', () => {
  document.querySelector("body").classList.toggle("darkMode");
  document.querySelector("article").classList.toggle("darkMode2");

});