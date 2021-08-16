const modals = document.querySelectorAll('.modal');
const intro = document.querySelector('.intro');
const introInfo = document.querySelector('.intro__info-wrapper');
const header = document.querySelector('.header');

const breakpoint = window.matchMedia('(min-width:1024px)');

const onEnterPress = (modal, evt) => {
  if (evt.key === 'Enter') {
    evt.preventDefault();
    closeLoader(modal);
    introInfo.classList.add('intro__info-wrapper--animation');
  }
};

const closeLoader = (modal) => {
  if (modal.classList.contains('modal--loader-show')) {
    modal.classList.remove('modal--loader-show');
    intro.classList.add('intro--animation');
    header.classList.add('header--animation');
    window.removeEventListener('keydown', onEnterPress);
  }
};

const initLoader = () => {
  modals.forEach((modal) => {
    if (modal.classList.contains('modal--loader')) {
      modal.classList.add('modal--loader-show');

      if (breakpoint.matches) {
        window.addEventListener('keydown', (evt) => {
          evt.preventDefault();
          onEnterPress(modal, evt);
        });
      } else {
        window.addEventListener('click', () => {
          closeLoader(modal);
        });
      }
    }
  });
};

export {initLoader};
