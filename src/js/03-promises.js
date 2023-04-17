import Notiflix from 'notiflix';

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const delayInput = parseInt(
    document.querySelector('input[name="delay"]').value
  );
  const stepInput = parseInt(
    document.querySelector('input[name="step"]').value
  );
  const amountInput = parseInt(
    document.querySelector('input[name="amount"]').value
  );

  for (let i = 0; i < amountInput; i++) {
    createPromise(i + 1, delayInput + i * stepInput)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }
});
