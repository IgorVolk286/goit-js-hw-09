import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  // const formData = new FormData(event.currentTarget);
  // formData.forEach((value, name) => {
  //   console.log(name);
  //   console.log(value);
  // });

  const { delay: firstDelay, step, amount } = event.currentTarget.elements;
  console.log(event.currentTarget.elements);

  const quantity = Number(amount.value);

  let position;
  let delay = Number(firstDelay.value);

  for (let i = 0; i < quantity; i += 1) {
    position = i + 1;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += Number(step.value);
  }
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
