import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';

// render components
Home();
Menu();
Contact();
const restaurantDetails = document.querySelector('.restaurant-details');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');
const navlist = document.querySelectorAll('li');

function clearNav() {
  navlist.forEach((nav) => nav.classList.remove('active'));
}

function clearContent() {
  restaurantDetails.classList.remove('active');
  menu.classList.remove('active');
  contact.classList.remove('active');
}

window.addEventListener('click', (e) => {
  e.stopPropagation();

  if (e.target.getAttribute('data-target') === '#home') {
    clearContent();
    clearNav();
    restaurantDetails.classList.add('active');
    e.target.classList.add('active');
  } else if (e.target.getAttribute('data-target') === '#menu') {
    clearContent();
    clearNav();
    menu.classList.add('active');
    e.target.classList.add('active');
  } else if (e.target.getAttribute('data-target') === '#contact') {
    clearContent();
    clearNav();
    contact.classList.add('active');
    e.target.classList.add('active');
  }
});
