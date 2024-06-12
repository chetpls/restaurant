import './style.css';
import createHomePage from './home';
import createMenuPage from './menu';
import createContactPage from './contact';

const content = document.getElementById('content');

function loadHomePage() {
  content.innerHTML = '';
  content.appendChild(createHomePage());
}

function loadMenuPage() {
  content.innerHTML = '';
  content.appendChild(createMenuPage());
}

function loadContactPage() {
  content.innerHTML = '';
  content.appendChild(createContactPage());
}

document.getElementById('home').addEventListener('click', loadHomePage);
document.getElementById('menu').addEventListener('click', loadMenuPage);
document.getElementById('contact').addEventListener('click', loadContactPage);

loadHomePage(); // Load home page initially
