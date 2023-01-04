import Logo from '../../assets/images/logo.png';
import microverseLogo from '../../murple_logo.png';

const app = document.querySelector('#app');
const pageLayout = () => {
  app.innerHTML = `
    <header>
      <div class="logo">
        <img src=${Logo} alt="logo image" />
      </div>
      <nav class="navbar">
        <a class="nav-item" href="">Home</a>
        <a class="nav-item" href="">Meals</a>
        <a class="nav-item" href="">Contact us</a>
      </nav>
    </header>

    <div class="cardContainer"></div>
    
    <footer class="footer">
      <img src=${microverseLogo} alt="microverse logo" />
      <p>Created by Microverse student under CC Licenses</p>
    </footer>
  `;
};
export default pageLayout;