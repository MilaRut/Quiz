const steps = document.querySelectorAll('.step');

function setStepCount() {
  const stepsArr = Array.from(steps);

  stepsArr.forEach((step, index) => {
    let stepCount = step.querySelector('.step__count');
    stepCount.textContent = `Шаг ${index + 1}/${stepsArr.length}`;
  });
}

export {setStepCount};
