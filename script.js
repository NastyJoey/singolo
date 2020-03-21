// Navigation
const NAV = document.querySelector('#navigation');
const HEADER = document.querySelector('header');

function changeActiveNavLink(selector) {
  NAV.querySelector('.active').classList.remove('active');
  NAV.querySelector(`[href="${selector}"]`).classList.add('active');

  scrollY > 0
    ? (HEADER.style.borderBottom = 'none')
    : (HEADER.style.borderBottom = '5px solid #323746');
}

onscroll = () =>
  changeActiveNavLink(
    scrollY < 550
      ? '#home'
      : scrollY < 1050
      ? '#services'
      : scrollY < 1950
      ? '#portfolio'
      : scrollY < 2550
      ? '#about'
      : '#contacts'
  );

// PORTFOLIO
let imgs = document.querySelectorAll('.portfolio__imgs'),
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

