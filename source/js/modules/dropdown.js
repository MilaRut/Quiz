const selectWrapper = document.querySelectorAll('[data-select-wrapper]');

function toggleDropdown() {
  selectWrapper.forEach((select) => {
    const textInput = select.querySelector('input[data-select]');
    const dropdownList = select.querySelector('.select__options');

    document.addEventListener('click', function (e) {
      if (e.target === textInput) {
        dropdownList.classList.toggle('is-active');
        select.classList.toggle('is-active');
      }
    });
  });
}

export {toggleDropdown};
