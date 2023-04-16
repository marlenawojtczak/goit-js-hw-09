import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const picker = document.getElementById(`datetime-picker`);
const startBtn = document.querySelector(`[data-start]`);
const daysCount = document.querySelector(`[data-days]`);
const hoursCount = document.querySelector(`[data-hours]`);
const minutesCount = document.querySelector(`[data-minutes]`);
const secondsCount = document.querySelector(`[data-seconds]`);
let intervalId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const today = new Date();
    if (selectedDate < today) {
      Notiflix.Notify.failure('Please choose a date in the future', {
        timeout: 10000,
        position: 'center-center',
        clickToClose: true,
        backOverlay: true,
        failure: { backOverlayColor: 'rgba(0,0,0,0.5)' },
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

const fp = flatpickr(picker, options);

const displayCountdown = value => {
  const selectedDate = value;
  intervalId = setInterval(() => {
    const today = new Date();
    const remainingTime = selectedDate - today;
    if (remainingTime < 0) {
      clearInterval(intervalId);
    } else {
      const { days, hours, minutes, seconds } = convertMs(remainingTime);
      daysCount.textContent = addLeadingZero(days);
      hoursCount.textContent = addLeadingZero(hours);
      minutesCount.textContent = addLeadingZero(minutes);
      secondsCount.textContent = addLeadingZero(seconds);
    }
  }, 1000);
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

const addLeadingZero = value => {
  return value.toString().padStart(2, `0`);
};

startBtn.addEventListener('click', () => {
  const selectedDate = new Date(picker.value);
  displayCountdown(selectedDate);
});
