/* Nav Location and Re-Location */
const navBar = document.querySelector('.navbar-wrapper'),
  headerContainer = document.querySelector('#header-container'),
  mobileHeader = document.querySelector('#mobile-header');

/* Event Listeners */
document.addEventListener('DOMContentLoaded', () => {
  const winWidth = window.innerWidth;
  if (winWidth >= 992) {
    desktopNav();
  }
});

window.addEventListener('resize', () => {
  const winWidth = window.innerWidth;
  if (winWidth >= 992) {
    desktopNav();
  } else if (winWidth < 992) {
    mobileNav();
  }
});

/* Functions */
const desktopNav = () => {
  headerContainer.appendChild(navBar);
}
const mobileNav = () => {
  mobileHeader.appendChild(navBar);
}