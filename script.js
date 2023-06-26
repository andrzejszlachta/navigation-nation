const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

// control navigation animation
function changeNavAnimation(direction1, direction2) {
  navItems.forEach((nav, index) => {
    nav.classList.replace(`slide-${direction1}-${index + 1}`, `slide-${direction2}-${index + 1}`);
  })
}

function toggleNav() {
  // toggle manu bars
  menuBars.classList.toggle('change');
  // toggle menu active
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // overlay animate in
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    // nav items animate in
    changeNavAnimation('out', 'in');
  } else {
    // overlay animate out
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    // nav items animate out
    changeNavAnimation('in', 'out');
  }
}

// event listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach(navItem => navItem.addEventListener('click', toggleNav))

// make nav visible again after 1s from page load
window.addEventListener('DOMContentLoaded', ()=> {
  setTimeout(() => {
    overlay.hidden = false
  }, 1000);
})