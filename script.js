// // Navigation

const navigationElement = document.querySelector('#navigation'),
  headerElement = document.querySelector('#home');

navigationElement.addEventListener('click', event => {
  setActive('navigation-list__link', 'active', event);
  
});


navigationElement.addEventListener('click', function () {
  burgerMenu.click();
});


document.addEventListener('scroll', onScroll);

function onScroll() {
  const curPos = window.scrollY,
    links = document.querySelectorAll('.navigation-list__link'),
    headerHeight = headerElement.offsetHeight;

  const sections = Array.from(links).map(link =>
    document.querySelector(`${link.getAttribute('href')}`)
  );

  sections.forEach(section => {
    if (headerHeight >= curPos) {
      links.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector("[href='#home']").classList.add('active');
    }

    if (
      section.offsetTop - headerHeight <= curPos &&
      section.offsetTop + section.offsetHeight - headerHeight > curPos
    ) {
      links.forEach(link => {
        link.classList.remove('active');
        if (section.getAttribute('id') === link.getAttribute('href').slice(1)) {
          link.classList.add('active');
        }
      });
    }

    if (
      curPos ===
      document.body.clientHeight - document.documentElement.clientHeight
    ) {
      links.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector("[href='#contacts']").classList.add('active');
    }
  });
}

// PORTFOLIO
const imgs = document.querySelectorAll('.portfolio__imgs'),
  btns = document.querySelectorAll('.portfolio__ul'),
  portfolio = document.querySelector('.portfolio__content'),
  portfolioMenu = document.querySelector('.portfolio__ul'),
  portfolioLinks = document.querySelectorAll('.nav__links');

// Shift imgs
btns.forEach(btn =>
  btn.addEventListener('click', event => {
    if (!event.target.classList.contains('active-btn')) {
      let portfolioPictures = [
        ...portfolio.querySelectorAll('.portfolio__imgs')
      ];
      portfolioPictures.unshift(portfolioPictures.pop());
      portfolioPictures.forEach(pic => portfolio.append(pic));
    }
  })
);

// Add active class on btn
portfolioMenu.addEventListener('click', function(event) {
  portfolioLinks.forEach(function(item) {
    event.preventDefault();
    item.classList.remove('active-btn');
    event.target.classList.add('active-btn');
  });
});

// Add active class on img
portfolio.addEventListener('click', event => {
  let target = event.target;
  if (target.tagName == 'IMG') {
    portfolio.querySelectorAll('img').forEach(item => {
      item.style.boxShadow = 'none';
    });
    event.target.style.boxShadow = '0px 0px 0px 5px #F06C64';
  }
});

// FORMS

const FORM = document.querySelector('.contacts__form'),
  SUBMIT = document.querySelector('.btn__submit'),
  MODAL = document.querySelector('.modal__overlay'),
  MODAL_TEXT = MODAL.querySelector('.modal__text'),
  MODAL_BUTTON = MODAL.querySelector('.modal__btn'),
  NAME_INPUT = document.querySelector('.form-name'),
  EMAIL_INPUT = document.querySelector('.form-email');

SUBMIT.addEventListener('click', event => {
  event.preventDefault();
  showModal();
});

function showModal() {
  const subject = document.querySelector('.form-subject').value.toString(),
    message = document.querySelector('.form-description').value.toString(),
    text = '<p>Письмо отправлено</p>';

  text += `<p>${subject ? 'Тема: ' + subject : 'Без темы'}</p>`;
  text += `<p>${message ? 'Описание: ' + message : 'Без описания'}</p>`;

  MODAL_TEXT.innerHTML = text;
  MODAL.classList.add('modal__overlay_show');
}

function closeModal(event) {
  if (event.target === MODAL_BUTTON || event.target === MODAL) {
    MODAL.classList.remove('modal__overlay_show');
    MODAL_TEXT.innerHTML = '';
    FORM.reset();
  }
}

MODAL.addEventListener('click', closeModal);

// SLIDER
const slides = document.querySelectorAll('.slider__slide'),
  activeSlide = 0,
  isEnabled = true,
  prevBtn = document.querySelector('.slider-buttons__button--prev'),
  nextBtn = document.querySelector('.slider-buttons__button--next');

function changeActiveSlide(n) {
  activeSlide = (n + slides.length) % slides.length;
}

function hideSlide(direction) {
  isEnabled = false;
  slides[activeSlide].classList.add(direction);
  slides[activeSlide].addEventListener('animationend', function() {
    this.classList.remove('slide-active', direction);
  });
}

function showSlide(direction) {
  slides[activeSlide].classList.add('slide-next', direction);
  slides[activeSlide].addEventListener('animationend', function() {
    this.classList.remove('slide-next', direction);
    this.classList.add('slide-active');
    isEnabled = true;
  });
}

function previousSlide(n) {
  hideSlide('slide-to-right');
  changeActiveSlide(n - 1);
  showSlide('slide-from-left');
}
function nextSlide(n) {
  hideSlide('slide-to-left');
  changeActiveSlide(n + 1);
  showSlide('slide-from-right');
}

prevBtn.addEventListener('click', function() {
  if (isEnabled) {
    previousSlide(activeSlide);
  }
});

nextBtn.addEventListener('click', function() {
  if (isEnabled) {
    nextSlide(activeSlide);
  }
});

const slide1 = document.querySelector('.slider__slide1');

slide1.addEventListener('click', function(event) {
  let target = event.target;
  console.log(target);
  if (target.tagName.toLowerCase() === 'img') {
    target.nextElementSibling.classList.toggle('display-off');
  } else if (target.classList.contains('slide1__img--off')) {
    target.classList.toggle('display-off');
  }
});

// Menu mobile
const burgerMenu = document.querySelector('.burger-menu'),
  navUl = document.querySelector('.navigation-list'),
  overlay = document.querySelector('.overlay-none'),
  logo = document.querySelector('.header__logo');

burgerMenu.addEventListener('click', function() {
  navUl.classList.toggle('nav-list-mobile');
  burgerMenu.classList.toggle('rotated90');
  logo.classList.toggle('logo-mobile');
  overlay.classList.toggle('overlay');
  
});

// Socials preventDefault
const socialsLogo = document.querySelectorAll('.socials-logo');

for (let socialLogo of socialsLogo) {
  socialLogo.addEventListener('click', event => {
    event.preventDefault();
  });
}
