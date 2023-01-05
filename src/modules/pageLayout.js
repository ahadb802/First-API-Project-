import Logo from '../../assets/images/logo.png';
import microverseLogo from '../../murple_logo.png';
import contactUs from './contactUs.js';

const app = document.querySelector('#app');
const pageLayout = () => {
  app.innerHTML = `
    <header>
      <div class="logo">
        <img src=${Logo} alt="logo image" />
      </div>
      <nav class="navbar">
        <a class="nav-item" href="#" id="meals">Meals(<span class="homeCount"></span>)</a>
        <a class="nav-item" href="#" id="contact-us">Contact us</a>
      </nav>
    </header>

    <div class="cardContainer"></div>
    <div class="contact-us"></div>
    
    <footer class="footer">
      <img src=${microverseLogo} alt="microverse logo" />
      <p>Created by Microverse student under CC Licenses</p>
    </footer>
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