const refs = {
  buttonStart: document.querySelector('button[data-start]'),
  buttonStop: document.querySelector('button[data-stop]'),
};

refs.buttonStart.addEventListener('click', onButtonStartClick);
refs.buttonStop.addEventListener('click', onButtonStopClick);

let colorId = null;

function onButtonStartClick(event) {
  console.log(event);
  event.target.disabled = true;
  refs.buttonStop.disabled = false;
  colorId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  //   console.log(colorId);
}

function onButtonStopClick(event) {
  event.target.disabled = true;
  clearInterval(colorId);
  document.body.style.backgroundColor = '#ffffff';
  refs.buttonStart.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
