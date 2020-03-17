// Navigation

const NAV = document.querySelector("#navigation");
// let links = NAV.getElementsByClassName("navigation-list__item");

// Loop through the buttons and add the active class to the current/clicked button
// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener("click", function() {
//     let current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

function changeActiveNavLink(selector) {
  NAV.querySelector(".active").classList.remove("active");
  NAV.querySelector(`[href="${selector}"]`).classList.add("active");
}

onscroll = () =>
  changeActiveNavLink(
    scrollY < 550
      ? "#header"
      : scrollY < 1050
      ? "#services"
      : scrollY < 1950
      ? "#portfolio"
      : scrollY < 2550
      ? "#about"
      : "#contacts"
  );
