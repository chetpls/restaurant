export default function createHomePage() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('hero');

    const heroContent = document.createElement('div');
    heroContent.classList.add('hero-content');

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = ':re coffee';

    const subInfo = document.createElement('div');
    subInfo.classList.add('sub-info');
    subInfo.innerHTML = 'coffee&tea<br>sweets,alcohol';

    heroContent.appendChild(title);
    heroContent.appendChild(subInfo);

    homeDiv.appendChild(heroContent);
    return homeDiv;
}
