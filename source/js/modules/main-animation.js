const introInfo = document.querySelector('.intro__info-wrapper');
const main = document.querySelector('main');

const breakpoint = window.matchMedia('(min-width:1024px)');

if (!breakpoint.matches) {
  main.addEventListener('click', () => {
    if (introInfo.classList.contains('intro__info-wrapper--animation')) {
      introInfo.classList.remove('intro__info-wrapper--animation');
      introInfo.classList.add('intro__info-wrapper--stop-animation');
    } else {
      if (introInfo.classList.contains('intro__info-wrapper--stop-animation')) {
        introInfo.classList.remove('intro__info-wrapper--stop-animation');
      }
      introInfo.classList.add('intro__info-wrapper--animation');
    }
  });
}
