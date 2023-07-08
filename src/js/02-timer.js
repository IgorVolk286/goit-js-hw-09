import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  buttonStart: document.querySelector('button[data-start]'),
  timer: document.querySelector('.timer'),
  hours: document.querySelector('.value[data-hours]'),
  minutes: document.querySelector('.value[data-minutes]'),
  days: document.querySelector('.value[data-days]'),
  seconds: document.querySelector('.value[data-seconds]'),
};

refs.buttonStart.disabled = true;

refs.buttonStart.classList.add('button');
refs.input.classList.add('input');
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      Notiflix.Notify.warning('Please choose a date in the future');
      // return alert(`"Please choose a date in the future"`);
    } else {
      Notiflix.Notify.success('SALE WAITING FOR YOU');
      refs.buttonStart.disabled = false;
    }
  },
};

const fp = flatpickr('#datetime-picker', options);

refs.buttonStart.addEventListener('click', onButtonStartClick);

function onButtonStartClick(event) {
  refs.buttonStart.disabled = true;

  const marcUpButton = `<button type="button" class="button  js-button" > Reload Timer </button>`;
  refs.buttonStart.insertAdjacentHTML('afterend', marcUpButton);

  const buttonReload = document.querySelector('.js-button');
  buttonReload.addEventListener('click', onButtonReloadlick);

  timerId = setInterval(() => {
    const currentDate = new Date();
    const inputDate = new Date(refs.input.value);
    // console.log(inputData);
    let finishDate = inputDate - currentDate;
    // console.log(finishDate);
    const { days, hours, minutes, seconds } = convertMs(finishDate);
    refs.days.textContent = addLeadingZero(days);

    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent = addLeadingZero(minutes);
    refs.seconds.textContent = addLeadingZero(seconds);
  }, 1000);

  if (!finishDate) {
    clearInterval(timerId);
  }
}
function onButtonReloadlick() {
  document.location.reload();
  buttonReload.removeEventListener(onButtonReloadlick);
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.group(convertMs(58000000000));

function addLeadingZero(value) {
  return `${value}`.padStart(2, '0');
}
