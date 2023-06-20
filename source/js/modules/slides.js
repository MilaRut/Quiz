const steps = document.querySelectorAll('.step');

function initSlides() {
  steps.forEach((step) => {
    let currentStep = step;
    let nextBtn = currentStep.querySelector('[data-btn-next]');
    let prevBtn = currentStep.querySelector('[data-btn-prev]');
    let nextStep = currentStep.nextElementSibling;
    let prevStep = currentStep.previousElementSibling;

    if (nextBtn && nextStep) {
      nextBtn.addEventListener('click', function () {
        currentStep.classList.remove('is-active');
        currentStep.nextElementSibling.classList.add('is-active');
      });
    }
    if (prevBtn && prevStep) {
      prevBtn.addEventListener('click', function () {
        currentStep.classList.remove('is-active');
        currentStep.previousElementSibling.classList.add('is-active');
      });
    }
  });
}

export {initSlides};
