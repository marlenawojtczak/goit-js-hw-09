const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBgColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
};

startBtn.addEventListener('click', () => {
  intervalId = setInterval(changeBgColor, 1000);
  startBtn.disabled = true;
});

stopBtn.addEventListener(`click`, () => {
  clearInterval(intervalId);
  startBtn.disabled = false;
});
