function checkOptions(select) {
  const textInput = select.querySelector('input[data-select]');
  const options = select.querySelectorAll('.option');
  const nextBtn = select.nextElementSibling.querySelector('.btn--next');

  let arr = [];

  options.forEach((opt) => {
    opt.addEventListener('click', function (e) {
      let optValue = e.target.textContent;
      let isChecked = e.target.classList.contains('checked');
      if (!isChecked) {
        e.target.classList.add('checked');
        arr.push(optValue);
      } else {
        e.target.classList.remove('checked');
        const filteredArr = arr.filter((value) => value !== e.target.textContent);
        arr = filteredArr;
      }
    });
  });

  select.addEventListener('click', function () {
    textInput.value = arr;
    if (textInput.value !== '') {
      nextBtn.disabled = false;
    } else {
      nextBtn.disabled = true;
    }
  });
}

function validateSelect() {
  const selectWrapper = document.querySelectorAll('[data-select-wrapper]');
  selectWrapper.forEach((select) => {
    checkOptions(select);
  });
}

function validateRadio() {
  const radioWrapper = document.querySelectorAll('[data-radio-wrapper]');

  radioWrapper.forEach((radio) => {
    const step = radio.closest('.step');
    const nextBtn = radio.nextElementSibling.querySelector('.btn--next');
    const radioBtns = radio.querySelectorAll('input[type="radio"]');
    radioBtns.forEach((btn) => {
      btn.oninput = function () {
        nextBtn.disabled = false;
        step.classList.remove('is-active');
        step.nextElementSibling.classList.add('is-active');
      };
    });
  });
}

export {validateRadio, validateSelect};
