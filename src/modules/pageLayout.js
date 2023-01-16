import contactUs from './contactUs.js';

const app = document.querySelector('#app');
const pageLayout = () => {
  app.innerHTML = `
    <div class="cardContainer"></div>
    <div class="contact-us"></div>
  `;
  contactUs();
  document.querySelector('.contact-us').style.display = 'none';
  const contactUsNav = document.querySelector('#contact-us');
  contactUsNav.addEventListener('click', () => {
    document.querySelector('.cardContainer').style.display = 'none';
    document.querySelector('.contact-us').style.display = 'flex';
    document.title = 'contact-us';
  });
  const mealsNav = document.querySelector('#meals');
  mealsNav.addEventListener('click', () => {
    document.querySelector('.cardContainer').style.display = 'flex';
    document.querySelector('.contact-us').style.display = 'none';
    document.title = 'meals-home';
  });
};
export default pageLayout;