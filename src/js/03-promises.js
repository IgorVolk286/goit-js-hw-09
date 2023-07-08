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

  const quont = Number(amount.value);

  let position;
  let delay = Number(firstDelay.value) + Number(step.value);

  // const id = setInterval(() => {
  //   clearInterval(id);
  for (let i = 0; i < quont; i += 1) {
    position = i + 1;
    createPromise(position, delay)
      .then(onResolve => {
        console.log(Notiflix.Notify.success(onResolve));
      })
      .catch(onReject => {
        console.log(Notiflix.Notify.failure(onReject));
      });
  }
  // }, delay);
  // event.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const id = setInterval(() => {
      clearInterval(id);
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    });
  }, delay);
}
